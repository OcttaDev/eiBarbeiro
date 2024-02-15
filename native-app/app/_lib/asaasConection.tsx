import axios from "axios";

const access_token =
  "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAzOTUxMjE6OiRhYWNoX2ZhMjRlMmJiLThmOTAtNGU2Ni1iZmI0LWJmODk5MDRmMzcxMA==";

const asaasApi = axios.create({
  baseURL: "https://www.asaas.com/api/v3",
  headers: {
    "Content-Type": "application/json",
    access_token: access_token,
  },
});
