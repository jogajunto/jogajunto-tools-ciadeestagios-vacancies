import { getVacancies } from "./services/vacanciesService.js";

async function listVacancies(company_name) {
  try {
    const vacancies = await getVacancies(company_name);
    console.log(vacancies);
    return vacancies;
  } catch (error) {
    console.error("Erro:", error.message);
    return null;
  }
}

// Para usar:
listVacancies("NomeDaEmpresa"); // Substitua pelo nome da empresa.
