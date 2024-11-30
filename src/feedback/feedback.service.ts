import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

export type TFeedback = {
    user: {
        username: string
    },
    message: string,
}

@Injectable()
export class FeedbackService {
    constructor(
        @InjectRepository(Feedback)
        private feedbackRepository: Repository<Feedback>,
    private userService: UserService){}

    async createFeedback(feedback: TFeedback): Promise<Feedback | null>{
        const {user , ...others} = feedback;
        const us = await this.userService.findUserByUsername(feedback.user.username)
        return this.feedbackRepository.save({...feedback, user: us});
    }

    async findAllFeedBack(){
    
    const requestedData = [];

    const data = await this.feedbackRepository.find({
            relations:{
                user: true
            }
        });

        data.map((value, index)=>{
            const {user, ...others} = value;
            requestedData.push({...others, username: user.username});
        });

        return requestedData;
    }

}
