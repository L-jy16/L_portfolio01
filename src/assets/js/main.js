import { smooth } from "./smooth.js"
import { menu } from "./menu.js"
import { arrowlink } from "./arrowlink.js"
import { section1 } from "./section1.js";
import { section2 } from "./section2.js";
import { section3 } from "./section3.js";
import { section4 } from "./section4.js";


window.addEventListener("load", function () {
    smooth();
    menu();
    arrowlink();
    section1();
    section2();
    section3();
    section4();
});