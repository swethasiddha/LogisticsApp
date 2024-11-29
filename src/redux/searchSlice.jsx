import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCriteria: [
    { type: "Creation Date", value: "2024/10/28 - 2024/11/25" },
    { type: "Shipment Status", value: "In Process, Ready to Submit" },
    { type: "Transport Mode", value: "Land, Air, Ocean FCL, Ocean LCL, Parcel" },
  ],
  availableCriteria: ["Booking ID", "Shipment Options", "Shipper", "Consignee", "STT No."],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addCriteria: (state, action) => {
      state.selectedCriteria.push(action.payload);
    },
    removeCriteria: (state, action) => {
      state.selectedCriteria = state.selectedCriteria.filter(
        (criteria) => criteria.type !== action.payload
      );
    },
  },
});

export const { addCriteria, removeCriteria } = searchSlice.actions;
export default searchSlice.reducer;
