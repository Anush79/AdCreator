import { actionTypes } from "../utils/constants";
import { usersData, adInsights } from "../utils/constants";
const {
  SORT_BY_CLICKS,
    SELECT_MATRIX,
} = actionTypes;
const initialValue = {
  cosmeticAds: [...adInsights],
  users: [...usersData],
  matric: "clicks",
};

const tableReducer = (state = initialValue, action) => {
  console.log({ state });
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
     
    default:
      return state
  }
};

export { tableReducer };
