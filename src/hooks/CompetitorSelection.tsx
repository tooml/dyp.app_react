import { useState, useEffect } from 'react';
import Competitor from '../contracts/data/Competitor';
import produce from 'immer';
import Person from '../contracts/data/Person';

const useCompetitorSelection = (persons: Person[]) => {

    const [competitors, setCompetitors] = useState<Competitor[]>([]);

    useEffect(() => {
        const initCompetitors: Competitor[] = persons.map(person => {
            return { personId: person.id, name: person.firstName, compete: false };
        });

        setCompetitors(initCompetitors);
    }, [persons]);


    const toggleCompetitor = (id: string, value: boolean) => {
        const newState = produce(competitors, draft => {
            let index = draft.findIndex(comptetitors => comptetitors.personId === id);
            draft[index].compete = value;
        });
        setCompetitors(newState);
    }

    const countCompetitors = competitors.filter(competitor => competitor.compete).length;

    return {
        competitors,
        toggleCompetitor,
        countCompetitors
    }
};

export default useCompetitorSelection;
