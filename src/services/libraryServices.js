const URL = "http://localhost:9000";

// Get shelves from server
export async function getAllShelves() {
  const data = await (await fetch(`${URL}/shelves`)).json();
  return data;
}

// Get Books from server
export async function getAllBooks() {
  const data = await (await fetch(`${URL}/books`)).json();
  return data;
}
