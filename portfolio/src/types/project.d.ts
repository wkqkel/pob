interface IImage {
  src: string;
  alt: string;
}

export interface IProject {
  id: number;
  name: string;
  sort: string;
  date: string;
  image: IImage;
  link: string;
}
