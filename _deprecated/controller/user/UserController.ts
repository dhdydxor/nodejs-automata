import { NextFunction, Request, Response } from "express";

export class UserController
{
    userRepository: any = {};

    async list(request: Request, response: Response, next: NextFunction)
    {
        return this.userRepository.createQueryBuilder().where("")
    }

    async one(request: Request, response: Response, next: NextFunction)
    {
        return this.userRepository.findOne(request.params.id);
    }

    async put(request: Request, response: Response, next: NextFunction)
    {
        return this.userRepository.save(request.body);
    }

    async delete(request: Request, response: Response, next: NextFunction)
    {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

    async patch(request: Request, response: Response, next: NextFunction)
    {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}