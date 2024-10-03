export type Category = {
  createdAt: Date;
  title: string;
  createBy: string;
  type: string;
  id: string;
};

export type Courses = {
  title: string;
  image: string;
  description: string;
  tag: string;
  level: string;
  price: string;
  lessons: number;
  createBy: string;
  createAt: Date | string;
  id: string;
};

export type Users = {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
};

export type DataMainProvider = {
  category: Category[];
  course: Courses[];
  users: Users[];
};
