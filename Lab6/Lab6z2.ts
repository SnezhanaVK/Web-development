//Переделано под 4 задание
type User = {
  id: string;
  name: string;
}

type Role = "student" | "teacher";

type Rate = 1 | 2 | 3 | 4 | 5;

type Level = "junior" | "middle" | "senior";

type Course = {
  id: number;
  title: string;
  role: Role;
  rate: Rate;
  level: Level;
}

type Student = User & {
  courses: { [id: number]: Omit<Course, "role"> & { role: Exclude<Role, "teacher"> } };
}

type Teacher = User & {
  courses: { [id: number]: Pick<Course, "id" | "title" | "level"> & { role: "teacher" } };
}

type Director = User & {
  students: { [id: string]: Student };
  teachers: { [id: string]: Teacher & { rate: Rate } };
}

// ---
const student1: Student = {
  id: "s1",
  name: "Маша",
  courses: {
      4: {
          id: 1,
          title: "Первый",
          rate: 5,
          level: "middle",
          role: "student"
      }
  },
}

const teacher1: Teacher = {
  id: "t1",
  name: "Галина Николаевна",
  courses: {
      5: {
          id: 5,
          title: "Первая",
          role: "teacher",
          level: "senior"
      },
      1: {
          ...student1.courses[1],
          role: "teacher"
      }
  }


}
const d1: Director = {
  id: "d1",
  name: "d1",
  students: {
      "s1": student1,
      "s2": {
          id: "s2",
          name: "s2",
          courses: {}
      }
  },
  teachers: {
      "t1": {
          ...teacher1,
          rate: 3,
      },
      "t2": {
          id: "t2",
          name: "t2",
          courses: {},
          rate: 5
      }
  }
}