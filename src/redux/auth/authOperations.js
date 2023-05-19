import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://rehab-p701.onrender.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const logIn = createAsyncThunk("auth/admin", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/admin", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const operations = {
  logIn,
};

export default operations;
