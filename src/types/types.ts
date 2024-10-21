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
  id: string;
  content: {
    content_first: string;
    content_second: string;
    content_third?: string;
    content_four?: string;
  };
  created_at: Date | string;
  created_by: string;
  date: string;
  label: {
    label_first: string;
    label_second: string;
    label_third?: string;
    label_four?: string;
  };
  title: string;
}

export interface IEvents {
  id: string;
  content: {
    content_first: string;
    content_second: string;
  };
  created_at: Date | string;
  created_by: string;
  date: string;
  label: {
    label_first: string;
    label_second: string;
  };
  title: string;
}

export interface IZooms {
  meet_id: string;
  id: string;
  hours: string;
  host_by: string;
  created_at: Date | string;
  created_by: string;
  date: string;
  start_time: string;
  title: string;
}

export interface IUsers {
  id: string;
  address: string;
  code: string;
  created_at: Date | string;
  created_by: string;
  email: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  role: "admin" | "user";
  user_id: string;
  username: string;
  description: string;
  carts?: ICourses[];
}

// for form input
export type InputUser = {
  id: string;
  user_id: string;
  code: string;
  address: string;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  phone: string;
  role: "admin" | "user";
  created_at: Date | string;
  created_by: string;
  description: string;
};

export interface IQuizs {
  id: string;
  attemps: number;
  created_at: Date | string;
  created_by: string;
  start_time: string;
  end_time: string;
  host_by: string;
  questions: number;
  type: string;
  title: string;
}

export type IDataMainProvider = {
  categories: ICategory[];
  course: ICourses[];
  blogs: IBlogs[];
  events: IEvents[];
  zooms: IZooms[];
  quizs: IQuizs[];
};

export type IDataAdminProvider = {
  id: string;
  users: IUsers[];
  isModalOpen: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  setId: (event: string) => void;
};
