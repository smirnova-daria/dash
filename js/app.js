// import 'babel-polyfill'
import "../css/app.scss";
import AOS from "aos";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    disable: "mobile",
  });
});
