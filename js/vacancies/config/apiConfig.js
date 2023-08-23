require('dotenv').config();
export const apiConfig = {
  baseURL: "https://adm.ciadeestagios.com.br",
  endpoints: {
    getToken: "/api/v1/auths/get-access-token",
    getVacancies: "/api/v1/vacancies/",
  },
  credentials: {
    email: "email",
    password: "password",
    abilities: "vacancies",
    token: process.env.JJ_VACANCIES_FETCH_TOKEN
  },
};
