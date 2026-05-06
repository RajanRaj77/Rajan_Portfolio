export const listProjects = [
  {
    id: 1,
    icon: '🏪',
    title: 'Customer Service Management System',
    subtitle: 'Mall-based multi-role customer support platform with real-time REST API communication.',
    fullDescription: 'Designed and implemented a RESTful backend using Spring Boot to handle service requests for a mall-based customer support system, supporting multi-role workflows (customer, support staff, admin). Integrated Angular frontend via REST APIs enabling real-time communication between customers and staff. Architected layered service-repository structure to separate business logic from data access, making the system modular and extensible.',
    tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'REST APIs', 'MVC'],
    borderColor: '#00ffc8',
    gradient: 'linear-gradient(145deg, #0d2e26, #07080d)',
    url: 'https://github.com/RajanRaj77/SpringBootSprint1/tree/master/customerservice1',
  },
  {
    id: 2,
    icon: '🔐',
    title: 'Secure Signup & Authentication System',
    subtitle: 'Production-grade JWT auth with BCrypt encryption and Spring Security filter chain.',
    fullDescription: 'Built a production-grade authentication system using Spring Boot with JWT-based stateless authentication, ensuring secure session management without server-side token storage. Implemented BCrypt password encryption and Spring Security filter chain to enforce access control, protecting sensitive endpoints against unauthorized access. Configured role-based authorization to differentiate user permissions, reducing security attack surface.',
    tags: ['Spring Boot', 'JWT', 'Spring Security', 'BCrypt', 'Role-Based Auth'],
    borderColor: '#6c63ff',
    gradient: 'linear-gradient(145deg, #16103a, #07080d)',
    url: 'https://github.com/RajanRaj77/SignUp_Springboot/tree/master/Registration',
  },
  {
    id: 3,
    icon: '🍽️',
    title: 'Console-Based Hotel Food Ordering System',
    subtitle: 'Java OOP console app with menu, OTP verification, quantity management and bill generation.',
    fullDescription: 'Engineered a Java console application implementing OOP principles (encapsulation, inheritance) to simulate full hotel ordering flow: menu selection, quantity management, OTP verification, and bill generation. Implemented OTP generation module for order confirmation, reducing invalid order submissions and simulating a real-world transaction validation mechanism.',
    tags: ['Core Java', 'OOP', 'Encapsulation', 'Inheritance', 'OTP Module'],
    borderColor: '#ff6b8a',
    gradient: 'linear-gradient(145deg, #2e1018, #07080d)',
    url: 'https://github.com/RajanRaj77/Restaurant_web',
  },
];

export const listSkills = [
  { category: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React JS', 'Angular'] },
  { category: 'Backend', skills: ['Core Java', 'Spring Boot', 'RESTful APIs', 'JWT', 'Spring Security'] },
  { category: 'Database', skills: ['SQL', 'PostgreSQL'] },
  { category: 'Tools & DevOps', skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Postman'] },
];

export const listCerts = [
  { name: 'Java Full Stack Development', org: 'Code99 IT Academy' },
  { name: 'Java Full Stack', org: 'Capgemini TNS India Foundation' },
];
