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
      case 401:
        errorMessage = `Não autorizado - ${token} - Sua chave de API está errada.`;
        break;
      case 403:
        errorMessage =
          "Proibido -- O recurso solicitado é apenas para administradores.";
        break;
      case 404:
        errorMessage = "Recurso não encontrado.";
        break;
      case 405:
        errorMessage =
          "Método não permitido -- Você tentou acessar um recurso com um método inválido.";
        break;
      case 406:
        errorMessage =
          "Não aceitável -- Você solicitou um formato que não é json.";
        break;
      case 410:
        errorMessage =
          "Gone -- O recurso solicitado foi removido de nossos servidores.";
        break;
      case 418:
        errorMessage = "Eu sou um bule de chá."; // Isso é uma piada com base em uma especificação de "brincadeira" do HTTP. Você pode decidir mantê-la ou não.
        break;
      case 429:
        errorMessage =
          "Muitas requisições -- Você está fazendo muitas solicitações. Reduza a velocidade!";
        break;
      case 500:
        errorMessage = "Erro interno do servidor.";
        break;
      case 503:
        errorMessage =
          "Serviço indisponível -- Estamos temporariamente offline para manutenção. Tente novamente mais tarde.";
        break;
    }

    // Tente obter o corpo da resposta
    try {
      const errorData = await response.json();

      // Verifique se há uma mensagem de erro específica
      if (errorData && errorData.message) {
        errorMessage += " " + errorData.message;
      } else if (errorData && errorData.company_name) {
        errorMessage += " " + errorData.company_name.join(" ");
      }
    } catch (e) {
      // A resposta pode não ser JSON, então use a mensagem de erro padrão
    }

    throw new Error(errorMessage);
  }

  return await response.json();
}
