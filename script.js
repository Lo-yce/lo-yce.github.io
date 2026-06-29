/* ==========================================
   个人网站 - 交互脚本
   ========================================== */

// ---------- 1. 导航栏滚动效果 ----------
// 页面滚动时给导航栏添加阴影
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.08)";
  }
});

// ---------- 2. 平滑滚动的导航高亮 ----------
// 滚动时高亮当前所在的导航项
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "#555";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#4f46e5";
    }
  });
});

// ---------- 3. 打字机效果 ----------
// Hero 区域的副标题逐字显示
const subtitleEl = document.querySelector(".hero .subtitle");

if (subtitleEl) {
  const text = subtitleEl.textContent;
  subtitleEl.textContent = "";

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      subtitleEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 80);
    }
  }

  // 页面加载后稍等再开始打字
  setTimeout(typeWriter, 400);
}

// ---------- 4. 滚动渐入动画 ----------
// 元素进入视口时淡入显示
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

// 给需要动画的元素添加初始隐藏样式和观察
document.querySelectorAll(".skill-card, .project-card, .info-item, .contact-item, .friend-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

console.log("个人网站已就绪！");