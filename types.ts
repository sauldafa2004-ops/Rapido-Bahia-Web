
export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  ageRange: string;
  trainingDays: string;
  image: string;
}

export interface ClubValue {
  title: string;
  description: string;
  icon: string;
}
