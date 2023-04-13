import "./sass/main.scss";

// Button Toggle Functions
function toggle(btnWrapper, wrapper) {
  const btn = document.querySelector(btnWrapper);
  const items = document.querySelector(wrapper);

  if (btn && items) {
    btn.addEventListener("click", () => {
      items.classList.toggle("active");
      btn.classList.toggle("active");
    });
  }
}

toggle(".share--btn", ".wrapper");
