document.querySelector(".cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    const width = rect.width;
    const right = Math.abs(x) > width / 2;
    if (right) {
      card.style.setProperty("--rot", "-7deg");
    } else card.style.setProperty("--rot", "7deg");

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};
