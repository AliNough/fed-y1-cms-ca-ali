const deetContainerEle = document.querySelector("#js-deet-holder");
const headerEle = document.querySelector("#js-header-holder");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "special-example.flywheelsites.com/wp-json/wp/v2/posts/" + id;

console.log(url);

async function getDeets(e) {
  try {
    const response = await fetch(url);
    const details = await response.json();
    const content = details.content.rendered;
    document.title = details.title.rendered;
    // `<h1>${details.title.rendered}</h1>`
    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
  }
}

getDeets();

function createHtml(details) {
  headerEle.innerHTML += `<h1>${details.title.rendered}</h1>`;
  deetContainerEle.innerHTML = `
    ${details.content.rendered}
    `;
}
