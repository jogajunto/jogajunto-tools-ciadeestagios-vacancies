import { apiConfig } from "../config/apiConfig.js";
import { fetchAPI } from "../helpers/fetchHelper.js";

export async function getToken() {
  return fetchAPI(
    `${apiConfig.baseURL}${apiConfig.endpoints.getToken}`,
    'POST',
    apiConfig.credentials
  ).then(data => data.access_token);  // Ajuste conforme o campo correto da resposta da API.
}

export async function getVacancies(company_name) {
  const token = await getToken();
  return fetchAPI(`${apiConfig.baseURL}${apiConfig.endpoints.getVacancies}${company_name}`, 'GET', null, token);
}
