import { deleteApi, postApi, putApi, getApi } from "../../config/fetchApi.js";

export const requestApiGET =
  ({ state }) =>
  async (dispatch) => {
    dispatch({ type: "REQUEST_GET_DATA" });
    try {
      const { data } = await getApi("admin/v2/car", state);
      dispatch({
        type: "GET_DATA",
        payload: data.cars,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

export const requestApiGETById =
  ({ id }) =>
  async (dispatch) => {
    dispatch({ type: "REQUEST_GET_DATA_DETAIL" });
    try {
      const { data } = await getApi(`admin/car/${id}`);
      dispatch({
        type: "GET_DATA_DETAIL",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

export const requestPOST =
  ({ value, navigate }) =>
  async (dispatch) => {
    try {
      await postApi("admin/car", {
        ...value,
      });
      navigate("/list-car");
      dispatch({
        type: "MOCK_UP_API",
        payload: [],
      });
    } catch (error) {
      console.log(error.message);
    }
  };

export const requestPUT =
  ({ id, value, navigate }) =>
  async (dispatch) => {
    try {
      await putApi(`admin/car/${id}`, {
        ...value,
      });
      navigate("/list-car");
      dispatch({
        type: "MOCK_UP_API",
        payload: [],
      });
    } catch (error) {
      console.log(error.message);
    }
  };

export const requestDELETE =
  ({ id }) =>
  async (dispatch, getState) => {
    const { isTable } = getState().dataList;
    try {
      await deleteApi(`admin/car/${id}`);
      dispatch(requestApiGET({ state: isTable }));
    } catch (error) {
      console.log(error.message);
    }
  };
