function handleStatus(response: Response) {
  return response.ok ? response.json() : Promise.reject(response.statusText)
}

export async function get(endpoint: string): Promise<any> {
  return fetch(endpoint).then(handleStatus)
}
