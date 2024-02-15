import axios from "axios";

const access_token = process.env.ASAAS_API_KEY;

const asaasApi = axios.create({
  baseURL: "https://www.asaas.com/api/v3",
  headers: {
    "Content-Type": "application/json",
    access_token: access_token,
  },
});

export default asaasApi;
