import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';
import { InjectRepository } from '@nestjs/typeorm';

export type TFeedback = {
    user_id: number,
    message: string,
}

@Injectable()
export class FeedbackService {
    constructor(
        @InjectRepository(Feedback)
        private feedbackRepository: Repository<Feedback>){}

    createFeedback(feedback: TFeedback): Promise<Feedback | null>{
        return this.feedbackRepository.save(feedback);
    }
}
