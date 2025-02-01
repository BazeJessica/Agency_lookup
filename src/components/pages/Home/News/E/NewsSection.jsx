import React from 'react';

const newsArticles = [
  {
    title: "New Agency Launches in Your Area",
    image: "/assets/news1.jpg",
    description: "Find out more about the latest agencies offering innovative services in your region.",
    date: "Feb 4, 2025",
  },
  {
    title: "Tech Innovations Transforming Businesses",
    image: "/assets/news2.jpg",
    description: "Discover how the latest technological advancements are shaping the future of industries worldwide.",
    date: "Jan 30, 2025",
  },
  {
    title: "Marketing Trends to Watch This Year",
    image: "/assets/news3.jpg",
    description: "Stay ahead of the curve with these emerging marketing strategies that can elevate your brand.",
    date: "Jan 25, 2025",
  },
  {
    title: "How Small Businesses Are Thriving in 2025",
    image: "/assets/news4.jpg",
    description: "Explore success stories of small businesses overcoming challenges and achieving growth.",
    date: "Jan 20, 2025",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section">
      <h2 className="news-title">Latest News & Events</h2>
      <div className="news-list">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-item">
            <div className="news-content">
              <h3 className="news-heading">{article.title}</h3>
              <p className="news-date">{article.date}</p>
              <p className="news-text">{article.description}</p>
              <button className="news-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
