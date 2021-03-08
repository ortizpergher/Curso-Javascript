import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Subject from '../app/models/Subject';
import PhoneType from '../app/models/PhoneType';
import Student from '../app/models/Student';
import Teacher from '../app/models/Teacher';
import SchoolClass from '../app/models/SchoolClass';
import StudentGrade from '../app/models/StudentGrade';
import StudentPhone from '../app/models/StudentPhone';

const models = [
  Subject,
  Student,
  PhoneType,
  Teacher,
  SchoolClass,
  StudentGrade,
  StudentPhone,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
