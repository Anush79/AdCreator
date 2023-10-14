import { actionTypes } from "../utils/constants";
import { votersData,  } from "../utils/constants";
const {
  SORT_BY_CLICKS,
  SORT_BY_CATEGORIES,
  SORT_BY_COST,
  SORT_BY_CONVERSIONS,
  SORT_BY_REVENUE,
} = actionTypes;
const initialValue = {
  cometics:[],
  users:[]
};

const tableReducer = (state=initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case SORT_BY_CATEGORIES:

      break;
  
    case SORT_BY_CLICKS:
      return {}
      break;
    case SORT_BY_CONVERSIONS:
      break;
    case SORT_BY_COST:
      break;
    case SORT_BY_REVENUE:
      break;

    default:
      break;
  }
};

export {tableReducer}
