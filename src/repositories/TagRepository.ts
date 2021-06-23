import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../models/Tag";

@EntityRepository(Tag)
class TagRepository extends Repository<Tag> {

} export { TagRepository };