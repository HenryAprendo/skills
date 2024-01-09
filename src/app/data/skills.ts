
export interface Technologies {
  id: number;
  title: string;
  date: Date
}

export const technologies:Technologies[] = [
  {
    id: 0,
    title: 'Javascript',
    date: new Date(2021,10)
  },
  {
    id: 1,
    title: 'Typescript',
    date: new Date(2022,5)
  },  {
    id: 2,
    title: 'Angular',
    date: new Date(2022,6)
  },
  {
    id: 3,
    title: 'Database Oracle SQL',
    date: new Date(2023,9)
  },
  {
    id: 4,
    title: 'HTML',
    date: new Date(2021,11)
  },  {
    id: 5,
    title: 'CSS',
    date: new Date(2021,11)
  },  {
    id: 6,
    title: 'TailwindCss',
    date: new Date(2023,1)
  },
  {
    id: 7,
    title: 'Mobile first',
    date: new Date(2022,2)
  },
  {
    id: 8,
    title: 'Oracle APEX low code',
    date: new Date(2023,9)
  }
];
