import { writeFile, mkdir, readFile } from "node:fs/promises";
const DB_PATH = new URL("./../database/", import.meta.url).pathname;
const DB_NAME = "database.json";
const DB = DB_PATH + "/" + DB_NAME;

export const saveData = async function save(data) {
  data.date = new Date().toLocaleDateString();
  let currentData = await getData();
  currentData.push(data);
  return await writeData(JSON.stringify(currentData));
};

export const getData = async function () {
  try {
    return JSON.parse(await readFile(DB, "utf-8"));
  } catch (err) {
    return []; //if file empty or not created
  }
};

async function writeData(data) {
  await mkdir(DB_PATH, { recursive: true });
  await writeFile(DB, data);
}
