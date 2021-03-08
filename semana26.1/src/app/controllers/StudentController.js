import { Op } from 'sequelize';
import Student from '../models/Student';
import StudentGrade from '../models/StudentGrade';

class StudentController {
  async index(request, response) {
    // return response.json(await Student.findAll());
    /* const result = await Student.findAll({
      attributes: ['name', 'age'],
      order: [
        ['name', 'DESC'],
        ['age', 'ASC'],
      ],
    }); */

    // const result = await Student.findAll({
    //   attributes: ['name', 'age'],
    //   where: {
    //     [Op.and]: [{ status: true}, { pwd: false }],
    //   },
    //   order: [
    //     ['name', 'DESC'],
    //     ['age', 'ASC'],
    //   ],
    //   group: 'name',
    // });

    // const result = await Student.findAll({
    //   include: [
    //     {
    //       model: StudentGrade,
    //       as: 'students_grades',
    //       attributes: ['description', 'grade'],
    //     },
    //   ],
    // });

    const result = await Student.findAndCountAll({
      attributes: ['name', 'age'],
      limit: 2,
      offset: 1,
    });

    return response.json(result);
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json(await Student.findByPk(id));

    // const student = await Student.findOne({
    //   where: {
    //     name,
    //   }
    // });
  }

  async store(request, response) {
    const { name, age, schoolClassId, birthdate } = request.body;

    /*const user = Student.build({ name, age, school_class_id : SchoolClassId, birthdate});

    await user.save(); */

    const student = await Student.create({ 
      name, 
      age, 
      school_class_id : schoolClassId, 
      birthdate
    });

    return response.json(student);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, age, schoolClassId, birthdate } = request.body;

    const student = await Student.findByPk(id);

    student.name = name;
    student.age = age;
    student.school_class_id = schoolClassId;
    student.birthdate = birthdate;

    student.save();

    /*
    const student = await Student.update(
      {name, age, school_class_id: schoolClassId, birthdate},
      {
        where: {
          id,
        },
        returning: true
      }
    ); */

    return response.json(student);
  }

  async delete(request, response) {
    const { id } = request.params;
    /*
    const student = await Student.findByPk(id);

    await student.destroy();
    */
    await Student.destroy({
      where: {
        id,
      }
    });
    return response.sendStatus(202);
  }
}

export default new StudentController();
