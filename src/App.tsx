import { useState } from "react";
import "./App.css";

import photo1 from "./assets/1.jpg";
import photo2 from "./assets/2.jpg";
import photo3 from "./assets/3.jpg";
import photo4 from "./assets/4.jpg";
import photo5 from "./assets/5.jpg";

// =====================================================
// TYPES
// =====================================================

type Hat = {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  description: string;
};

type Article = {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  fullContent: string;
  tags: string[];
};

type Page =
  | "home"
  | "blog"
  | "shop"
  | "features"
  | "about"
  | "contact";

// =====================================================
// BLOG ARTICLES
// =====================================================

const articles: Article[] = [
  {
    id: 1,
    title: "Classic Baseball Caps: A Timeless Everyday Style",
    category: "Cap Guide",
    author: "Marcus Vance",
    date: "September 2, 2026",
    readTime: "5 min read",
    image: photo1,
    excerpt:
      "Classic baseball caps continue to be one of the most popular and versatile types of headwear. Their simple design makes them easy to match with everyday outfits, while the curved brim provides a familiar and comfortable look. Whether you are going outside with friends, attending a casual event, traveling, or simply adding an accessory to your outfit, a baseball cap can easily complete your everyday style.",
    fullContent:
      "Baseball caps combine comfort, simplicity, and personality. Their curved brim creates a classic appearance while adjustable designs make them easy to wear. They are suitable for casual outfits, outdoor activities, sports, travel, and everyday use. Because of their simple design, baseball caps can be paired with different types of clothing and remain a reliable accessory for many occasions.",
    tags: ["Baseball Cap", "Classic", "Everyday"],
  },

  {
    id: 2,
    title: "Snapback Caps: Modern Style With Adjustable Comfort",
    category: "Style Guide",
    author: "Elena Rostova",
    date: "August 28, 2026",
    readTime: "6 min read",
    image: photo2,
    excerpt:
      "Snapback caps have become a recognizable part of modern streetwear and casual fashion. Their structured shape and adjustable back closure make them practical while also giving them a bold appearance. From simple designs to caps featuring logos, graphics, and creative patterns, snapbacks provide plenty of opportunities to show personality and create a modern everyday look.",
    fullContent:
      "Snapback caps are recognized by their adjustable closure at the back. They provide a structured appearance and allow the wearer to adjust the fit. Their front panels also make them popular for logos, graphics, and streetwear designs. Snapbacks are especially common in casual fashion because they can add a youthful and modern touch to an outfit.",
    tags: ["Snapback", "Streetwear", "Modern"],
  },

  {
    id: 3,
    title: "Dad Hats: Relaxed Design and Comfortable Fit",
    category: "Fashion",
    author: "Coach Dave Miller",
    date: "August 15, 2026",
    readTime: "5 min read",
    image: photo3,
    excerpt:
      "Dad hats are known for their relaxed shape, curved brim, and simple adjustable strap. Unlike more structured caps, their softer construction creates a casual appearance that works well for everyday outfits. They can be worn with simple shirts, jackets, jeans, or other casual clothing, making them an easy choice for people who prefer a comfortable and laid-back style.",
    fullContent:
      "Dad hats are known for their relaxed construction, curved brim, and adjustable strap. Their casual appearance makes them easy to pair with everyday clothing and different styles. They are a great option for people who prefer a simple and comfortable accessory without an overly structured appearance.",
    tags: ["Dad Hat", "Casual", "Comfort"],
  },

  {
    id: 4,
    title: "Bucket Hats: A Versatile Fashion Accessory",
    category: "Hat Trends",
    author: "Marcus Vance",
    date: "August 10, 2026",
    readTime: "5 min read",
    image: photo4,
    excerpt:
      "Bucket hats have become a popular fashion accessory because of their distinctive shape and relaxed appearance. Their soft downward-sloping brim gives them a unique look while also providing shade during outdoor activities. Today, bucket hats can be found in many colors, fabrics, and patterns, making them suitable for casual outfits, travel, outdoor activities, and streetwear-inspired fashion.",
    fullContent:
      "Bucket hats feature a soft downward-sloping brim that creates a distinctive appearance. They are popular for casual outfits, outdoor activities, travel, and streetwear-inspired looks. Their wide variety of colors, materials, and patterns allows people to choose designs that match their personal style.",
    tags: ["Bucket Hat", "Fashion", "Trend"],
  },

  {
    id: 5,
    title: "Trucker Caps: Breathable Style for Outdoor Days",
    category: "Outdoor Style",
    author: "Elena Rostova",
    date: "August 2, 2026",
    readTime: "6 min read",
    image: photo5,
    excerpt:
      "Trucker caps are designed with a structured front panel and breathable mesh back, making them a practical choice for warm days and outdoor activities. Their recognizable design combines casual fashion with ventilation, allowing air to move through the back of the cap. This combination of comfort and style has helped trucker caps remain popular for outdoor adventures, travel, and everyday casual wear.",
    fullContent:
      "Trucker caps combine a structured front panel with a breathable mesh back. This design allows air to circulate while maintaining a recognizable casual appearance. They are particularly useful for outdoor activities and warm days while still working well with casual everyday outfits.",
    tags: ["Trucker Cap", "Outdoor", "Breathable"],
  },
];

// =====================================================
// HATS
// =====================================================

const hats: Hat[] = [
  {
    id: 1,
    name: "Classic Baseball Cap",
    brand: "URBAN",
    price: "$25",
    image: photo1,
    category: "Baseball Cap",
    rating: 5,
    description:
      "A classic everyday cap with a curved brim and adjustable back strap.",
  },

  {
    id: 2,
    name: "Street Snapback",
    brand: "URBAN",
    price: "$30",
    image: photo2,
    category: "Snapback",
    rating: 5,
    description:
      "A modern structured snapback cap with an adjustable closure.",
  },

  {
    id: 3,
    name: "Classic Dad Hat",
    brand: "CASUAL",
    price: "$22",
    image: photo3,
    category: "Dad Hat",
    rating: 5,
    description:
      "A relaxed dad hat with a curved brim and adjustable strap.",
  },

  {
    id: 4,
    name: "Summer Bucket Hat",
    brand: "OUTDOOR",
    price: "$28",
    image: photo4,
    category: "Bucket Hat",
    rating: 5,
    description:
      "A lightweight bucket hat for casual outfits and outdoor activities.",
  },

  {
    id: 5,
    name: "Classic Trucker Cap",
    brand: "OUTDOOR",
    price: "$27",
    image: photo5,
    category: "Trucker Cap",
    rating: 5,
    description:
      "A breathable trucker cap with a mesh back for comfortable airflow.",
  },
];

// =====================================================
// APP
// =====================================================

export default function App() {
  const [currentPage, setCurrentPage] =
    useState<Page>("home");

  const [likes, setLikes] = useState<number[]>([]);

  const [selectedBrand, setSelectedBrand] =
    useState("All");

  const [selectedArticle, setSelectedArticle] =
    useState<Article | null>(null);

  const [messageSent, setMessageSent] =
    useState(false);

  // ===================================================
  // NAVIGATION
  // ===================================================

  const navigate = (page: Page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ===================================================
  // LIKE BUTTON
  // ===================================================

  const toggleLike = (id: number) => {
    setLikes((currentLikes) =>
      currentLikes.includes(id)
        ? currentLikes.filter(
            (item) => item !== id
          )
        : [...currentLikes, id]
    );
  };

  // ===================================================
  // FILTER HATS
  // ===================================================

  const filteredHats = hats.filter((hat) => {
    return (
      selectedBrand === "All" ||
      hat.brand === selectedBrand
    );
  });

  return (
    <div className="app">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">
        <div className="nav-container">

          <button
            className="logo-button"
            onClick={() => navigate("home")}
          >
            HATS<span>BLOG</span>
          </button>

          <nav className="nav-links">

            <button
              className={
                currentPage === "home"
                  ? "active-link"
                  : ""
              }
              onClick={() => navigate("home")}
            >
              Home
            </button>

            <button
              className={
                currentPage === "blog"
                  ? "active-link"
                  : ""
              }
              onClick={() => navigate("blog")}
            >
              Blog
            </button>

            <button
              className={
                currentPage === "shop"
                  ? "active-link"
                  : ""
              }
              onClick={() => navigate("shop")}
            >
              Shop
            </button>

            <button
              className={
                currentPage === "features"
                  ? "active-link"
                  : ""
              }
              onClick={() =>
                navigate("features")
              }
            >
              Features
            </button>

            <button
              className={
                currentPage === "about"
                  ? "active-link"
                  : ""
              }
              onClick={() => navigate("about")}
            >
              About
            </button>

            <button
              className={`nav-cta ${
                currentPage === "contact"
                  ? "active-link"
                  : ""
              }`}
              onClick={() =>
                navigate("contact")
              }
            >
              Contact
            </button>

          </nav>

          <div className="nav-likes">
            <span>♥</span> {likes.length}
          </div>

        </div>
      </header>

      {/* =================================================
          HOME
      ================================================= */}

      {currentPage === "home" && (
        <main>

          <section className="hero">

            <div className="hero-content">

              <div className="hero-text">

                <p className="small-title">
                  HAT & CAP STYLE HUB
                </p>

                <h1>
                  TOP OFF
                  <br />
                  <span>YOUR STYLE</span>
                </h1>

                <p className="hero-description">
                  Discover stylish hats and caps,
                  explore fashion guides, and find
                  headwear made for everyday style.
                  Learn about popular hat types and
                  discover designs that can match
                  different occasions and personalities.
                </p>

                <div className="hero-buttons">

                  <button
                    className="hero-button"
                    onClick={() =>
                      navigate("shop")
                    }
                  >
                    Explore Hats →
                  </button>

                  <button
                    className="hero-button secondary"
                    onClick={() =>
                      navigate("blog")
                    }
                  >
                    Read Our Blog
                  </button>

                </div>

                <div className="hero-stats">

                  <div>
                    <strong>5</strong>
                    <span>Hat Types</span>
                  </div>

                  <div>
                    <strong>5</strong>
                    <span>Style Guides</span>
                  </div>

                  <div>
                    <strong>100%</strong>
                    <span>Style Focus</span>
                  </div>

                </div>

              </div>

              <div className="hero-image">

                <img
                  src={photo1}
                  alt="Classic Baseball Cap"
                />

                <div className="floating-card">

                  <span>FEATURED</span>

                  <strong>
                    Classic Baseball Cap
                  </strong>

                  <small>
                    Everyday Collection
                  </small>

                </div>

              </div>

            </div>

          </section>

          <section className="home-intro">

            <p className="section-label">
              EXPLORE OUR COLLECTION
            </p>

            <h2>
              Five Styles.
              <br />
              Endless Ways To Wear Them.
            </h2>

            <p>
              From everyday baseball caps to
              relaxed dad hats, modern snapbacks,
              versatile bucket hats, and breathable
              trucker caps, discover five popular
              styles in one place. Learn about their
              designs and find the right style for
              different everyday occasions.
            </p>

            <button
              className="dark-button"
              onClick={() => navigate("shop")}
            >
              View Collection →
            </button>

          </section>

        </main>
      )}

      {/* =================================================
          BLOG
      ================================================= */}

      {currentPage === "blog" && (
        <main className="page-wrapper">

          <section className="blog-section">

            <div className="page-heading">

              <p className="section-label">
                HAT & CAP BLOG
              </p>

              <h2>
                Style Guides & Hat Stories
              </h2>

              <p>
                Explore detailed guides about popular
                hat and cap styles, their designs,
                comfort, versatility, and how they
                can become part of an everyday outfit.
              </p>

            </div>

            <div className="blog-grid">

              {articles.map((article) => (
                <article
                  className="blog-card"
                  key={article.id}
                >

                  <div className="blog-image-wrapper">

                    <img
                      src={article.image}
                      alt={article.title}
                    />

                    <span className="blog-category-badge">
                      {article.category}
                    </span>

                  </div>

                  <div className="blog-card-content">

                    <div className="blog-meta">

                      <span>
                        By {article.author}
                      </span>

                      <span>
                        {article.readTime}
                      </span>

                    </div>

                    <h3>
                      {article.title}
                    </h3>

                    <p className="date-line">
                      {article.date}
                    </p>

                    <p className="excerpt">
                      {article.excerpt}
                    </p>

                    <button
                      className="read-more"
                      onClick={() =>
                        setSelectedArticle(article)
                      }
                    >
                      Read Full Article →
                    </button>

                    <div className="tag-list">

                      {article.tags.map((tag) => (
                        <span
                          className="tag-pill"
                          key={tag}
                        >
                          #{tag}
                        </span>
                      ))}

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </section>

        </main>
      )}

      {/* =================================================
          ARTICLE MODAL
      ================================================= */}

      {selectedArticle && (
        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedArticle(null)
          }
        >

          <div
            className="article-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="close-button"
              onClick={() =>
                setSelectedArticle(null)
              }
              aria-label="Close article"
            >
              ×
            </button>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
            />

            <div className="modal-content">

              <span className="modal-category">
                {selectedArticle.category}
              </span>

              <h2>
                {selectedArticle.title}
              </h2>

              <p className="modal-meta">
                By {selectedArticle.author} •{" "}
                {selectedArticle.date} •{" "}
                {selectedArticle.readTime}
              </p>

              <p>
                {selectedArticle.fullContent}
              </p>

              <div className="tag-list">

                {selectedArticle.tags.map((tag) => (
                  <span
                    className="tag-pill"
                    key={tag}
                  >
                    #{tag}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>
      )}

      {/* =================================================
          SHOP
      ================================================= */}

      {currentPage === "shop" && (
        <main className="page-wrapper">

          <section className="hat-section">

            <div className="page-heading">

              <p className="section-label">
                OUR COLLECTION
              </p>

              <h2>
                Five Hat Styles
              </h2>

              <p>
                Find a style that matches your
                everyday look. Choose from classic,
                casual, modern, and outdoor-inspired
                headwear.
              </p>

            </div>

            {/* SEARCH BAR REMOVED */}

            <div className="filters">

              {[
                "All",
                "URBAN",
                "CASUAL",
                "OUTDOOR",
              ].map((brand) => (
                <button
                  key={brand}
                  className={
                    selectedBrand === brand
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedBrand(brand)
                  }
                >
                  {brand === "All"
                    ? "All Hats"
                    : brand}
                </button>
              ))}

            </div>

            <div className="hat-grid">

              {filteredHats.map((hat) => (
                <article
                  className="hat-card"
                  key={hat.id}
                >

                  <div className="image-container">

                    <img
                      src={hat.image}
                      alt={hat.name}
                    />

                    <span className="brand-tag">
                      {hat.brand}
                    </span>

                    <button
                      className="card-like"
                      onClick={() =>
                        toggleLike(hat.id)
                      }
                      aria-label={`Like ${hat.name}`}
                    >
                      {likes.includes(hat.id)
                        ? "♥"
                        : "♡"}
                    </button>

                  </div>

                  <div className="hat-info">

                    <p className="category">
                      {hat.category}
                    </p>

                    <h3>
                      {hat.name}
                    </h3>

                    <div className="rating">
                      {"★".repeat(hat.rating)}
                      <span>
                        {" "}
                        {hat.rating}.0
                      </span>
                    </div>

                    <p className="description">
                      {hat.description}
                    </p>

                    <div className="hat-bottom">

                      <strong>
                        {hat.price}
                      </strong>

                      <button
                        className="view-button"
                        onClick={() =>
                          navigate("contact")
                        }
                      >
                        Ask About Hat
                      </button>

                    </div>

                  </div>

                </article>
              ))}

            </div>

            {filteredHats.length === 0 && (
              <div className="no-results">

                <h3>
                  No hats found
                </h3>

                <p>
                  Try another category.
                </p>

                <button
                  onClick={() =>
                    setSelectedBrand("All")
                  }
                >
                  Show All Hats
                </button>

              </div>
            )}

          </section>

        </main>
      )}

      {/* =================================================
          FEATURES
      ================================================= */}

      {currentPage === "features" && (
        <main className="page-wrapper">

          <section className="features">

            <div className="page-heading">

              <p className="section-label">
                HEADWEAR FEATURES
              </p>

              <h2>
                What Makes A Great Hat?
              </h2>

              <p>
                Good headwear balances comfort,
                style, protection, and versatility.
              </p>

            </div>

            <div className="feature-grid">

              <div className="feature">

                <div className="feature-number">
                  01
                </div>

                <h3>
                  Comfort
                </h3>

                <p>
                  Comfortable materials and proper
                  sizing make hats easy to wear
                  throughout the day.
                </p>

              </div>

              <div className="feature">

                <div className="feature-number">
                  02
                </div>

                <h3>
                  Style
                </h3>

                <p>
                  Different shapes, colors, and
                  designs allow you to express
                  your personal style.
                </p>

              </div>

              <div className="feature">

                <div className="feature-number">
                  03
                </div>

                <h3>
                  Protection
                </h3>

                <p>
                  Brims can provide shade and added
                  comfort during outdoor activities.
                </p>

              </div>

              <div className="feature">

                <div className="feature-number">
                  04
                </div>

                <h3>
                  Versatility
                </h3>

                <p>
                  Hats can be styled for casual,
                  outdoor, sports, and everyday
                  occasions.
                </p>

              </div>

            </div>

          </section>

        </main>
      )}

      {/* =================================================
          ABOUT
      ================================================= */}

      {currentPage === "about" && (
        <main className="page-wrapper">

          <section className="about">

            <p className="section-label">
              ABOUT HATS BLOG
            </p>

            <h2>
              Built For Hat & Cap Enthusiasts
            </h2>

            <div className="about-content">

              <div className="about-text">

                <p>
                  Hats Blog is a dedicated space
                  for people who enjoy stylish and
                  practical headwear.
                </p>

                <p>
                  We explore five popular styles:
                  Baseball Caps, Snapbacks, Dad Hats,
                  Bucket Hats, and Trucker Caps.
                </p>

                <p>
                  Our goal is to make it easier to
                  discover different designs and
                  learn how each style can fit into
                  everyday life.
                </p>

                <p>
                  Whether you prefer a classic,
                  relaxed, modern, or outdoor-inspired
                  look, our collection provides a
                  simple way to explore different
                  types of hats in one place.
                </p>

              </div>

              <div className="about-highlight">

                <strong>
                  5
                </strong>

                <span>
                  Popular Hat Types
                </span>

                <small>
                  One style hub
                </small>

              </div>

            </div>

          </section>

        </main>
      )}

      {/* =================================================
          CONTACT
      ================================================= */}

      {currentPage === "contact" && (
        <main className="page-wrapper">

          <section className="contact-section">

            <div className="page-heading">

              <p className="section-label">
                GET IN TOUCH
              </p>

              <h2>
                Contact Hats Blog
              </h2>

              <p>
                Have a question about our hats or
                want to learn more? Send us a message.
              </p>

            </div>

            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                setMessageSent(true);
              }}
            >

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                  />

                </div>

              </div>

              <div className="form-group">

                <label>
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message here..."
                  required
                />

              </div>

              <button
                type="submit"
                className="submit-button"
              >
                Send Message →
              </button>

              {messageSent && (
                <div className="success-message">
                  ✓ Your message has been prepared successfully!
                </div>
              )}

            </form>

          </section>

        </main>
      )}

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <div className="footer-container">

          <div className="footer-brand">

            <button
              className="footer-logo"
              onClick={() =>
                navigate("home")
              }
            >
              HATS<span>BLOG</span>
            </button>

            <p>
              Hats • Caps • Fashion • Style
            </p>

          </div>

          <div className="footer-links">

            <button
              onClick={() => navigate("home")}
            >
              Home
            </button>

            <button
              onClick={() => navigate("blog")}
            >
              Blog
            </button>

            <button
              onClick={() => navigate("shop")}
            >
              Shop
            </button>

            <button
              onClick={() => navigate("about")}
            >
              About
            </button>

            <button
              onClick={() => navigate("contact")}
            >
              Contact
            </button>

          </div>

        </div>

        <div className="copyright">
          © 2026 Hats Blog. All rights reserved.
        </div>

      </footer>

    </div>
  );
}