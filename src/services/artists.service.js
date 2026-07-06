const API_BASE_URL = import.meta.env.VITE_API_URL;

export const createArtist = async (artist) => {
  const response = await fetch(`${API_BASE_URL}/artists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artist),
  });
  console.log(response);
  return response;
};

export const getAllArtist = async () => {
  const response = await fetch(`${API_BASE_URL}/artists`);
  const data = await response.json();
  return data;
};

export const addAlbum = async (artisId, album) => {
  const response = await fetch(`${API_BASE_URL}/artists/${artisId}/add-album`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(album),
  });
  const data = await response.json();
  return data;
};
