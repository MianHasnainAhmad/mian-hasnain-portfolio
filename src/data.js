export const links = {
  github: 'https://github.com/MianHasnainAhmad',
  linkedin: 'https://www.linkedin.com/in/mian-hasnain-951695325',
  email: 'mianh2221@gmail.com',
  academy: 'https://maintuitionclasses.netlify.app',
  location: 'Nowshera Kalan, Khyber Pakhtunkhwa, Pakistan',
};

export const facts = [
  ['BS Software Engineering', 'Abdul Wali Khan University, Mardan · 2023–2027'],
  ['4+ years teaching', 'Director & Lead Educator, Mian Tuition Academy'],
  ['3 featured projects', 'React, JavaScript, HTML and CSS'],
];

export const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'C++', 'Python', 'HTML5', 'CSS3'] },
  { title: 'Frontend', items: ['React', 'Vite', 'Bootstrap', 'Responsive design', 'REST API integration'] },
  { title: 'Tools & practice', items: ['Git & GitHub', 'Netlify deployment', 'UML & software design', 'VS Code'] },
  { title: 'Learning now', items: ['Backend development'] },
];

export const projects = [
  {
    title: 'Meezan Book Store Management',
    description:
      'A shop management app for a book and stationery store: stock register, cart-based billing with printable receipts, automatic stock deduction, profit tracking, daily reports and JSON backup. Built without frameworks; data stays in the browser with localStorage.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'localStorage'],
    github: 'https://github.com/MianHasnainAhmad/Book-Store-Management',
  },
  {
    title: 'Windrose Weather App',
    description:
      'A React weather app with live city search, loading and error states, and icons and backgrounds that change with conditions and day or night. Uses the free Open-Meteo API, so no API key is exposed in the browser.',
    tech: ['React', 'Vite', 'REST API', 'CSS3'],
    github: 'https://github.com/MianHasnainAhmad/weather-app-react',
  },
  {
    title: 'Mian Tuition Classes',
    description:
      'A public website for my tuition academy that helps students and parents discover classes and learning support online. Built, deployed and maintained by me.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    live: links.academy,
    featured: true,
  },
];

export const timeline = [
  {
    date: '2023 – 2027',
    kind: 'Education',
    title: 'BS Software Engineering',
    place: 'Abdul Wali Khan University, Mardan',
    text: 'Relevant coursework: Software Design & Architecture, Theory of Automata and Artificial Intelligence. A+ grades in both Matriculation and Intermediate.',
  },
  {
    date: 'Present · 4+ years',
    kind: 'Experience',
    title: 'Director & Lead Educator',
    place: 'Mian Tuition Academy, Nowshera Kalan',
    text: 'Teach students and run the academy alongside my degree. Created and maintain the academy’s public website.',
    link: { href: links.academy, label: 'Visit academy website' },
  },
];
