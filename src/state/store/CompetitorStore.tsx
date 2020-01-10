import Competitor from '../../contracts/data/Competitor';

export interface CompetitorsState {
  competitors: Competitor[]
}

export const initialState: CompetitorsState = {
    competitors: [],
}
