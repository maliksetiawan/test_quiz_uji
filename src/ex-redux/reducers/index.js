import { combineReducers } from "redux";
import { userData } from "./ex-reducer-data";
import { dataList } from "./ex-reducer";

export default combineReducers({
  //reducers Combine
  userData,
  dataList,
});
