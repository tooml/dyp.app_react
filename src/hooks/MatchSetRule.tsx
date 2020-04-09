import { useState } from 'react';
import { SetResult } from '../contracts/data/Tournament';

export interface MatchSetParameter {
    sets: number, 
    drawn: boolean,
    result: SetResult[]
}

const useMatchSetRule = () => {

    const [valid, setValid] = useState<boolean>();
    const [results, setResults] = useState<SetResult[]>([]);


    const setCalculator = (sets: SetResult[], setsToWin: number, withDrawn: boolean) => {
        const allMatchesPlayed = determineMatchState(sets);
        const winner = determineWinner(sets, setsToWin, withDrawn);
        const setsExtended = extendSets(allMatchesPlayed, winner, sets);
        const newSetState = cutSets(setsExtended, winner, setsToWin);
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

    const noWinner = (winningHomeSets: number, winningAwaySets: number, setsToWin: number) => {
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

    const determineWinner = (sets: SetResult[], setsToWin: number, withDrawn: boolean) => {
        const homeSets = countWinningSets(sets, SetResult.Home);
        const awaySets = countWinningSets(sets, SetResult.Away);

        if (drawn(homeSets, awaySets) && withDrawn) return SetResult.Drawn;
        else if (noWinner(homeSets, awaySets, setsToWin) && !withDrawn) return SetResult.None;
        else if (drawn(homeSets, awaySets)) return SetResult.None;
        else if (homeWins(homeSets, awaySets)) return SetResult.Home;
        else if (awayWins(homeSets, awaySets)) return SetResult.Away;
        else return SetResult.None;
    }

    const countWinningSets = (sets: SetResult[], team: SetResult) => {
        return sets.filter(result => result === team || result === SetResult.Drawn).length;
    }

    const cutSets = (sets: SetResult[], matchWinner: SetResult, setsToWin: number) => {
        const cutedSets = sets.reduce((accumulator: SetResult[], result: SetResult) => {
            const countSets = accumulator.filter(result => result === matchWinner).length;
            if (countSets < setsToWin) return [...accumulator, result];
            return accumulator;
        }, []);

        return cutedSets;
    }

    const detectChange = (sets: SetResult[]) => {
        if (results.length === sets.length) {
            const r = results.filter((set: SetResult, index: number) => sets[index] !== set);
            return r.length > 0;
        }
        return true;
    }

    const matchHasWinner = (matchWinner: SetResult) => {
        return matchWinner !== SetResult.None;
    }

    const handleSetResult = (match: MatchSetParameter) => {
        const { newSetState, winner } = setCalculator(match.result, match.sets, match.drawn);

        if (detectChange(newSetState)) {
            setResults(newSetState)
        }
        setValid(matchHasWinner(winner));
    }

    return {
        valid,
        results,
        setValid,
        setResults,
        handleSetResult
    }
}

export default useMatchSetRule;