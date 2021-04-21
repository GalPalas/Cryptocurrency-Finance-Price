import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "coins",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    coinsRequested: (coins, action) => {
      coins.loading = true;
    },
    coinsRequestedFailed: (coins, action) => {
      coins.loading = false;
    },
    coinsResived: (coins, action) => {
      coins.list = action.payload;
      coins.loading = false;
    },
  },
});

export const {
  coinsRequested,
  coinsRequestedFailed,
  coinsResived,
} = slice.actions;
export default slice.reducer;

export const loadCoins = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      onStart: coinsRequested.type,
      onSuccess: coinsResived.type,
      onError: coinsRequestedFailed.type,
    })
  );
};

export const getFilteredCoins = (search) =>
  createSelector(
    (state) => state.entities.coins,
    (coins) =>
      coins.list.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      )
  );
