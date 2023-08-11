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

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Erro na API");
  }

  return await response.json();
}
