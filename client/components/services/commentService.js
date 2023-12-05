import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/comments";

export const getAll = async (productId) => {
  const queary = new URLSearchParams({
    where: `productId="${productId}"`,
  });

  const result = await request.get(`${baseUrl}?${queary}`);

  return result;
};

export const create = async (productId, username, text) => {
  const newComment = await request.post(baseUrl, {
    productId,
    username,
    text,
  });

  return newComment;
};
