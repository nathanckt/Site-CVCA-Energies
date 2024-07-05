const reponse = await fetch("http://localhost:1337/api/reference");
const references = await reponse.json();

const reference = references[0];

const titreElement = document.createElement("h1");
titreElement.innerText = "test";

const descriptElement = document.createElement("p");
descriptElement.innerText = reference.Description;
