export default interface Data {
  name: string;
  title: string;
  description: string;
  github: string;
  project: [
    {
      name: string;
      link: string;
    }
  ];
  contact: [
    {
      name: string;
      link: string;
    }
  ];
}
