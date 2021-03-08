import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Holiday from '../app/models/Holidays';
import PhoneType from '../app/models/PhoneType';
import SchoolClass from '../app/models/SchoolClass';
import Student from '../app/models/Student';
import StudentGrade from '../app/models/StudentGrade';
import StudentPhone from '../app/models/StudentPhone';
import Subject from '../app/models/Subject';
import Teacher from '../app/models/Teacher';

const models = [
  Holiday,
  PhoneType,
  SchoolClass,
  Student,
  StudentGrade,
  StudentPhone,
  Subject,
  Teacher,
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
