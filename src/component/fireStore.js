import { insert } from "../firebase";

export async function createRecipe() {
  const title = document.getElementsByClassName("usersPost");
  const description = document.getElementsByClassName("Description");

  if (!title || title.length === 0 && !description || description.length === 0) {
    alert('Your title cant be null');
    return;
  }
    console.log("title", title[0].value);
    console.log("description", description[0].value);


  const dbResult = await insert("recipes", {
    title: title[0].value,
    description: description[0].value,
  });
 console.log("dbResult", dbResult);
}
