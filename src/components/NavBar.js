






import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const Iterate = links.map((link) => {
    return <a key = {link} href = {link}>{link}</a>;
  });

  return <nav>{Iterate}</nav>;
}

export default NavBar;




/*const colorElements = colors.map((color) => {
  return <li style={{ color: color }}>{color}</li>;
});*/
