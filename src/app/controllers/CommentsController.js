import Comments from '../models/Comments';

class CommentsController {
  async index(request, response) {
    return response.json(await Comments.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await Comments.findOne({ where: { id } }));
  }

  async store(request, response) {
    const { name, comment } = request.body;
    if (name === '' || comment === '') {
      return response.json({ message: 'Campos inválidos' });
    }
    return response.json(await Comments.create({ name, comment }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, comment } = request.body;
    return response.json(
      await Comments.create(
        { name, comment },
        {
          where: { id },
          returning: true,
        }
      )
    );
  }

  async delete(request, response) {
    const { id } = request.params;
    await Comments.destroy({ where: { id } });
    response.sendStatus(202);
  }
}

export default new CommentsController();
