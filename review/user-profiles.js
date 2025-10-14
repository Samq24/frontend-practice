function showDetail(user) {
  const detailSections = document.querySelectorAll(".user-detail");
  detailSections.forEach(section => section.style.display = "none");

  const target = document.querySelector(`.${user}-detail`);
  if (target) {
    target.style.display = "block";
  }
}

document.querySelectorAll(".user-detail").forEach(div => {
  div.style.display = "none";
});
