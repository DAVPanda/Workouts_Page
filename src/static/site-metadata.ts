interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'LYX\'S Workouts Map',
  siteUrl: 'https://davpanda.github.io/Workouts_Page/',
  logo: 'https://img.picgo.net/2025/03/17/Anime026e152421d44d6a.md.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Code',
      url: 'https://github.com/ben-29/workouts_page',
    },
    {
      name: 'About',
      url: 'https://github.com/ben-29/workouts_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
