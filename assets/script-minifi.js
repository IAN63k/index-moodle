$(document).ready((function(){$(window).scroll((function(){$(this).scrollTop()>1?($(".navbar").removeClass("bg-transparent"),$(".navbar").addClass("bg-primary")):0==$(this).scrollTop()&&($(".navbar").removeClass("bg-primary"),$(".navbar").addClass("bg-transparent"))})),$("#header-button").click((function(){$(this).toggleClass("hamburger-open"),$(".menu").toggle().toggleClass("menu-active")}))})),$(document).ready((function(){const a=document.querySelectorAll(".accordion-item__label"),t=document.querySelectorAll(".accordion-tab");function c(){const c=this,e=c.classList.contains("accordion-tab")?c:c.parentElement,n=e.dataset.actabGroup,o=e.dataset.actabId;t.forEach((function(a){a.dataset.actabGroup===n&&(a.dataset.actabId===o?a.classList.add("accordion-active"):a.classList.remove("accordion-active"))})),a.forEach((function(a){const t=a.parentElement;t.dataset.actabGroup===n&&(t.dataset.actabId===o?t.classList.add("accordion-active"):t.classList.remove("accordion-active"))}))}a.forEach((function(a){a.addEventListener("click",c)})),t.forEach((function(a){a.addEventListener("click",c)}))}));