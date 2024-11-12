import { Body, Controller, Post } from '@nestjs/common';
import { FeedbackService, TFeedback } from './feedback.service';

@Controller('feedback')
export class FeedbackController {

    constructor(private feedbackService: FeedbackService){}

    @Post()
    createFeedback(
        @Body() feedbackDto: TFeedback
    ){
        return this.feedbackService.createFeedback(feedbackDto);
    }
}
