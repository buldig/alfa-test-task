import { ICat } from "../../models/ICat";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCats = createAsyncThunk(
  "cat/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ICat[]>(
        "https://api.thecatapi.com/v1/images/search",
        {
          headers: {
            "x-api-key":
              "live_w5kkKdIMFFf6I3TKGgKhfsYoyzXIc6P9wBVxUVMduQFreZNv4PAVLjCqoiYIDSWx",
          },
          params: {
            limit: 8,
          },
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить данные");
    }
  }
);
