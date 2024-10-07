export interface ICategory {
  id: string;
  created_at: Date | string;
  title: string;
  created_by: string;
  type: string;
}

export interface ICourses {
  id: string;
  title: string;
  image: string;
  description: string;
  tag: string;
  level: string;
  price: string;
  lessons: number;
  created_by: string;
  created_at: Date | string;
}

export interface IBlogs {
  blog_id: string;
  id: string;
  content_1: string;
  content_2: string;
  content_3: string;
  created_at: Date | string;
  created_by: string;
  date: string;
  label_1: string;
  label_2: string;
  title: string;
}

export interface IUsers {
  address: string;
  user_id: string;
  code: string;
  id: string;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  created_at: Date | string;
  created_by: string;
  role: "admin" | "user";
}

export type IDataMainProvider = {
  categories: ICategory[];
  course: ICourses[];
  blogs: IBlogs[];
};

export type IDataAdminProvider = {
  users: IUsers[];
};
