const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000/api";

export async function apiFetch<TResponse>(
  input: string,
  init?: RequestInit,
): Promise<TResponse> {
  const url = input.startsWith("http")
    ? input
    : `${API_BASE_URL}${input.startsWith("/") ? input : `/${input}`}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      text || `Error en la petición (${response.status} ${response.statusText})`,
    );
  }

  return (await response.json().catch(() => null)) as TResponse;
}

