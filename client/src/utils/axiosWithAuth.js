import React from "react";
import axios from "axios";

const axiosWithAuth = () => {
  const token = window.localStorage.get("token");

  return axios.create({
    baseURL: "http:localhost:5000/api",
    Authorization: {
      header: token,
    },
  });
};

export default axiosWithAuth;
