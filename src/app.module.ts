import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
    }),
    TasksModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
