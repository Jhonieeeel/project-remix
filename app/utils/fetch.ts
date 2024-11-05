export default async function fetchWrapper<T>(
  url: string | URL,
): Promise<T | null> {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (err) {
    return null;
  }
}
