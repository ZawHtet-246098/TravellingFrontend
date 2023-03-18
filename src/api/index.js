import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({ baseURL: "https://test-vercel-a3as.vercel.app/" });
// const API = axios.create({
//   baseURL: "https://travelapi-2022713.herokuapp.com",
// });

export const signIn = (formValues) => API.post("/user/signin", formValues);
export const signUp = (formValues) => API.post("/user/signup", formValues);

export const createPost = (newPost) => API.post("/posts", newPost);
export const fetchPosts = () => API.get("/posts");
export const likePost = (id, post) => API.patch(`/posts/${id}/likePost`, post);
export const fetchPost = (id) => API.get(`/posts/${id}`);

export const fetchHotels = (country, price, rating) =>
  API.get(
    `/hotels/search?country=${country}&numericFilters=price>${price},rating>=${rating}`
  );
// export const fetchHotel = (id) => {
//   API.get(`/hotels/${id}`);
// };

export const getSingleHotel = (id) => API.get(`/hotels/${id}`);
// export const fetchHotels = (country, price, rating) =>
//   API.get(`/hotels/search?country=${country}`);

export const getPlaces = () => API.get("/places");
