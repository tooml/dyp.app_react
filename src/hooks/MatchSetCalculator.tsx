import { useState, useEffect } from 'react';
import { SetResult } from '../contracts/data/Tournament';

const useMatchSetCalculator = (matchResults: SetResult[], matchSetsToWin: number, drawn: boolean) => {

    const [setsToWin] = useState(matchSetsToWin);
    const [withDrawn] = useState(drawn);
    const [matchValid, setMatchValid] = useState(false);
    const [results, setResults] = useState(matchResults);

    useEffect(() => {
        const setCalculator = (sets: SetResult[]) => {
            const allMatchesPlayed = determineMatchState(sets);
            const winner = calculateWinner(sets);
            const setsExtended = extendSets(allMatchesPlayed, winner, sets);
            const newSetState = cutSets(setsExtended, winner);
            return { newSetState, winner };
        }

        const determineMatchState = (sets: SetResult[]) => {
            return sets.every(result => result !== SetResult.None);
        }

        const extendSets = (allMatchesPlayed: boolean, winner: SetResult, sets: SetResult[]) => {
            if (allMatchesPlayed && winner === SetResult.None)
                return [...sets, SetResult.None];

            return sets;
        }

        const noWinner = (winningHomeSets: number, winningAwaySets: number) => {
            return (winningHomeSets < setsToWin && winningAwaySets < setsToWin)
        }

        const drawn = (winningHomeSets: number, winningAwaySets: number) => {
            return (winningHomeSets === winningAwaySets)
        }

        const homeWins = (winningHomeSets: number, winningAwaySets: number) => {
            return (winningHomeSets > winningAwaySets)
        }

        const awayWins = (winningHomeSets: number, winningAwaySets: number) => {
            return (winningHomeSets < winningAwaySets)
        }

        const calculateWinner = (sets: SetResult[]) => {
            const homeSets = countWinningSets(sets, SetResult.Home);
            const awaySets = countWinningSets(sets, SetResult.Away);
            
            if (drawn(homeSets, awaySets) && withDrawn) return SetResult.Drawn;
            else if (noWinner(homeSets, awaySets) && !withDrawn) return SetResult.None;
            else if (drawn(homeSets, awaySets)) return SetResult.None;
            else if (homeWins(homeSets, awaySets)) return SetResult.Home;
            else if (awayWins(homeSets, awaySets)) return SetResult.Away;
            else return SetResult.None;
        }

        const countWinningSets = (sets: SetResult[], team: SetResult) => {
            return sets.filter(result => result === team || result === SetResult.Drawn).length;
        }

        const cutSets = (sets: SetResult[], matchWinner: SetResult) => {
            const cutedSets = sets.reduce((accumulator: SetResult[], result: SetResult) => {
                const countSets = accumulator.filter(result => result === matchWinner).length;
                if (countSets < setsToWin) return [...accumulator, result];
                return accumulator;
            }, []);

            return cutedSets;
        }

        const compareSets = (sets: SetResult[]) => {
            if (results.length === sets.length)
                return results.filter((set: SetResult, index: number) => sets[index] !== set).length > 0;
            return true;
        }

        const matchValid = (matchWinner: SetResult) => {
            return matchWinner !== SetResult.None;
        }

        const { newSetState, winner } = setCalculator(results); 
        const validMatchSets = matchValid(winner);

        if (compareSets(newSetState)) 
            setResults(newSetState);
        
        setMatchValid(validMatchSets);         

    }, [setsToWin, results, matchValid, withDrawn]);

    const handleNewResults = (newSets: SetResult[]) => {
        setResults(newSets);
    }

    return {
        results,
        handleNewResults,
        matchValid
    };
};

export default useMatchSetCalculator;
