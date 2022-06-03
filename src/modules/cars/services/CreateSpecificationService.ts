import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest) {
        const specificationAlreadyExistis =
            this.specificationsRepository.findByName(name);

        if (specificationAlreadyExistis) {
            throw new Error("Specification Already Exists");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationService };
