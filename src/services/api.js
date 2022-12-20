import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;
const KEY = `30771927-0f20ce8e9e9263a99f3dfe8b1`;
const IMAGE_TYPE = `photo`;
const ORIENTATITON = `"horizontal"`;

export const getImages = async (imageName, page) => {
  const searchQuery = `${BASE_URL}?q=${imageName}&page=${page}&key=${KEY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATITON}&per_page=12`;
  const response = await axios.get(searchQuery);
  return response.data;
};
