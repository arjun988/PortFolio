import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock,  Tag, Search, X, ChevronLeft } from 'lucide-react';

// Extended blog posts data with full content
const blogPosts = [
  {
    title: 'The Evolution of Reinforcement Learning and Its Integration with Large Language Models',
    excerpt: 'Reinforcement learning (RL) has been a cornerstone of artificial intelligence, powering breakthroughs.....',
    content: `Reinforcement learning (RL) has been a cornerstone of artificial intelligence, powering breakthroughs from mastering games like Go and chess to optimizing supply chains and robotic control systems. In recent years, the intersection of reinforcement learning with large language models (LLMs) has emerged as an exciting frontier, promising transformative applications and novel capabilities.

At its core, reinforcement learning involves training an agent to make decisions by interacting with an environment. Through trial and error, the agent learns to maximize cumulative rewards by taking optimal actions in various scenarios. RL differs from supervised learning in that it does not rely on labeled datasets but instead learns dynamically by exploring its environment. Large language models, such as OpenAI’s GPT series and Google’s Bard, represent another significant stride in AI. Trained on massive datasets, LLMs excel in understanding and generating human-like text, offering capabilities such as contextual understanding, reasoning, and multitasking. Their emergence has redefined how we interact with AI systems, enabling applications ranging from conversational agents to complex document summarization.

The integration of reinforcement learning with LLMs is a natural evolution. RL enhances LLMs by refining their decision-making and response-generation processes. Meanwhile, LLMs provide a rich context and adaptability, making RL systems more robust and versatile. Reinforcement Learning with Human Feedback (RLHF) has been pivotal in fine-tuning LLMs. By incorporating human preferences into the training loop, models are adjusted to generate responses that align with user expectations. For instance, RLHF has significantly improved the safety, coherence, and relevance of responses in conversational AI systems. Traditional RL struggles with problems that require understanding nuanced contexts or long-term dependencies. Integrating LLMs allows RL agents to process textual data, extract relevant information, and make decisions in environments where language and reasoning are critical, such as automated customer support or strategy games. By combining RL’s dynamic learning capability with the contextual depth of LLMs, AI systems can tailor experiences to individual users. For example, personalized education platforms can adapt course material dynamically based on a learner’s progress and preferences, creating a more engaging and effective experience.

The fusion of RL and LLMs has opened doors to innovative applications. Virtual assistants and bots, powered by RL-tuned LLMs, are becoming more capable of executing complex, multi-step tasks with minimal supervision. In medical diagnostics, RL-driven LLMs can guide physicians by analyzing patient histories, suggesting treatments, and explaining their reasoning in natural language. Trading algorithms and portfolio optimization are benefiting from RL’s decision-making power, augmented by LLMs’ ability to interpret market news and analyze textual data.

While the integration of RL and LLMs is promising, it comes with challenges. Training RL models on LLMs is computationally intensive, requiring significant resources to achieve real-time adaptability. Ensuring that AI systems act ethically and align with human intentions remains a complex issue. Combining RL and LLMs often results in “black-box” systems, making it difficult to understand and explain their decision-making processes.

The collaboration between reinforcement learning and large language models represents a paradigm shift in AI. By bridging decision-making and contextual understanding, these systems promise to redefine how we interact with technology. From powering intelligent assistants to tackling global challenges, the potential applications are vast and transformative. As research progresses, we can expect to see AI systems that are not only more capable but also more aligned with human needs and values, shaping a future where technology truly augments human potential.

`,
    date: 'Jan 21, 2025',
    readTime: '5 min read',
    
    category: 'AI',
    tags: ['Reinforcement Learning', 'AI', ]
  },
  {
    title: 'Quick review of System Design Fundamentals',
    excerpt: 'Fundamentals of system design',
    content: `System design is a critical aspect of software engineering, encompassing the high-level architecture and planning of complex systems to ensure they are scalable, efficient, reliable, and maintainable. It bridges the gap between theoretical computer science principles and practical implementation, requiring a thoughtful balance of creativity and technical expertise.

At its essence, system design involves defining the architecture of a system, including how components interact with each other, how data flows through the system, and how scalability and fault tolerance are achieved. A well-designed system is not just functional but also optimized for performance, resource utilization, and long-term adaptability. This requires a deep understanding of both the problem domain and the technical constraints within which the system operates.

The foundation of system design lies in understanding the requirements of the system, both functional and non-functional. Functional requirements define what the system is supposed to do, such as managing user data, processing transactions, or serving web pages. Non-functional requirements, on the other hand, address the quality attributes of the system, such as scalability, availability, latency, and security. Without a clear grasp of these requirements, designing an effective system becomes a futile endeavor.

One of the most fundamental aspects of system design is the choice of architecture. Broadly, architectures can be categorized into monolithic, microservices, or serverless designs, each with its own strengths and trade-offs. Monolithic architectures are straightforward and easy to deploy but may struggle to scale as the system grows. Microservices break down the system into smaller, independent services, offering better scalability and maintainability but introducing challenges in inter-service communication and deployment. Serverless architectures, leveraging cloud services, reduce operational overhead but require careful planning to optimize costs and performance.

Data storage and management form another critical component of system design. Choosing the right database—whether relational, NoSQL, or distributed—depends on the system’s needs. Relational databases like PostgreSQL or MySQL are ideal for structured data and ACID compliance, while NoSQL databases like MongoDB or Cassandra excel at handling unstructured or semi-structured data and high write-throughput requirements. In distributed systems, considerations like sharding, replication, and eventual consistency must be factored in to ensure high availability and fault tolerance.

Scalability, the ability of a system to handle increased load, is a cornerstone of system design. Horizontal scaling involves adding more machines to distribute the load, while vertical scaling enhances the capacity of a single machine. Load balancers, caching mechanisms, and content delivery networks (CDNs) are critical components in achieving scalability. A load balancer distributes traffic evenly across servers to prevent bottlenecks, while caching reduces the load on databases by storing frequently accessed data closer to the user. CDNs, on the other hand, improve performance by delivering content from servers geographically closer to the user.

Reliability and fault tolerance are equally vital. A reliable system is one that operates as expected, even in the face of failures. This requires designing with redundancy, implementing failover strategies, and employing mechanisms like data replication and checkpointing. Distributed systems often use consensus algorithms like Paxos or Raft to maintain consistency and reliability in the face of network partitions or node failures.

Security is another pillar of system design, encompassing both data protection and system integrity. Encryption, authentication, and authorization mechanisms safeguard data from unauthorized access, while regular audits and monitoring ensure that potential vulnerabilities are identified and mitigated proactively. Designing for security also involves anticipating potential attack vectors, such as DDoS attacks, and implementing measures like rate limiting and web application firewalls.

Observability and monitoring are crucial for maintaining and improving a system over time. Logs, metrics, and tracing provide insights into the system’s behavior and help in diagnosing issues. Tools like Prometheus, Grafana, and ELK Stack are widely used to implement robust monitoring and observability frameworks.

Trade-offs are an inherent part of system design. Decisions must be made with a clear understanding of their implications, often balancing competing priorities like performance versus cost or consistency versus availability. The CAP theorem, for instance, illustrates the trade-offs between consistency, availability, and partition tolerance in distributed systems, forcing designers to prioritize two at the expense of the third.

System design also demands consideration of future growth and adaptability. Systems should be designed to handle not only current requirements but also anticipated future demands. This involves modularity, where components are loosely coupled and easily replaceable, as well as adherence to principles like the SOLID design principles and domain-driven design (DDD).

In essence, system design is both an art and a science. It requires a meticulous approach to problem-solving, a deep understanding of the tools and technologies available, and a keen eye for detail. A well-designed system not only meets its immediate goals but also lays a solid foundation for future innovation, ensuring that it remains robust, adaptable, and aligned with evolving user needs. As technology continues to evolve, so too will the principles and practices of system design, pushing the boundaries of what is possible in the creation of complex, intelligent systems.`,
    date: 'Jan 21, 2025',
    readTime: '5 min read',
    
    category: 'System Design',
    tags: ['Database', 'System Design']
  },
  {
    title: ' Revolutionizing AI Solutions: Retrieval-Augmented Generation (RAG) Applications',
    excerpt: 'Retrieval-Augmented Generation (RAG) represents a paradigm shift in artificial intelligence, combining...',
    content: `Retrieval-Augmented Generation (RAG) represents a paradigm shift in artificial intelligence, combining the strengths of retrieval-based systems and generative models to create powerful, context-aware applications. This hybrid approach bridges the gap between static knowledge retrieval and dynamic text generation, enabling systems to perform tasks with greater accuracy, relevance, and adaptability. As AI continues to transform industries, RAG emerges as a cornerstone technology, paving the way for advanced applications across domains.

At its heart, RAG fuses two distinct methodologies. Retrieval-based systems excel at sourcing relevant information from vast datasets or knowledge bases, leveraging indexing and search algorithms to identify precise answers to user queries. Generative models, on the other hand, specialize in creating coherent and contextually appropriate text, drawing from learned patterns in language data. By integrating these two components, RAG systems retrieve pertinent information in real-time and use it to craft responses that are both accurate and human-like.

One of the defining features of RAG is its ability to dynamically retrieve information from external sources during inference. Unlike traditional generative models, which rely solely on their training data, RAG systems access live or frequently updated knowledge repositories. This ensures that the generated responses reflect the most current and relevant information. For instance, in applications like customer support, a RAG-powered chatbot can pull the latest product specifications or policy updates, providing users with accurate and reliable answers.

The applications of RAG are vast and transformative, spanning industries such as healthcare, education, finance, and e-commerce. In healthcare, RAG systems can assist physicians by retrieving up-to-date medical research and guidelines while generating patient-specific recommendations. This combination of precision retrieval and contextualized output has the potential to revolutionize diagnostics and treatment planning, ensuring that practitioners have access to the best available information.

In education, RAG opens new possibilities for personalized learning. Systems can retrieve relevant study materials, adapt them to a learner’s level, and present explanations tailored to individual needs. This approach not only enhances comprehension but also encourages active engagement by providing real-time feedback and clarification.

The financial sector is another beneficiary of RAG technology. In trading and investment analysis, RAG systems can retrieve the latest market data, news articles, and analyst reports, synthesizing them into actionable insights. Similarly, regulatory compliance applications can leverage RAG to parse complex legal documents and generate summaries, aiding organizations in navigating intricate legal landscapes.

E-commerce platforms also stand to gain significantly from RAG. These systems can enhance product search capabilities by retrieving relevant options and generating personalized recommendations. Moreover, they can answer user queries in natural language, creating a seamless and intuitive shopping experience.

While the potential of RAG is immense, it also comes with challenges that require careful consideration. One major concern is the accuracy of retrieved information. The effectiveness of a RAG system heavily depends on the quality and relevance of the underlying knowledge base. Ensuring that these repositories are curated and updated regularly is crucial to maintaining system reliability.

Another challenge lies in mitigating biases that may arise from both the retrieval and generative components. Retrieval systems might prioritize certain sources over others, while generative models could inadvertently amplify biases present in the data. Addressing these issues requires ongoing monitoring, ethical oversight, and algorithmic improvements to foster fairness and inclusivity.

Scalability and efficiency are also key considerations in deploying RAG applications. Real-time retrieval and generation demand substantial computational resources, especially when dealing with large-scale knowledge bases or high query volumes. Techniques like indexing optimization, caching, and distributed processing play a vital role in ensuring the responsiveness and feasibility of RAG systems.

Looking ahead, the future of RAG is promising. Innovations in retrieval algorithms, such as dense vector search and neural retrieval models, are enhancing the precision and speed of information retrieval. Concurrently, advances in generative AI, including fine-tuning large language models and integrating reinforcement learning techniques, are improving the quality of generated outputs.

Moreover, as multimodal AI gains traction, RAG systems are poised to expand beyond text-based applications. By incorporating image, video, and audio retrieval alongside text generation, RAG can power even more sophisticated applications. For instance, in creative industries, a RAG system might retrieve visual references and generate accompanying textual descriptions for projects, unlocking new possibilities for collaboration and innovation.

In conclusion, Retrieval-Augmented Generation is a groundbreaking advancement in AI, blending retrieval and generation capabilities to deliver unparalleled functionality and adaptability. By addressing the challenges of accuracy, bias, and scalability, RAG systems can redefine the boundaries of what is possible in artificial intelligence. As this technology evolves, its transformative potential will continue to shape industries, driving innovation and enhancing human-AI interactions across the globe.`,
    date: 'Jan 21, 2025',
    readTime: '8 min read',
  
    category: 'AI',
    tags: ['RAG', 'AI']
  },
  // ... rest of the blog posts with added content field
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 relative z-10"
      >
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 animate-text-shimmer">
            Latest Articles
          </span>
        </motion.h2>

        <div className="mb-12 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-300 text-white"
            />
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <BlogCard 
                key={post.title} 
                post={post} 
                index={index}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <BlogModal
          post={selectedPost}
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      </motion.div>
    </section>
  );
};

const BlogCard = ({ post, index, onClick }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    onClick={onClick}
    className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="w-4 h-4 text-purple-400" />
        <span className="text-sm text-purple-400">{post.category}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
        {post.title}
      </h3>
      
      <p className="text-gray-400">
        {post.excerpt}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  </motion.article>
);

const BlogModal = ({ post, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", damping: 20 }}
          className="min-h-screen py-8 px-4 flex items-center justify-center"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-gray-900 rounded-xl max-w-4xl w-full relative overflow-hidden">
            <div className="absolute top-4 right-4 z-10 flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            <div className="p-8">
              <motion.button
                onClick={onClose}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 group"
                whileHover={{ x: -5 }}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to articles</span>
              </motion.button>

              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400">{post.category}</span>
                </div>

                <h2 className="text-3xl font-bold text-white">{post.title}</h2>

                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {post.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Blog;