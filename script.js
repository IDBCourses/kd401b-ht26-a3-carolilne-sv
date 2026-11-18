document.addEventListener("DOMContentLoaded", () => {
  const styleLink = document.getElementById("theme-style");
  const toggleBtn = document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {
    if (styleLink.href.includes("light.css")) {
      styleLink.href = "dark.css";
    } else {
      styleLink.href = "light.css";
    }
  });
});
