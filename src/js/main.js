"use strict";

import "./slider";
import modals from "./modules/openModal";
import tab from "./modules/tab";

window.addEventListener("DOMContentLoaded", () => {
  modals();
  tab(".glazing_slider", ".glazing_block", ".glazing_content", "slick-current");
  tab(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
});
