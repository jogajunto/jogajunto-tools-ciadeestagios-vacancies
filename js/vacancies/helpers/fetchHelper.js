export async function fetchAPI(
  endpoint,
  method = "GET",
  body = null,
  token = null
) {
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(endpoint, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  let errorMessage = "Erro na API";

  if (!response.ok) {
    // Personalizar a mensagem de erro com base no código de status
    switch (response.status) {
      case 400:
        errorMessage = "Requisição inválida.";
        break;
      case 404:
        errorMessage = "Recurso não encontrado.";
        break;
      case 500:
        errorMessage = "Erro interno do servidor.";
        break;
      // Adicione outros códigos de status conforme necessário
    }

    // Tente obter o corpo da resposta
    try {
      const errorData = await response.json();

      // Verifique se há uma mensagem de erro específica
      if (errorData && errorData.message) {
        errorMessage += " " + errorData.message;
      } else if (errorData && errorData.company_name) {
        errorMessage += " " + errorData.company_name.join(' ');
      }
    } catch (e) {
      // A resposta pode não ser JSON, então use a mensagem de erro padrão
    }

    throw new Error(errorMessage);
  }

  return await response.json();
}
