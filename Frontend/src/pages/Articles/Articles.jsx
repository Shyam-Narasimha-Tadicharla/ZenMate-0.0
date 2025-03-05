import React from "react";
import { motion } from "framer-motion";
import Layout from "../../components/layout/layout";
import build from "../../components/assets/images/build.png";

const BlogHero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[40vh] bg-blue-800 mt-2"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://media.istockphoto.com/id/1498634032/vector/seamless-vector-banner-with-hand-drawn-psychology-doodles.jpg?b=1&s=612x612&w=0&k=20&c=e64uKQWVyZNHaEjIQqZX_BxLa1RJY9rpH-ruglWmHvY="
          alt="Blog Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-80" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4">
        <div className="flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
            Blogs For You 
          </h1>
        </div>
      </div>
      <div>
        <center>
          <p className="text-xl md:text-2xl max-w-3xl pt-12">
            Articles you might find helpful
          </p>
        </center>
      </div>
    </motion.div>
  );
};

const BlogCard = ({ post }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col h-full ml-4 mr-4"
  >
    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
      <motion.img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </div>
    <div className="flex-1 flex flex-col pb-14">
      <div className="flex gap-2 items-center ">
        <span className="text-gray-600 text-sm">{post.date}</span>
        <span className="text-gray-400">|</span>
        <span className="text-blue-600 text-sm">{post.category}</span>
      </div>
      <h3 className="text-xl font-serif mb-3 hover:text-blue-600 transition-colors">
        <a href={post.slug}>{post.title}</a>
      </h3>
      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
    </div>
  </motion.div>
);

const BlogContent = () => {
  const posts = [
    {
      title: "HIIT the Trauma out your body",
      date: "Oct 9, 2024",
      category: "Trauma",
      slug: "https://www.hindustantimes.com/lifestyle/health/can-hiit-heal-trauma-ptsd-the-30-minute-workout-that-gives-your-brain-an-instant-boost-101739771444277.html",
      image: "https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_fid31389_asset_31385/44d168240cb76bbbc6ec828143505f51/Conflict_Concept?fm=webp&fit=thumb&q=65&w=864&h=576",
      excerpt: "We've all experienced heartbreak, disappointment, or fear at some point in life. But some moments leave deeper, lasting impressions..."
    },
    {
      title: "Who traumatized you?",
      date: "Oct 4, 2024",
      category: "Trauma",
      slug: "https://indianexpress.com/article/lifestyle/life-style/growing-up-with-alcoholic-parents-trauma-and-the-journey-to-healing-9646032/",
      image: "https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_fid31958_asset_14576/87f8270d6f9b6abff590cc08c2d8c771/Seesaw_Scale_with_Emoticons_-_3D_Rendering?fm=webp&fit=thumb&q=65&w=864&h=576",
      excerpt: "We all face difficult moments in life—times of heartache, disappointment, and challenge. Yet, some experiences go deeper, leaving behind emotional wounds..."
    },
    {
      title: "Surf away your depression",
      date: "Oct 1, 2024",
      category: "General Therapy",
      slug: "https://www.bbc.com/news/articles/c5yrz0yg5j8o",
      image: "https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_fid33063_asset_33035/c6f05ce2b9f3f04fe328461176a4fc42/Deception_Concept_-_Disguise_Between_Shark_And_Goldfish?fm=webp&fit=thumb&q=65&w=864&h=576",
      excerpt: "As the air turns crisp and the leaves shift to vibrant shades of orange and gold, fall invites us to embrace a slower, more intentional pace. But transitioning from the carefree days of summer to a structured routine can feel daunting. Don't worry—we've got some..."
    },
    {
      title: "Depression makes you obese?",
      date: "Oct 9, 2024",
      category: "Trauma",
      slug: "https://www.hindustantimes.com/lifestyle/health/are-your-antidepressants-making-you-gain-weight-shocking-new-study-reveals-the-truth-101740634812464.html",
      image: "https://thumbs.dreamstime.com/z/obesity-line-icon-obesity-line-icon-overweight-obeseness-due-stress-depression-anxiety-emotional-issues-teenager-problem-223710250.jpg",
      excerpt: "Antidepressants have transformed the lives of millions, offering relief from the burdens of depression and improving overall well-being. However, a new study from Spain has shed light on an often-overlooked side effect: weight gain...."
    },
    {
      title: "High stress? Its a part of your JD",
      date: "Oct 4, 2024",
      category: "Trauma",
      slug: "https://www.onmanorama.com/news/kerala/2025/02/28/kerala-it-media-employees-high-stress-youth-commission-survey.html",
      image: "https://www.verywellmind.com/thmb/lEOjlASpyKpn5j12xXL2Fg4Amrg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/work-anxiety-4692762_final-99b80060dfb74d008fa7acd473311683.png",
      excerpt: "Young professionals in Kerala's IT and media sectors are experiencing high levels of work stress, acaccording to a survey conducted by the state Youth Commission. The study found that 84.3 percent of IT employees and 83.5 percent of media professionals reported significant work-related stress...."
    },
    {
      title: "Depression: Kid's edition",
      date: "Oct 1, 2024",
      category: "General Therapy",
      slug: "https://www.news18.com/lifestyle/health-and-fitness/mental-health-crisis-among-adolescents-exploring-therapies-for-relief-9245002.html",
      image: "https://images.squarespace-cdn.com/content/v1/5ba3c8d0fb1820285bfe2df7/1538415374655-P2ZEI9ZM8C4C4YGJJVMP/canstockphoto20080791.jpg",
      excerpt: "Adolescence is a critical developmental stage, but today's youth face unheard-of difficulties that have a significant impact on their mental health. Due to social media's influence, cultural expectations, and increased scholastic stress, the incidence of anxiety, depression, and suicide..."
    },
    {
      title: "Mental Health in the Workplace",
      date: "Feb 9, 2025",
      category: "Trauma",
      slug: "https://www.healthcentral.com/mental-health/mental-health-work?legacy=psycom",
      image: "https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_fid33077_asset_33076/bc369feafa88f58d0addfad648e3d361/Large_and_modern_office_interiors?fm=webp&fit=thumb&q=65&w=864&h=576",
      excerpt: "We've all experienced heartbreak, disappointment, or fear at some point in life. But some moments leave deeper, lasting impressions. Post-traumatic stress disorder is one of those hidden wounds, shaping our lives in subtle ways we might not immediately recognize..."
    },
    {
      title: "Building Resilience ",
      date: "Dec 4, 2024",
      category: "Resilience",
      slug: "https://indianexpress.com/article/lifestyle/life-style/growing-up-with-alcoholic-parents-trauma-and-the-journey-to-healing-9646032/",
      image: build,
      excerpt: " We all thrive How to Bounce Back from Setbacks and the Techniques to develop mental strength and adaptability."
    },
    {
      title: "Positive Thinking ",
      date: "Oct 1, 2024",
      category: "General Therapy",
      slug: "https://www.bbc.com/news/articles/c5yrz0yg5j8o",
      image: "https://c1.wallpaperflare.com/preview/389/213/92/smilies-emotions-balls-funny.jpg",
      excerpt: "As the air turns crisp and the leaves shift to vibrant shades of orange and gold, fall invites us to embrace a slower, more intentional pace. But transitioning from the carefree days of summer to a structured routine can feel daunting. Don't worry—we've got some..."
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </motion.section>
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
