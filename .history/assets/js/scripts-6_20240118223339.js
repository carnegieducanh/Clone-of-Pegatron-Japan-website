// const more = document.querySelectorAll(".btn");
// const show = document.querySelectorAll(".hide-show");
// let isExpanded = false;
// [...more].forEach(
//     (moreBtn) =>
//         (moreBtn.onclick = () => {
//             let show = moreBtn.closest(".hide-show");
//             if (show) {
//                 show.classList.toggle("expanded", !isExpanded);
//                 isExpanded = !isExpanded;
//                 moreBtn.textContent = isExpanded ? "See less" : "See more";
//             }
//         })
// );

const clickDrop = document.querySelectorAll(".dropdown-click");
const dropShow = document.querySelectorAll(".dropdown__menu");
let isShow = false;
[...clickDrop].forEach(
    (dropShow) =>
        (dropShow.onclick = () => {
            let clickDrop = dropShow.closest(".dropdown-click");
            if (clickDrop) {
                dropShow.classList.toggle("hidden", !isShow);
                isExpanded = !isExpanded;
            }
        })
);
