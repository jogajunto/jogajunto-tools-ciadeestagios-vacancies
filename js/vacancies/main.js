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
    const vacancies = await getVacancies(company_name, callbacks);
    console.log(vacancies);
    return vacancies;
  } catch (error) {
    console.error("Erro:", error.message);
    return null;
  }
}

