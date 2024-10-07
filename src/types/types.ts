export interface ICategory {
  id: string;
  created_at: Date | string;
  title: string;
  created_by: string;
  type: string;
  category_id: string;
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
  createBy: string;
  createAt: Date | string;
  course_id: string;
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
};

export type IDataAdminProvider = {
  users: IUsers[];
};
