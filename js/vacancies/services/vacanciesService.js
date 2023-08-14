import { apiConfig } from "../config/apiConfig.js";
import { fetchAPI } from "../helpers/fetchHelper.js";

export async function getToken(callbacks) {
  callbacks.onInit && callbacks.onInit();
  try {
    const data = fetchAPI(
      `${apiConfig.baseURL}${apiConfig.endpoints.getToken}`,
      'POST',
      apiConfig.credentials
    ).then(data => data.access_token);  // Ajuste conforme o campo correto da resposta da API.

    return data;  // Ajuste conforme o campo correto da resposta da API.
  } catch (error) {
    throw error;
  }
}

export async function getVacancies(company_name, callbacks = {}) {
  callbacks.onLoad && callbacks.onLoad();

  try {
    const token = await getToken();
    const data = await fetchAPI(`${apiConfig.baseURL}${apiConfig.endpoints.getVacancies}${company_name}`, 'GET', null, token);
    callbacks.onSuccess && callbacks.onSuccess(data);
    return data;
  } catch (error) {
    callbacks.onError && callbacks.onError(error);
    throw error;
  } 
}
