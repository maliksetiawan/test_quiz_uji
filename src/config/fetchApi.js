/* eslint-disable no-unused-vars */
import axios from "axios";
import { url, TOKEN } from "./authoritize";

export const fetchApi = (params) => {
  return axios.post(
    url + "admin/auth/login",
    { ...params },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

export const connectApi = (params) => {
  return axios.get(url + "admin/v2/car", {
    params: {
      ...params,
    },
    headers: {
      access_token: `${TOKEN}`,
      "content-type": "application/json",
    },
  });
};

export const listCarApi = (params) => {
  return axios.get(url + "admin/v2/order", {
    params: {
      ...params,
    },
    headers: {
      access_token: `${TOKEN}`,
      "content-type": "application/json",
    },
  });
};

export const getApi = (endpoint, params) => {
  return axios.get(url + endpoint, {
    params: {
      ...params,
    },
    headers: {
      access_token: `${TOKEN}`,
      "content-type": "application/json",
    },
  });
};

export const postApi = (endpoint, params) => {
  return axios.post(
    url + endpoint,
    {
      ...params,
    },
    {
      headers: {
        access_token: `${TOKEN}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const putApi = (endpoint, params) => {
  return axios.put(
    url + endpoint,
    {
      ...params,
    },
    {
      headers: {
        access_token: `${TOKEN}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const deleteApi = (endpoint, params) => {
  return axios.delete(url + endpoint, {
    headers: {
      access_token: `${TOKEN}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
