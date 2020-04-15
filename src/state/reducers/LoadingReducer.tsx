import { LoadingState, initialLoadingState } from '../store/LoadingStore';
import { LoadingActionTypes, LOADING } from '../actions/LoadingActions';

export function loadingReducer(loadingState: LoadingState = initialLoadingState, action: LoadingActionTypes): LoadingState {
  switch (action.type) {
      
    case LOADING:
        return { ...loadingState, loading: action.payload }

    default:
      return loadingState;
  }
}
