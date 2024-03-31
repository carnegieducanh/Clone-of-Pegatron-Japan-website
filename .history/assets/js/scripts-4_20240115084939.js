// hide-show content
const more = document.querySelectorAll(".btn");
const show = document.querySelectorAll(".hide-show");
let isExpanded = false;
[...more].forEach((itemBtn) => {
    itemBtn.addEventListener("click", handleClickBtn);
    [...show].forEach((itemShow) => {
        function handleClickBtn() {
            itemShow.classList.toggle("expanded", !isExpanded);
            // Đảo ngược trạng thái mở rộng
            isExpanded = !isExpanded;
            itemBtn.textContent = isExpanded ? "See less" : "See more";
        }
    });
});

// more.onclick = () => {

// };
