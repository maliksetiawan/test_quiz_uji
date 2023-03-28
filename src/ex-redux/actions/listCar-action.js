import { getApi } from "../../config/fetchApi.js";

export const ListCarData = (state) => async (dispatch) => {
  try {
    const { data } = await getApi("admin/v2/order", {
      ...state,
    });
    dispatch({
      type: "LIST_CAR",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
