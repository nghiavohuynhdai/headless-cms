import axios from "axios";

export const getPosts = async (payload) => {
  return await axios.get(`/blog/posts?_start=0&_limit=${payload.limit}`);
};

export const getPostBySlug = async (slug) => {
  return await axios.get(`/blog/posts/${slug}`);
};

export const getPostByTag = async (tags) => {
  return await axios.get(`/blog/tags/${tags}?_start=0&_limit=${10}`);
};

export const updatePostService = async (post) => {
  const response = await axios.put("/blog/posts", post);
  console.log(response);
  response.status === 202;
  return response;
};

export const uploadFile = async (formData) => {
  return await axios.post("/blog/stores", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export async function postTag(newTag) {
  const response = await axios.post("/blog/posts", {
    desc: newTag.desc,
    html: newTag.html,
    imageUrl: newTag.imageUrl,
    slug: newTag.slug,
    tags: newTag.tags,
    title: newTag.title,
  });
  console.log(response);
  response.status === 201;
  return response;
}

export const deletePostById = async (id) => {
  return await axios.delete(`/blog/posts/${id}`);
};
