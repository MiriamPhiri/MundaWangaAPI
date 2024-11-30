import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountRequest } from './account-request.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AccountRequestService {
    constructor(
        @InjectRepository(AccountRequest)
        private accoountRequestRepository: Repository<AccountRequest>,
        private userService: UserService,
    
    ){}

    async createAccountRequest(request: {request: 'Account-Deletion' | 'Password-Reset', user: {username: string}}): Promise<AccountRequest | null>{
        const user = await this.userService.findUserByUsernameNoPassword(request.user.username);
        return this.accoountRequestRepository.save({...request, user});
    }

    async findAllAccountRequests(){
    
    const requestedData = [];

    const data = await this.accoountRequestRepository.find({
            relations:{
                user: true
            }
        });

        data.map((value, index)=>{
            const {user, ...others} = value;
            requestedData.push({...others, username: user.username, user_id: user.id});
        });

        return requestedData;
    }

    async removeRequest(id: number){
        return this.accoountRequestRepository.delete(id);
    }

    async updateRequest(id, request: {request: 'Account-Deletion' | 'Password-Reset', user: {username: string}, fulfilled?: boolean}){
        return this.accoountRequestRepository.update(id,request);
    }
}
