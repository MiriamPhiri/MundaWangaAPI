import { Module } from '@nestjs/common';
import { AccountRequestService } from './account-request.service';
import { AccountRequestController } from './account-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRequest } from './account-request.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule,TypeOrmModule.forFeature([AccountRequest])],
  providers: [AccountRequestService],
  controllers: [AccountRequestController]
})
export class AccountRequestModule {}
