import apiClient from './client';

const endPoint = '/listings';

// Get listings from the server
const getListings = () => apiClient.get(endPoint);

// Post listing to the server
const addListing = (listing, onUploadProgress) => {
  // Content Type - multipart/form-data for uploading image
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image, index) => data.append('images', {
    name: `image${index}`,
    type: 'image/jpeg',
    uri: image,
  }));

  if (listing.location) data.append('location', JSON.stringify(listing.location));

  return apiClient.post(endPoint, data, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};
