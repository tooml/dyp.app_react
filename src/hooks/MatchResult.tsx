import { useState, useEffect } from 'react';
import { SetResult } from '../contracts/data/Tournament';

const useMatchResult = (setResults: SetResult[]) => {

    const [home, setHome] = useState('-');
    const [away, setAway] = useState('-');

    useEffect(() => {
        const teamResult = (setResults: SetResult[], team: SetResult) => {
            return setResults.some(result => result === SetResult.None) ? '-' :
                setResults.filter(result => result === team || result === SetResult.Drawn).length;
        }
    
        const _home = String(teamResult(setResults, SetResult.Home));
        const _away = String(teamResult(setResults, SetResult.Away));
        
        setHome(_home);
        setAway(_away);
    }, [setResults, home, away]);

    return {
        home,
        away
    }
};

export default useMatchResult;
