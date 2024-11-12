import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
TypeOrmModule.forRootAsync({
  imports:[ConfigModule],
  useFactory: async (configService: ConfigService)=>({
      type: 'postgres',
      host: configService.get<string>('DATABASE_HOST'),
      port: configService.get<number>('DATABASE_PORT'),
      username: configService.get<string>('DATABASE_USERNAME'),
      password: configService.get<string>('DATABASE_PASSWORD'),
      database: configService.get<string>('DATABASE_NAME'),
      autoLoadEntities: true,
      synchronize: true,}),
      inject: [ConfigService]
}),
UserModule,
AuthModule,
FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
