CREATE TABLE arm
(
  id bigserial NOT NULL,
  class_id bigserial NOT NULL,
  arm varchar(10) NOT NULL
);


COMMENT ON TABLE arm IS E'an arm of a given arm';

ALTER TABLE arm ADD CONSTRAINT pk_arm
  PRIMARY KEY (id);

CREATE TABLE class
(
  id bigserial NOT NULL,
  class_name varchar(30) NOT NULL
);


COMMENT ON TABLE class IS E'different level in the school';

ALTER TABLE class ADD CONSTRAINT pk_class
  PRIMARY KEY (id);

CREATE TABLE class_time_table
(
  id bigint NOT NULL,
  session_id bigserial NOT NULL,
  class_arm_id bigserial NOT NULL,
  time_table jsonb NOT NULL
);

ALTER TABLE class_time_table ADD CONSTRAINT pk_class_time_table
  PRIMARY KEY (id);

CREATE TABLE department
(
  id bigserial NOT NULL,
  department_name varchar(50) NOT NULL,
  head_of_department bigint
);


COMMENT ON TABLE department IS E'Teachersbelong to a department';

ALTER TABLE department ADD CONSTRAINT pk_department
  PRIMARY KEY (id);

CREATE TABLE periods
(
  id bigint NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL
);

ALTER TABLE periods ADD CONSTRAINT pk_periods
  PRIMARY KEY (id);

CREATE TABLE session
(
  id bigserial NOT NULL,
  session varchar(10) NOT NULL,
  active boolean DEFAULT 'F' NOT NULL
);


COMMENT ON TABLE session IS E'school session (possibly yearly)';

ALTER TABLE session ADD CONSTRAINT pk_session
  PRIMARY KEY (id);

CREATE TABLE students
(
  email varchar(50) NOT NULL,
  student_id varchar(20) NOT NULL,
  last_name varchar(50) NOT NULL,
  middle_name varchar(50),
  first_name varchar(50) NOT NULL,
  gender varchar(7) NOT NULL,
  dob date NOT NULL,
  blood_group varchar(3),
  nationality varchar(50) NOT NULL,
  language varchar(20) NOT NULL,
  religion varchar(20) NOT NULL,
  student_category varchar(10) NOT NULL,
  student_type varchar(10) NOT NULL,
  address_1 varchar(100) NOT NULL,
  address_2 varchar(100),
  city varchar(20) NOT NULL,
  state varchar(20) NOT NULL,
  country varchar(20) NOT NULL,
  phone varchar(15) NOT NULL,
  phone_2 varchar(15)
);


COMMENT ON TABLE students IS E'student information';


COMMENT ON COLUMN students.student_category IS E'tells if the student is a TRANSFER student or NEW student';


COMMENT ON COLUMN students.student_type IS E'tells if student is BORDER or DAY student';

ALTER TABLE students ADD CONSTRAINT pk_students
  PRIMARY KEY (email);

CREATE TABLE subject
(
  id bigserial NOT NULL,
  category_id bigint NOT NULL,
  subject_name varchar(50) NOT NULL
);


COMMENT ON TABLE subject IS E'list of subjects that belogs to a category';

ALTER TABLE subject ADD CONSTRAINT pk_subject
  PRIMARY KEY (id);

CREATE TABLE subject_category
(
  id bigserial NOT NULL,
  category_name varchar(50) NOT NULL
);


COMMENT ON TABLE subject_category IS E'Subjects are placed into category, eg physics belogs to \nscience and maths belogs  to  general';

ALTER TABLE subject_category ADD CONSTRAINT pk_subject_category
  PRIMARY KEY (id);

CREATE TABLE subject_teachers
(
  teacher_id varchar(50) NOT NULL,
  subject_id bigserial NOT NULL,
  description text
);


COMMENT ON TABLE subject_teachers IS E'many to many(n:m) cardinality between subjects and \nteachers can only be implemeented through a seperate \ntable subject_teachers table';

ALTER TABLE subject_teachers ADD CONSTRAINT pk_subject_teachers
  PRIMARY KEY (teacher_id, subject_id);

CREATE TABLE teachers
(
  email varchar(50) NOT NULL,
  teacher_id varchar(20) NOT NULL,
  last_name varchar(50) NOT NULL,
  middle_name varchar(50),
  first_name varchar(50) NOT NULL,
  gender char(7) NOT NULL,
  dob date NOT NULL,
  department bigserial NOT NULL,
  level varchar(30) NOT NULL,
  qualification varchar(50) NOT NULL,
  total_experience varchar(15) NOT NULL,
  marital_status varchar(10) NOT NULL,
  number_of_children integer DEFAULT 0,
  father_name varchar(100) NOT NULL,
  mother_name varchar(100) NOT NULL,
  spouse_name varchar(100),
  blood_group varchar(3),
  nationality varchar(50) NOT NULL,
  religion varchar(20) NOT NULL,
  address_1 varchar(100) NOT NULL,
  address_2 varchar(100),
  phone varchar(15) NOT NULL,
  phone_2 varchar(15),
  city varchar(20) NOT NULL,
  state varchar(20) NOT NULL,
  country varchar(50) NOT NULL
);


COMMENT ON TABLE teachers IS E'school teacchers data';

ALTER TABLE teachers ADD CONSTRAINT pk_teachers
  PRIMARY KEY (email);

CREATE TABLE users
(
  email varchar(50) NOT NULL,
  password text,
  role varchar(20) NOT NULL,
  active boolean DEFAULT 'F',
  socket_login jsonb
);

ALTER TABLE users ADD CONSTRAINT pk_user
  PRIMARY KEY (email);

ALTER TABLE arm ADD CONSTRAINT fk_arm_
  FOREIGN KEY (class_id) REFERENCES class (id);

ALTER TABLE class_time_table ADD CONSTRAINT fk_class_time_table_
  FOREIGN KEY (session_id) REFERENCES session (id);

ALTER TABLE class_time_table ADD CONSTRAINT fk_class_time_table_2
  FOREIGN KEY (class_arm_id) REFERENCES arm (id);

ALTER TABLE students ADD CONSTRAINT fk_students_
  FOREIGN KEY (email) REFERENCES users (email);

ALTER TABLE subject ADD CONSTRAINT fk_subject_
  FOREIGN KEY (category_id) REFERENCES subject_category (id);

ALTER TABLE subject_teachers ADD CONSTRAINT fk_subject_teachers_
  FOREIGN KEY (subject_id) REFERENCES subject (id);

ALTER TABLE subject_teachers ADD CONSTRAINT fk_subject_teachers_2
  FOREIGN KEY (teacher_id) REFERENCES teachers (email);

ALTER TABLE teachers ADD CONSTRAINT fk_teachers_
  FOREIGN KEY (email) REFERENCES users (email);

ALTER TABLE teachers ADD CONSTRAINT fk_teachers_2
  FOREIGN KEY (department) REFERENCES department (id);

CREATE UNIQUE INDEX ix_teachers_
  ON teachers (teacher_id);


COMMENT ON INDEX ix_teachers_ IS E'should be unique with regular pattern';

