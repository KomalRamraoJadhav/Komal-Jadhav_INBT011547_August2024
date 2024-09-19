const accessKey = "lZ8T6YHIDq1ApT9K7UzaspUe_a0N9pmlY3BF3S8iVRs";

const searchForm = document.getElementById("search");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");  
const showMore = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const results = data.results;

        results.forEach((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
        });

        showMore.style.display = "block";
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchResult.innerHTML = "";  
    searchImages();
});

showMore.addEventListener("click", ()=>{
    page++;
    searchImages();
})
