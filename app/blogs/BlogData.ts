export const blog = [
  {
    slug: "migrating-react-to-nextjs",
    image: "/images/blog-img1.png",
    title:
      "Migrating a real project from React to Next.js: What Actually Broke and Why",
    link: "Read More",
    excerpt: [
      "While working on my project, I decided to migrate from React to Next.js due to challenges with routing. I found that Next.js offers a more intuitive and structured routing system, which made navigation and organization much easier.",
      "Another reason for the switch was SEO. Next.js makes it straightforward for my work to be discoverable, ensuring that my projects reach a wider audience.",
    ],
    sections: [
      {
        intro:
          "While working on my project, I decided to migrate from React to Next.js due to challenges with routing. I found that Next.js offers a more intuitive and structured routing system, which made navigation and organization much easier.",
      },
      {
        title: "What Became Hard",
        contents: [
          "As my projects grew, routing in React started to feel repetitive and harder to manage, especially when adding new pages or nested routes. React required third-party libraries like React Router to handle client-side navigation, which added extra setup and mental overhead.",
          "This wasn’t a theoretical decision. Over time, I migrated three different projects from React to Next.js, and each migration exposed different pain points, trade-offs, and improvements.",
        ],
      },
      {
        title: "What Got Better",
        contents: [
          "With Next.js, routing felt simpler because the folder structure directly mapped to the URL structure. File-based routing made navigation easier as my projects grew.",
          "Adding a new page wasn’t just faster, it was more comprehensible, and I no longer had to deal with lengthy React Router setups.",
        ],
      },
      {
        title: "Why SEO Was a Big Factor",
        contents: [
          "React applications are mostly client-rendered, meaning content is rendered in the browser, which can make discoverability more challenging. Next.js offers built-in SEO advantages through server-side rendering and static generation, making it easier for my projects to be indexed by search engines.",
          "Additionally, Next.js’s file-based routing makes it easy to create clean, SEO-friendly URLs and dynamic routes that help search engines better understand the site structure.",
        ],
      },

      {
        title: "Final Thoughts",
        contents: [
          "Migrating from React to Next.js wasn’t about replacing React, but about choosing the right tool for the problems I was facing. Going forward, I’ll use Next.js for projects I want to be easily discoverable and for larger applications, especially because of its file-based routing system.",
          "One honest lesson I learned during the migration is that there are many tools available, and choosing the right one can make building and maintaining projects much easier.",
        ],
      },
    ],
  },

  {
    slug: "portfolio-mistakes-and-fixes",
    image: "/images/blog-img-2.png",
    title:
      "What I Got Wrong When I First Built My Portfolio (and How I Fixed It)",
    link: "Read More",
    excerpt: [
      "I built my portfolio because I wanted a single place that represented how I think, build and solve problems, as a software engineer, not just a list of projects.",
      "Beyond visibility to potential employers, the portfolio became a learning ground where I documented mistakes, refactored ideas, and shared lessons with other developers through my blog.",
    ],
    sections: [
      {
        title: "Structure / Overengineering",
        contents: [
          "When I began building my portfolio, I focused more on making it look professional than on what actually worked. I even added libraries and features that weren't necessary, which overcomplicated my project right from the start.",
          "This made navigation confusing, caused small changes to break things, and left me spending more time untangling my code than building. I learned the hard way that starting simple and scaling gradually is the better approach: add features only when necessary, and structure folders for clarity, not complexity.",
        ],
      },
      {
        title: "Ignoring Performance and SEO Early On",
        contents: [
          "At the beginning, I didn't pay enough attention to SEO, loading speed, responsiveness, visual stability, or perceived performance. As a result, the portfolio didn't feel very user-friendly.",
          "I had to spend time refactoring my code to improve performance, enhance user experience, and optimize the site for SEO.",
        ],
      },
      {
        title: "Not Designing Components for Reuse",
        contents: [
          "I relied heavily on hard-coding instead of building reusable components. This led to repeated code, wasted time, and a codebase that quickly became bulky and difficult to manage.",
          "I eventually had to take a step back, go through the painful process of removing duplicated logic, and refactor my work into reusable components. This not only made the code cleaner, but also easier to read and maintain.",
        ],
      },
      {
        title: "What I'd Do Differently Today",
        contents: [
          "If I were starting again, I would keep the project simple and readable at the beginning, then scale gradually without adding unnecessary features. I would also plan which components should be reusable from the start to keep the codebase clean and maintainable.",
          "Most importantly, I now focus more on writing code that works well and is easy to understand, rather than code that only looks complex or impressive.",
        ],
      },
    ],
  },
];
