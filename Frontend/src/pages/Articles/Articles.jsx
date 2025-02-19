import React from "react";
import Layout from "../../components/layout/layout";

const BlogHero = () => {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/api/placeholder/1920/1080"
          alt="Blog Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4">
        <div className="flex flex-col justify-center items-center h-full text-center text-white">
          <p className="text-blue-400 text-2xl mb-4 font-medium">
            Our Blogs
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
            Articles you might find helpful
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Explore insightful articles that can enrich your knowledge and keep you informed about the latest happenings.
          </p>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ post }) => (
  <div className="flex flex-col h-full">
    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="flex-1 flex flex-col">
      <div className="flex gap-2 items-center mb-2">
        <span className="text-gray-600 text-sm">{post.date}</span>
        <span className="text-gray-400">|</span>
        <span className="text-blue-600 text-sm">{post.category}</span>
      </div>
      <h3 className="text-xl font-serif mb-3 hover:text-blue-600 transition-colors">
        <a href={post.slug}>{post.title}</a>
      </h3>
      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
    </div>
  </div>
);

const BlogContent = () => {
  const posts = [
    {
      title: "HIIT the Trauma out your body",
      date: "Oct 9, 2024",
      category: "Trauma",
      slug: "https://www.hindustantimes.com/lifestyle/health/can-hiit-heal-trauma-ptsd-the-30-minute-workout-that-gives-your-brain-an-instant-boost-101739771444277.html",
      image: "/api/placeholder/800/600",
      excerpt: "We've all experienced heartbreak, disappointment, or fear at some point in life. But some moments leave deeper, lasting impressions. Post-traumatic stress disorder is one of those hidden wounds, shaping our lives in subtle ways we might not immediately recognize..."
    },
    {
      title: "Wanna traumatize those who traumatized you?",
      date: "Oct 4, 2024",
      category: "Trauma",
      slug: "https://indianexpress.com/article/lifestyle/life-style/growing-up-with-alcoholic-parents-trauma-and-the-journey-to-healing-9646032/",
      image: "/api/placeholder/800/600",
      excerpt: "We all face difficult moments in life—times of heartache, disappointment, and challenge. Yet, some experiences go deeper, leaving behind emotional wounds that can take time and care to heal. Childhood trauma can be one of these experiences, creating lasting effects..."
    },
    {
      title: "Surf away your depression",
      date: "Oct 1, 2024",
      category: "General Therapy",
      slug: "https://www.bbc.com/news/articles/c5yrz0yg5j8o",
      image: "/api/placeholder/800/600",
      excerpt: "As the air turns crisp and the leaves shift to vibrant shades of orange and gold, fall invites us to embrace a slower, more intentional pace. But transitioning from the carefree days of summer to a structured routine can feel daunting. Don't worry—we've got some..."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

function Articles() {
  return (
    <Layout>
      <BlogHero />
      <BlogContent />
    </Layout>
  );
}

export default Articles;
