import { ApplicationsState, ApplicationsTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: ApplicationsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ApplicationsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ApplicationsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ApplicationsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ApplicationsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

export default reducer;