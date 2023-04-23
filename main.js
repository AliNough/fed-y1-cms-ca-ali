const contContainerEle = document.querySelector("#js-cont-holder");
const srchInput = document.querySelector("#js-srch-inp");

posts();

srchInput.addEventListener("keyup", function (e) {
  const searchValue = e.target.value.trim().toLowerCase();
  posts(searchValue);
});

// https://music5169.wordpress.com/wp-json/wp/v2/posts

async function posts(srchValue = "") {
  try {
    const response = await fetch(
      "https://special-example.flywheelsites.com/wp-json/wp/v2/posts",
      {
        method: "GET",
        headers: {},
      }
    );

    const result = await response.json();

    const filteredPosts = result.filter((post) => {
      return post.title.rendered.toLowerCase().includes(srchValue);
    });

    contContainerEle.innerHTML = "";

    filteredPosts.forEach((post) => {
      contContainerEle.innerHTML += `
        <a href="details.html?id=${post.id}" class="l-content">
        <img src="${post.content.rendered.match(/<img.*?src="(.*?)"/)[1]}">
        <div class="l-wrapper">
            <h2>${post.title.rendered}</h2>
            <p>${post.excerpt.rendered}</p>
        </div>
        </a>
        `;
    });
  } catch (err) {
    console.error(err);
  }
}
