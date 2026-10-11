export const links = {
  github: 'https://github.com/MianHasnainAhmad',
  linkedin: 'https://www.linkedin.com/in/mian-hasnain-951695325',
  email: 'mianh2221@gmail.com',
  academy: 'https://maintuitionclasses.netlify.app',
  cv: '/Mian_Hasnain_Ahmad_CV.pdf',
  location: 'Nowshera Kalan, Khyber Pakhtunkhwa, Pakistan',
};

export const facts = [
  ['BS Computer Science (Software Engineering)', 'Abdul Wali Khan University, Mardan · CGPA 3.43 / 4.00'],
  ['4+ years teaching', 'Director & Lead Educator, Mian Tuition Academy'],
  ['4 featured projects', 'React, JavaScript, Tailwind CSS, HTML and CSS'],
];

export const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'C++', 'Python', 'HTML5', 'CSS3'] },
  { title: 'Frontend', items: ['React', 'Tailwind CSS', 'Vite', 'Bootstrap', 'Responsive design', 'REST API integration'] },
  { title: 'Databases', items: ['MySQL', 'SQL Server'] },
  { title: 'Tools & practice', items: ['Git & GitHub', 'Netlify deployment', 'VS Code', 'UML & software design'] },
  { title: 'Design', items: ['Canva', 'Posters & banners', 'Logos'] },
  { title: 'Learning now', items: ['Backend development'] },
];

export const projects = [
  {
    title: 'Smart ATM Simulator',
    description:
      'An interactive ATM simulator with a card reader, PIN security that locks after 3 wrong attempts, balance check, withdraw, deposit and transaction history. Balance and history are saved in the browser.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    live: 'https://atm-simulator1.netlify.app/',
    github: 'https://github.com/MianHasnainAhmad/ATM-Simulator',
  },
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
    live: 'https://weatherappmianhasnaintask10.netlify.app/',
    github: 'https://github.com/MianHasnainAhmad/weather-app-react',
  },
  {
    title: 'Mian Tuition Classes',
    description:
      'A responsive website for my tuition academy that helps students and parents discover classes and learning support online, with an admission form that sends student inquiries straight to the academy’s email. Built, deployed and maintained by me.',
    tech: ['HTML', 'CSS', 'React', 'Netlify'],
    live: links.academy,
    featured: true,
  },
];

export const timeline = [
  {
    date: 'Present · 4+ years',
    kind: 'Experience',
    title: 'Director & Lead Educator',
    place: 'Mian Tuition Academy, Nowshera Kalan',
    text: 'Founded and run a tuition academy, managing the curriculum, daily operations and a small team of educators alongside my degree. Built and maintain the academy’s website and admission form.',
    link: { href: links.academy, label: 'Visit academy website' },
  },
  {
    date: '2023 – 2027',
    kind: 'Education',
    title: 'BS Computer Science (Software Engineering)',
    place: 'Abdul Wali Khan University, Mardan',
    text: 'CGPA 3.43 / 4.00. Relevant coursework: Software Design & Architecture, Theory of Automata and Artificial Intelligence.',
  },
  {
    date: '2023',
    kind: 'Education',
    title: 'Intermediate (FSc, Pre-Engineering)',
    place: 'Punjab College, Nowshera Kalan',
    text: 'Grade A (814 / 1100).',
  },
  {
    date: '2021',
    kind: 'Education',
    title: 'Matriculation (Science)',
    place: 'Al-Haq Public School, Nowshera Kalan',
    text: 'Grade A+ (902 / 1100).',
  },
];

export const certifications = [
  ['Front End Development', 'Meta'],
  ['WordPress Website Development', 'Meta'],
  ['Designing Course', 'Entrepreneur Society · 2026'],
];
