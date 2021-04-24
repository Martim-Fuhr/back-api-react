import Contact from '../models/Contact';

class ContactController {
  async index(request, response) {
    return response.json(await Contact.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await Contact.findOne({ where: { id } }));
  }

  async store(request, response) {
    const { name, phone, email, comment } = request.body;
    return response.json(await Contact.create({ name, phone, email, comment }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, phone, email, comment } = request.body;
    return response.json(
      await Contact.create(
        { name, phone, email, comment },
        {
          where: { id },
          returning: true,
        }
      )
    );
  }

  async delete(request, response) {
    const { id } = request.params;
    await Contact.destroy({ where: { id } });
    response.sendStatus(202);
  }
}

export default new ContactController();
