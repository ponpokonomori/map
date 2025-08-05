
window.addEventListener("message", function(event) {
  const targetId = event.data.highlight;
  const svgObject = document.getElementById("svg-object");

  if (!svgObject.contentDocument) return;

  const svgDoc = svgObject.contentDocument;
  const allGroups = svgDoc.querySelectorAll("g");

  allGroups.forEach(g => g.classList.remove("highlight"));

  if (targetId && targetId !== "none") {
    const target = svgDoc.getElementById(targetId);
    if (target) {
      target.classList.add("highlight");
    }
  }
});
