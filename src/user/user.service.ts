import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

type TUser = {
    name: string,
    dob: string,
    username: string,
    email: string,
    phone_number: number,
}

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    createUser(user: TUser): Promise<User | null>{
        return this.userRepository.save(user);
    }
}
