import { getVacancies } from "./services/vacanciesService.js";

const defaultCallbacks = {
  onInit: () => console.log('Inicializando...'),
  onLoad: () => console.log('Carregando...'),
  onSuccess: (data) => console.log('Dados carregados:', data),
  onError: (error) => console.error('Erro:', error.message),
};

export async function listVacancies(company_name, customCallbacks = {}) {
  const mergedCallbacks = {
    ...defaultCallbacks,
    ...customCallbacks
  };

  try {
    mergedCallbacks.onInit && mergedCallbacks.onInit();
    const vacancies = await getVacancies(company_name, mergedCallbacks);
    return vacancies;
  } catch (error) {
    mergedCallbacks.onError && mergedCallbacks.onError(error);
    return null;
  }
}

