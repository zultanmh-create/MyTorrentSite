// Toggle display of language, caption, and quality groups based on category selection
const categorySelect = document.getElementById("category");
const languageGroup = document.getElementById("language-group");
const captionGroup = document.getElementById("caption-group");
const qualityGroup = document.getElementById("quality-group");

categorySelect.addEventListener("change", () => {
  const selected = categorySelect.value;
  if (["movies", "tvshows", "music", "anime", "documentaries", "other"].includes(selected)) {
    languageGroup.style.display = "block";
    captionGroup.style.display = "block";
    qualityGroup.style.display = "block";
  } else if (selected === "books") {
    languageGroup.style.display = "block";
    captionGroup.style.display = "none";
    qualityGroup.style.display = "none";
  } else {
    languageGroup.style.display = "none";
    captionGroup.style.display = "none";
    qualityGroup.style.display = "none";
  }
});
