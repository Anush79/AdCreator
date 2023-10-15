import { actionTypes } from "../utils/constants";
import { usersData, adInsights } from "../utils/constants";
const {
  SORT_BY_CLICKS,
    SELECT_MATRIX,
    SORT_BY_NAME
} = actionTypes;
const initialValue = {
  cosmeticAds: [...adInsights],
  users: [...usersData],
  matric: "clicks",
};

const tableReducer = (state = initialValue, action) => {

  const { type, payload } = action;
  switch (type) {
    case SELECT_MATRIX:
      return { ...state, matric: payload };
    case SORT_BY_CLICKS:
      return {
        ...state,
        [payload.table]: [
          ...state[payload.table].sort((a, b) =>
            payload.toggle
              ? a[payload.prop] - b[payload.prop]
              : b[payload.prop] - a[payload.prop]
          ),
        ],
      };
      case SORT_BY_NAME:
        const nameSorted = state[payload.table].sort((a, b) =>
          payload.toggle
            ? a.campaigns.localeCompare(b.campaigns)
            : b.campaigns.localeCompare(a.campaigns)
        );
        return{...state,[payload.table]: [...nameSorted]};
    default:
      return state
  }
};

export { tableReducer };
