import { getApi } from "../../config/fetchApi.js";

export const BarchartData = () => async (dispatch) => {
  try {
    const { data } = await getApi("admin/order/reports", {
      from: "2022-01-01",
      until: "2022-01-31",
    });
    //     console.log(data);
    dispatch({
      type: "BAR_CHART",
      payload: data.map((item) => ({
        date: item.day,
        value: Math.floor(Math.random() * (1000000 - 200) + 1000),
      })),
    });
  } catch (error) {
    console.log(error.message);
  }
};
