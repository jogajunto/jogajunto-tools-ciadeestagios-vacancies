import { getVacancies } from "./services/vacanciesService.js";

const callbacks = {
  onInit: () => console.log('Inicializando...'),
  onLoad: () => console.log('Carregando...'),
  onSuccess: (data) => console.log('Dados carregados:', data),
  onError: (error) => console.error('Erro:', error.message),
};

async function listVacancies(company_name, callbacks) {
  try {
    const vacancies = await getVacancies(company_name, callbacks);
    console.log(vacancies);
    return vacancies;
  } catch (error) {
    console.error("Erro:", error.message);
    return null;
  }
}

