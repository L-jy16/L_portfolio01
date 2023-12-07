import { smooth } from "./smooth.js"
import { menu } from "./menu.js"
import { arrowlink } from "./arrowlink.js"
import { section } from "./section.js"


window.addEventListener("load", function () {
    smooth();
    menu();
    arrowlink();
    section();
});