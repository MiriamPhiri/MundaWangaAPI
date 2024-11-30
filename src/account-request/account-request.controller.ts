import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountRequestService } from './account-request.service';
import { AccountRequestDto } from './account-request.dto';

@Controller('account-request')
export class AccountRequestController {

    constructor(private accountRequestService: AccountRequestService){}

    @Post()
    createAccountRequest(
        @Body() accountRequestDto: AccountRequestDto
    ){
        return this.accountRequestService.createAccountRequest(accountRequestDto);
    }

    @Get()
    getFeedBack(){
        return this.accountRequestService.findAllAccountRequests();
    }

}
