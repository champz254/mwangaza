const WHATSAPP_NUMBER = "254700000000"; // Replace with the real salon number

const beautyStyles = [
  {
    name: "Elegant Bob Wig",
    category: "wigs",
    image: "images/wig-bob.jpg",
    price: 2500,
    description: "A sleek and elegant bob look.",
  },
  {
    name: "Body Wave Wig",
    category: "wigs",
    image: "images/wig-body-wave.jpg",
    price: 3500,
    description: "Beautiful waves for a glamorous look.",
  },
  {
    name: "Knotless Braids",
    category: "hairstyles",
    image: "images/hair-knotless.jpg",
    price: 2500,
    description: "Stylish knotless braids for everyday beauty.",
  },
  {
    name: "Boho Braids",
    category: "hairstyles",
    image: "images/hair-boho.jpg",
    price: 3000,
    description: "Trendy braids with a beautiful finish.",
  },
  {
    name: "French Tip Nails",
    category: "nails",
    image: "images/nails-french.jpg",
    price: 1000,
    description: "Classic French tips with an elegant finish.",
  },
  {
    name: "Glam Nail Art",
    category: "nails",
    image: "images/nails-glam.jpg",
    price: 1500,
    description: "Creative nail art for a statement look.",
  },
  {
    name: "Soft Glam Makeup",
    category: "makeup",
    image: "images/makeup-soft-glam.jpg",
    price: 2000,
    description: "A soft, polished and glowing makeup look.",
  },
  {
    name: "Bridal Makeup",
    category: "makeup",
    image: "images/makeup-bridal.jpg",
    price: 5000,
    description: "A beautiful makeup look for your special day.",
  },
  {
    name: "Refreshing Facial",
    category: "facials",
    image: "images/facial-treatment.jpg",
    price: 1500,
    description: "A relaxing facial care experience.",
  },
];

const galleryGrid = document.getElementById("beauty-gallery-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayStyles(category = "all") {
  const filteredStyles =
    category === "all"
      ? beautyStyles
      : beautyStyles.filter((style) => style.category === category);

  if (filteredStyles.length === 0) {
    galleryGrid.innerHTML =
      '<p class="no-results">No styles found in this category.</p>';
    return;
  }

  galleryGrid.innerHTML = filteredStyles
    .map((style) => {
      const message = encodeURIComponent(
        `Hello Mwangaza Beauty & Spa! I am interested in ${style.name}. Please tell me more.`,
      );

      return `
            <article class="beauty-card">
                <img
                    src="${style.image}"
                    alt="${style.name}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='images/salon.jpg';"
                >

                <div class="beauty-card-info">
                    <p class="category-label">${style.category}</p>
                    <h3>${style.name}</h3>
                    <p class="description">${style.description}</p>

                    <div class="beauty-card-bottom">
                        <span class="beauty-price">
                            KSh ${style.price.toLocaleString("en-KE")}
                        </span>

                        <a
                            class="beauty-book-btn"
                            href="https://wa.me/${WHATSAPP_NUMBER}?text=${message}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Enquire Now
                        </a>
                    </div>
                </div>
            </article>
        `;
    })
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    displayStyles(button.dataset.category);
  });
});

displayStyles();
