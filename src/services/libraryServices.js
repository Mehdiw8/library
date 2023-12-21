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
// Get Books from server
export async function getAllSubjects() {
  const data = await (await fetch(`${URL}/subjects`)).json();
  return data;
}

// Post Shelf
export const createTheShelf = async (shelf) => {
  const url = `${URL}/shelves`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shelf),
  });

  return res;
};
// delete TheShelf
export const deleteTheShelf = async (id) => {
  const url = `${URL}/shelves/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
  });

  return res;
};
