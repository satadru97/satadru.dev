async function searchOnChange(e) {
    let t = e.target.value;
    if (
        (document.querySelectorAll("input#search").forEach((e) => {
            e.value = t;
        }),
        "" !== t)
    ) {
        window.searchJson || (window.searchJson = await fetch("/index.json").then((e) => e.json()));
        let n = searchJson.filter((e) => {
            let n = !1;
            return (
                e.title && e.description && e.content
                    ? (n = e.title.toLowerCase().includes(t.toLowerCase()) || e.description.toLowerCase().includes(t.toLowerCase()) || e.content.toLowerCase().includes(t.toLowerCase()))
                    : e.title && e.description
                    ? (n = e.title.toLowerCase().includes(t.toLowerCase()) || e.description.toLowerCase().includes(t.toLowerCase()))
                    : e.title && e.content
                    ? (n = e.title.toLowerCase().includes(t.toLowerCase()) || e.content.toLowerCase().includes(t.toLowerCase()))
                    : e.description && e.content
                    ? (n = e.description.toLowerCase().includes(t.toLowerCase()) || e.content.toLowerCase().includes(t.toLowerCase()))
                    : e.title
                    ? (n = e.title.toLowerCase().includes(t.toLowerCase()))
                    : e.description
                    ? (n = e.description.toLowerCase().includes(t.toLowerCase()))
                    : e.content && (n = e.content.toLowerCase().includes(t.toLowerCase())),
                n
            );
        });
        if (n.length > 0) {
            let s = "";
            n.map((e) => {
                s += `<div class="card">
                        <a href="${e.permalink}">
                            <div class="p-3">
                                <h5>${e.title}</h5>
                                <div>${e.description}</div>
                            </div>
                       </a>
                    </div>`;
            }),
                (document.getElementById("search-results").innerHTML = s);
        } else {
            let o = `<p class="text-center py-3">No results found for "${t}"</p>`;
            document.getElementById("search-results").innerHTML = o;
        }
        alignSearchContent(), (document.getElementById("search-content").style.display = "block");
    } else (document.getElementById("search-content").style.display = "none"), (document.getElementById("search-results").innerHTML = "");
}
function alignSearchContent() {
    let e = document.querySelectorAll("#search");
    for (let t = 0; t < e.length; t++)
        if ("" !== e[t].value) {
            let n;
            window.innerWidth > 768
                ? ((n = e[0].getBoundingClientRect()), (document.getElementById("search-content").style.width = "500px"))
                : (document.querySelector("#navbarContent").classList.add("show"), (n = e[1].getBoundingClientRect()), (document.getElementById("search-content").style.width = "300px")),
                (document.getElementById("search-content").style.top = n.top + 50 + "px"),
                (document.getElementById("search-content").style.left = n.left + "px");
        }
}
function resetSearch(e) {
    (27 === e.keyCode || ("search" !== e.target.id && null === e.target.closest("section#search-content"))) &&
        "" !== document.getElementById("search-results").innerHTML &&
        ((document.getElementById("search-content").style.display = "none"),
        (document.getElementById("search-results").innerHTML = ""),
        document.querySelectorAll("input#search").forEach((e) => {
            (e.value = ""), e.blur();
        }));
}
(document.onkeyup = function () {
    switch (event.keyCode) {
        case 27:
            resetSearch(event);
            break;
        case 75:
            event.ctrlKey && document.getElementById("search").focus();
    }
}),
    window.addEventListener("keydown", function (e) {
        75 === e.keyCode && e.ctrlKey && e.preventDefault();
    }),
    document.addEventListener("click", function (e) {
        resetSearch(e);
    }),
    window.addEventListener("resize", function (e) {
        alignSearchContent();
    });
