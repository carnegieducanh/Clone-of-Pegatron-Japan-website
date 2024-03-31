// hide-show content
const more = document.querySelectorAll("button");
const show = document.querySelectorAll(".hide-show");
let isExpanded = false;
more.addEventListener("click", handleClickBtn);
function handleClickBtn() {
    show.classList.toggle("expanded", !isExpanded);
    // Đảo ngược trạng thái mở rộng
    isExpanded = !isExpanded;
    more.textContent = isExpanded ? "See less" : "See more";
}
// more.onclick = () => {

// };
