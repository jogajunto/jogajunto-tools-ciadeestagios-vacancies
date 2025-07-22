require("dotenv").config();
const fs = require("fs");
const path = require("path");

require("dotenv").config();

const configString = `
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
        token: "${process.env.JOGAJUNTO_ACCESS_TOKEN}"
    },
}
`;

const directoryPath = path.join(__dirname, "config");
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

fs.writeFileSync(path.join(directoryPath, "apiConfig.js"), configString);
console.log("apiConfig.js gerado com sucesso.");
