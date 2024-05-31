import { createSlice } from "@reduxjs/toolkit";
const plansSlice = createSlice({
  initialState: {
    plans: [
      {
        id: 1,
        title: "Fit",
        exp: "16/11/2024",
        price: "1200",
        recommended: false,
      },
      {
        id: 2,
        title: "Fit",
        exp: "16/11/2024",
        price: "1000",
        recommended: true,
      },
      {
        id: 3,
        title: "Fit",
        exp: "16/11/2024",
        price: "1500",
        recommended: false,
      },
    ],
  },
  name: "plansSlice",
  reducers: {},
});
export const {} = plansSlice.actions;
export default plansSlice.reducer;
