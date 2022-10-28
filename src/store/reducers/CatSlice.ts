import { ICat } from "../../models/ICat";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCats } from "./ActionCreactors";

interface CardState {
  cats: ICat[];
  isLoading: boolean;
  error: string;
}

const initialState: CardState = {
  cats: [],
  isLoading: false,
  error: "",
};

export const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    likeCat: (state, action: PayloadAction<string>) => {
      state.cats = state.cats.map((cat) => {
        if (cat.id === action.payload) {
          return { ...cat, like: !cat.like };
        } else {
          return cat;
        }
      });
    },
    deleteCat: (state, action: PayloadAction<string>) => {
      state.cats = state.cats.filter((cat) => cat.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchCats.fulfilled.type]: (state, action: PayloadAction<ICat[]>) => {
      state.isLoading = false;
      state.error = "";
      state.cats = action.payload.map((cat) => ({ ...cat, like: false }));
    },
    [fetchCats.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCats.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { likeCat, deleteCat } = catSlice.actions;
export default catSlice.reducer;
