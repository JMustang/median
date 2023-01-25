import { Module } from '@nestjs/common';
import { AppController } from './http/controllers/app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma.module';
import { ArticlesModule } from './modules/articles.module';

@Module({
  imports: [PrismaModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
