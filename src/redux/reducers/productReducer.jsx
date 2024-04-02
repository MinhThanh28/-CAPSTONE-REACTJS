import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";
const initialState = {
  arrProduct: [],
  prodDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    setProductdetailAction: (state, action) => {
      state.prodDetail = action.payload;
    },
  },
});

export const { setProductAction, setProductdetailAction } =
  productReducer.actions;

export default productReducer.reducer;

export const getApiActionAsync = async (dispatch) => {
  // xử lý logic api
  const res = await http.get("/api/Product");
  const action = setProductAction(res.data.content);
  dispatch(action);
};
export const getApiDetailActionAsync = (id) => {
  return async (dispatch) => {
    // xử lý logic api
    const res = await http.get(`/api/product/getbyid?id=${id}`);
    // sau khi có dữ liệu sẽ dùng dispatch để đưa về redux
    const action = setProductdetailAction(res.data.content);
    dispatch(action);
  };
};
