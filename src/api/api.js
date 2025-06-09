// src/api/api.js

import axios from "axios";

// ✅ Base URL from environment variable
const baseURL = process.env.REACT_APP_API_URL;

// ✅ Example function to test API connection
export const fetchData = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/test`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
