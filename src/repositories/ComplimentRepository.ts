import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../models/Compliment";

@EntityRepository(Compliment)
class ComplimentRepository extends Repository<Compliment> {}

export { ComplimentRepository };
