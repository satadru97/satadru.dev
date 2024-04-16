function readingTime() {
    let e = document.querySelector("article").innerText,
        i = e.trim().split(/\s+/).length,
        n = document.querySelector("span#readingTime");
    n.innerHTML = "<small> | </small>" + Math.ceil(i / 225) + n.innerHTML;
}
readingTime();
