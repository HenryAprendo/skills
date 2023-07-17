
export interface Projects {
  id: number;
  title: string;
  skills: string[];
  url: string;
  image: string;
}

export const projects:Projects[] = [
  {
    id: 8,
    title: 'Formulary multi step',
    skills: ['Angular','Tailwindcss','Html','Git','Mobile first'],
    url: 'https://multi-step-form-800a8.web.app',
    image: './../../assets/images/form-steps.jpg'
  },
  {
    id: 7,
    title: 'Countries world',
    skills: ['Angular','Tailwindcss','Html','Git','Mobile first'],
    url: 'falta',
    image: './../../assets/images/country.jpg'
  },
  {
    id: 6,
    title: 'Jobs listing',
    skills: ['Angular','CSS','HTML','Git','Mobile first'],
    url: 'https://jobs-list-d37e3.web.app/',
    image: './../../assets/images/jobs.jpg'
  },
  {
    id: 5,
    title: 'Todo App',
    skills: ['React','CSS','HTML','Git','Mobile first'],
    url: 'todoapp',
    image: './../../assets/images/todo-react.jpg'
  },
  {
    id: 4,
    title: 'Fashion store',
    skills: ['Angular','Rxjs','Tailwindcss','Html','Git','Mobile first'],
    url: 'https://fashion-store-956b2.web.app/home',
    image: './../../assets/images/store.jpg'
  },
  {
    id: 3,
    title: 'The bible',
    skills: ['Angular','Rxjs','Html','Css','Git','Mobile first'],
    url: 'https://the-bible-95f37.web.app/bible',
    image: './../../assets/images/bible.jpg'
  },
  {
    id: 2,
    title: 'Sunnyside agency',
    skills: ['Html','Tailwindcss','Git','Mobile first', 'Responsive design'],
    url: 'https://sunnyside-agency-3d1df.web.app/',
    image: './../../assets/images/sunnyside.jpg'
  },
  {
    id: 1,
    title: 'Todo drag and drog',
    skills: ['Angular','Tailwindcss','Rxjs','Html','Git','Mobile first'],
    url: 'https://to-do-list-d126c.web.app/',
    image: './../../assets/images/todo.jpg'
  },
  {
    id: 0,
    title: 'Text encryptor',
    skills: ['Javascript','Html','Css','Git','Mobile first'],
    url: 'https://henryaprendo.github.io/Encriptador-Alura-RD/',
    image: './../../assets/images/encriptador.jpg',
  },
];












