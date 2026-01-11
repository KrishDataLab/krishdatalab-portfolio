console.log("KrishDataLab Portfolio Loaded");
/* ===============================
   Smooth Scroll
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
  
  /* ===============================
     Scroll Animations
  ================================ */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  
  document.querySelectorAll(".animate").forEach(el => observer.observe(el));
  
