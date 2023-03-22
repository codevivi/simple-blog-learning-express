import { writeFile, mkdir, readFile } from "node:fs/promises";
const DB_PATH = new URL("./../database/", import.meta.url).pathname;
const DB_NAME = "database.json";
const DB = DB_PATH + "/" + DB_NAME;

export const savePost = async function (post) {
  post.date = new Date().toLocaleDateString();
  let currentData = await getData();
  currentData.posts.push(data);
  return await writeData(JSON.stringify(currentData));
};

export const getAllPosts = async function () {
  const data = await getData();
  return data.posts;
};

export const saveData = async function save(data) {
  data.date = new Date().toLocaleDateString();
  let currentData = await getData();
  currentData.push(data);
  return await writeData(JSON.stringify(currentData));
};

export const getPostByInd = async function (ind) {
  let all = await getAllPosts();
  return all[ind] ? all[ind] : false;
};

export const saveUser = async function (user) {
  let currentData = await getData();
  currentData.users.push(user);
  return await writeData(JSON.stringify(currentData));
};

export const getAllUsers = async function () {
  const data = await getData();
  return data.users;
};

export const getUserByInd = async function (ind) {
  let all = await getAllUsers();
  return all[ind] ? all[ind] : false;
};

export const getData = async function () {
  try {
    return JSON.parse(await readFile(DB, "utf-8"));
  } catch (err) {
    return { posts: [], users: [] }; //if file empty or not created
  }
};

async function writeData(data) {
  await mkdir(DB_PATH, { recursive: true });
  await writeFile(DB, data);
}
