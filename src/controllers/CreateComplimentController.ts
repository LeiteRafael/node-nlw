import { Request, Response } from "express";
import { Compliment } from "../models/Compliment";
import { CreateComplimentService } from "../service/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_sender, user_receiver, message } = request.body;

    const createComplimentService = new CreateComplimentService();

    const conpliment = await createComplimentService.execute({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    return response.json(conpliment);
  }
}
export { CreateComplimentController };
