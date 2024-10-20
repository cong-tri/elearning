export const public_api_users: string = "https://fakestoreapi.com/users";

export const keyCollection = {
  categories: "categories",
  courses: "courses",
  users: "users",
  blogs: "blogs",
  events: "events",
  zoom: "zoom",
  quizs: "quizs",
  authorize: "authorize",
};
export const key = {
  token: "userToken",
  info: "userInfo",
  uid: "userUid",
};

export const keyToken = "userToken";
export const keyInfo = "userInfo";

// export const listCourses = [
//   {
//     title: "Modern JavaScript Frontend Development",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Comprehensive course on modern JavaScript for building responsive web applications.",
//     tag: "frontend",
//     level: "beginner",
//     price: "50.00",
//     lessons: 120,
//     created_by: "John Doe",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Mastering React.js",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "A deep dive into building scalable and efficient applications with React.js.",
//     tag: "frontend",
//     level: "intermediate",
//     price: "80.00",
//     lessons: 150,
//     created_by: "Jane Smith",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Node.js for Backend Development",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Learn to build fast, scalable backend services using Node.js and Express.",
//     tag: "backend",
//     level: "beginner",
//     price: "70.00",
//     lessons: 110,
//     created_by: "Chris Anderson",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "PHP and Laravel: Backend Development",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Master PHP and Laravel for modern backend development and RESTful API creation.",
//     tag: "backend",
//     level: "intermediate",
//     price: "60.00",
//     lessons: 130,
//     created_by: "Sara Collins",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Fullstack Web Development with MERN",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "A complete guide to building full-stack applications using MongoDB, Express, React, and Node.js.",
//     tag: "fullstack",
//     level: "advanced",
//     price: "100.00",
//     lessons: 180,
//     created_by: "Alex Johnson",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "SQL and Database Management",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Learn SQL and relational database management using MySQL and PostgreSQL.",
//     tag: "database",
//     level: "beginner",
//     price: "40.00",
//     lessons: 90,
//     created_by: "Emily Roberts",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "NoSQL Databases: MongoDB Masterclass",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Master MongoDB for NoSQL databases and learn how to handle big data efficiently.",
//     tag: "database",
//     level: "intermediate",
//     price: "65.00",
//     lessons: 100,
//     created_by: "Olivia Blake",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Android Development with Kotlin",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Become proficient in building Android mobile applications using Kotlin.",
//     tag: "mobile",
//     level: "beginner",
//     price: "75.00",
//     lessons: 130,
//     created_by: "David Clark",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "iOS App Development with Swift",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Learn how to create sleek and efficient iOS applications using Swift.",
//     tag: "mobile",
//     level: "intermediate",
//     price: "90.00",
//     lessons: 140,
//     created_by: "Sophia Martinez",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Learn Python Programming",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "A comprehensive guide to Python for all types of applications from web development to data science.",
//     tag: "language",
//     level: "beginner",
//     price: "55.00",
//     lessons: 100,
//     created_by: "Michael Thompson",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Mastering Java Programming",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Advanced concepts in Java for building enterprise-level applications.",
//     tag: "language",
//     level: "advanced",
//     price: "85.00",
//     lessons: 160,
//     created_by: "Laura Peterson",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Angular: Complete Guide",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Learn Angular to build modern, scalable, and maintainable web applications.",
//     tag: "frontend",
//     level: "intermediate",
//     price: "85.00",
//     lessons: 140,
//     created_by: "Daniel Brown",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Vue.js: Beginner to Advanced",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Master Vue.js for creating dynamic and powerful user interfaces.",
//     tag: "frontend",
//     level: "beginner",
//     price: "70.00",
//     lessons: 100,
//     created_by: "Karen Lee",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Django for Web Development",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Learn Django, the powerful Python-based web framework for backend development.",
//     tag: "backend",
//     level: "intermediate",
//     price: "75.00",
//     lessons: 120,
//     created_by: "Tom Nguyen",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Ruby on Rails: Web App Development",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Build fast and scalable web applications using Ruby on Rails.",
//     tag: "backend",
//     level: "intermediate",
//     price: "80.00",
//     lessons: 130,
//     created_by: "Jessica Turner",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Flutter: Mobile App Development",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Build beautiful, natively compiled mobile applications using Flutter.",
//     tag: "mobile",
//     level: "beginner",
//     price: "65.00",
//     lessons: 110,
//     created_by: "Ryan Smith",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "React Native: Cross-Platform Apps",
//     image: "https://loremflickr.com/640/480",
//     description: "Create cross-platform mobile applications with React Native.",
//     tag: "mobile",
//     level: "intermediate",
//     price: "90.00",
//     lessons: 125,
//     created_by: "Linda Williams",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Go Programming for Backend",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Learn Go programming language to build robust backend services.",
//     tag: "language",
//     level: "beginner",
//     price: "60.00",
//     lessons: 90,
//     created_by: "Mark Davis",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "C# and .NET Core: Web Development",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Develop modern web applications with C# and the .NET Core framework.",
//     tag: "fullstack",
//     level: "advanced",
//     price: "95.00",
//     lessons: 160,
//     created_by: "Sam Harris",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "GraphQL: API Development",
//     image: "https://loremflickr.com/640/480",
//     description: "Master GraphQL for building efficient and flexible APIs.",
//     tag: "backend",
//     level: "intermediate",
//     price: "80.00",
//     lessons: 115,
//     created_by: "Monica Gray",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Svelte: Fast Frontend Development",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Learn Svelte to build high-performance web applications with minimal complexity.",
//     tag: "frontend",
//     level: "beginner",
//     price: "55.00",
//     lessons: 90,
//     created_by: "Oliver Hughes",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Bootstrap 5: Responsive Web Design",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Master Bootstrap 5 to create responsive, mobile-first websites easily.",
//     tag: "frontend",
//     level: "beginner",
//     price: "40.00",
//     lessons: 70,
//     created_by: "Maria Garcia",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Next.js: Server-Side React",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Build fast and scalable web applications using Next.js and server-side rendering.",
//     tag: "fullstack",
//     level: "intermediate",
//     price: "75.00",
//     lessons: 100,
//     created_by: "Lucas Martin",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Spring Boot: Java Microservices",
//     image: "https://loremflickr.com/640/480",
//     description: "Learn Spring Boot for building scalable Java microservices.",
//     tag: "backend",
//     level: "advanced",
//     price: "85.00",
//     lessons: 140,
//     created_by: "Sophia Lee",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Kubernetes: Orchestration for Microservices",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Master Kubernetes for container orchestration and manage microservices architecture efficiently.",
//     tag: "backend",
//     level: "advanced",
//     price: "95.00",
//     lessons: 130,
//     created_by: "Ethan Thompson",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Docker: Containerization from Scratch",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Learn Docker to build, ship, and run distributed applications in containers.",
//     tag: "backend",
//     level: "intermediate",
//     price: "65.00",
//     lessons: 110,
//     created_by: "Hannah Moore",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Ionic Framework: Cross-Platform Mobile Apps",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Develop hybrid mobile applications using the Ionic framework and web technologies.",
//     tag: "mobile",
//     level: "beginner",
//     price: "50.00",
//     lessons: 90,
//     created_by: "Emma White",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Rust Programming: Systems and Web Development",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Learn Rust programming for building fast and secure systems and web applications.",
//     tag: "language",
//     level: "intermediate",
//     price: "80.00",
//     lessons: 120,
//     created_by: "Liam Martinez",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "TypeScript: Supercharge Your JavaScript",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Master TypeScript to write more robust, type-safe JavaScript applications.",
//     tag: "language",
//     level: "intermediate",
//     price: "55.00",
//     lessons: 95,
//     created_by: "Jack Wilson",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
//   {
//     title: "Elixir and Phoenix Framework: Scalable Web Applications",
//     image: "https://loremflickr.com/640/480",
//     description:
//       "Learn Elixir and Phoenix framework for building fault-tolerant and scalable web applications.",
//     tag: "backend",
//     level: "advanced",
//     price: "90.00",
//     lessons: 125,
//     created_by: "Mia Johnson",
//     created_at: "2024-09-11T08:53:47.394Z",
//   },
// ];
