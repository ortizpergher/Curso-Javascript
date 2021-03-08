import StudentGrade from '../models/StudentGrade';

class StudentGradeController {
  async index(request, response) {
    const { studentId } = request.params;
    const result = await StudentGrade.findAll({
      where: {
        student_id: studentId,
      },
    });

    return response.json(result);
  }

  async show(request, response) {
    const { studentId, gradeId } = request.params;
    return response.json(
      await StudentGrade.findByPk(gradeId, {
        where: {
          student_id: studentId,
        },
      })
    );
  }

  async store(request, response) {
    const { studentId } = request.params;
    const { grade, description, subjectId } = request.body;
    const insert = await StudentGrade.create({
      grade,
      description,
      student_id: studentId,
      subject_id: subjectId,
    });

    return response.json(insert);
  }

  async update(request, response) {
    const { studentId, gradeId } = request.params;
    const { grade, description, subjectId } = request.body;
    return response.json(
      await StudentGrade.update(
        { grade, description, subject_id: subjectId },
        {
          where: {
            id: gradeId,
            student_id: studentId,
          },
          returning: true,
        }
      )
    );
  }

  async delete(request, response) {
    const { studentId, gradeId } = request.params;
    await StudentGrade.destroy({
      where: {
        student_id: studentId,
        id: gradeId,
      },
    });

    return response.sendStatus(202);
  }
}

export default new StudentGradeController();
