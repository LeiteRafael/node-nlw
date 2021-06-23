import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";

class CreateTagService {

    async execute(name: string) {
        const tagRepository = getCustomRepository(TagRepository);

        if (!name) {
            throw new Error("Name incorrect");
        }

        const tagsAlreadyExists = await tagRepository.findOne({
            name
        });

        if (tagsAlreadyExists) {
            throw new Error("Tag already exists");
        }

        const tag = tagRepository.create({
            name,
        });

        await tagRepository.save(tag);

        return tag;

    }
} export {CreateTagService}