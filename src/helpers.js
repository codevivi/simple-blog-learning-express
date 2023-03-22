export const rand = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const postTitleInputEl = document.querySelector("#add-post-form input[name='title']");
const postContentInputEl = document.querySelector("#add-post-form input[name='content']");
const postDescriptionInputEl = document.querySelector("#add-post-form input[name='description']");
const postImageUrlInputEl = document.querySelector("#add-post-form input[name='img']");
function fillFormWithPlaceholders() {
  const postId = rand(1, 100);
  const imgId = rand(1, 1000);
  fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
  fetch("https://jsonplaceholder.typicode.com/photos/" + imgId)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log("filling with data");
    })
    .catch((e) => {
      console.log(e);
    });
}
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
