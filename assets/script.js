$(document).ready((function () { $(window).scroll((function () { $(this).scrollTop() > 1 ? ($(".navbar").removeClass("bg-transparent"), $(".navbar").addClass("bg-primary")) : 0 == $(this).scrollTop() && ($(".navbar").removeClass("bg-primary"), $(".navbar").addClass("bg-transparent")) })), $("#header-button").click((function () { $(this).toggleClass("hamburger-open"), $(".menu").toggle().toggleClass("menu-active") })) }));

$(document).ready(function () {
    console.log("document ready");

    const labels = document.querySelectorAll(".accordion-item__label");
    const tabs = document.querySelectorAll(".accordion-tab");

    function toggleShow() {
        const target = this;
        const item = target.classList.contains("accordion-tab")
            ? target
            : target.parentElement;
        const group = item.dataset.actabGroup;
        const id = item.dataset.actabId;

        tabs.forEach(function (tab) {
            if (tab.dataset.actabGroup === group) {
                if (tab.dataset.actabId === id) {
                    tab.classList.add("accordion-active");
                } else {
                    tab.classList.remove("accordion-active");
                }
            }
        });

        labels.forEach(function (label) {
            const tabItem = label.parentElement;

            if (tabItem.dataset.actabGroup === group) {
                if (tabItem.dataset.actabId === id) {
                    tabItem.classList.add("accordion-active");
                } else {
                    tabItem.classList.remove("accordion-active");
                }
            }
        });
    }

    labels.forEach(function (label) {
        label.addEventListener("click", toggleShow);
    });

    tabs.forEach(function (tab) {
        tab.addEventListener("click", toggleShow);
    });

});
