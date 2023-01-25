import { Module } from '@nestjs/common';
import { ArticlesService } from '../services/articles.service';
import { ArticlesController } from '../http/controllers/articles.controller';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [PrismaModule],
})
export class ArticlesModule {}
