const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ================================
// Search
// ================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchTerm = this.value.trim().toLowerCase();

        let searchResults =
            document.getElementById("searchResults");

        if (!searchResults) {

            searchResults = document.createElement("div");

            searchResults.id = "searchResults";

            searchInput.parentElement.appendChild(searchResults);

        }

        searchResults.innerHTML = "";

        if (!searchTerm) {
            searchResults.style.display = "none";
            return;
        }

        const sections =
            document.querySelectorAll(".main section");

        const results = [];

        sections.forEach(function (section) {

            const text =
                section.textContent.toLowerCase();

            if (text.includes(searchTerm)) {

                const title =
                    section.querySelector("h2, h1, h3");

                results.push({
                    section: section,
                    title: title
                        ? title.textContent.trim()
                        : "نتيجة البحث"
                });

            }

        });

        searchResults.style.display = "block";

        if (results.length === 0) {

            searchResults.innerHTML =
                "<p>لا توجد نتائج.</p>";

            return;
        }

        results.forEach(function (result) {

            const resultItem =
                document.createElement("div");

            resultItem.className =
                "search-result-item";

            resultItem.textContent =
                "🔎 " + result.title;

            resultItem.addEventListener("click", function () {

                result.section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                searchResults.style.display = "none";

            });

            searchResults.appendChild(resultItem);

        });

    });

}



