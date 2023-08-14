const fs = require('fs');
const path = require('path');

require('dotenv').config();

const configString = `
export const apiConfig = {
  baseURL: "https://adm.ciadeestagios.com.br",
  endpoints: {
    getToken: "/api/v1/auths/get-access-token",
    getVacancies: "/api/v1/vacancies/",
  },
  credentials: {
    email: "${process.env.JJ_VACANCIES_FETCH_EMAIL}",
    password: "${process.env.JJ_VACANCIES_FETCH_PASSWORD}",
    abilities: "vacancies",
  },
};
`;

const directoryPath = path.join(__dirname, 'config');
if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
}

fs.writeFileSync(path.join(directoryPath, 'apiConfig.js'), configString);
console.log('apiConfig.js gerado com sucesso.');
