export const links = {
  github: 'https://github.com/MianHasnainAhmad',
  linkedin: 'https://www.linkedin.com/in/mian-hasnain-951695325?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  email: 'mianh2221@gmail.com',
  academy: 'https://maintuitionclasses.netlify.app',
};

export const skills = [
  ['HTML5', 'Semantic, accessible page structure'],
  ['CSS3', 'Responsive layouts and polished interfaces'],
  ['JavaScript', 'Interactive, user-friendly features'],
  ['React', 'Reusable components and state-driven UI'],
  ['Bootstrap', 'Mobile-first interface patterns'],
  ['Git & GitHub', 'Version control and project sharing'],
];

export const projects = [
  {
    title: 'Mian Tuition Classes',
    description: 'A public-facing tuition academy website that helps students discover classes and learning support online.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    live: links.academy,
    featured: true,
  },
  {
    title: 'Personal Portfolio',
    description: 'This responsive portfolio site, built to present projects, skills, and professional contact details clearly.',
    tech: ['React', 'CSS3', 'Vite'],
    live: '#home',
  },
  {
    title: 'Frontend Practice Projects',
    description: 'A growing collection of internship work and web-development practice projects available on GitHub.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: links.github,
  },
];
