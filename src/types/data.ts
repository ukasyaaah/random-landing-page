export default interface Data {
  name: string;
  title: string;
  description: string;
  github: string;
  project: string;
  contact: [
    {
      name: string;
      link: string;
    }
  ];
}
