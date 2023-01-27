import { Injectable } from '@nestjs/common';
import { CreateArticleRequest } from '../http/requests/create-article.request';
import { UpdateArticleRequest } from '../http/requests/update-article.request';
import { PrismaService } from './prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}
  create(createArticleDto: CreateArticleRequest) {
    return this.prisma.article.create({ data: createArticleDto });
  }

  findDrafts() {
    return this.prisma.article.findMany({ where: { publishd: false } });
  }

  findAll() {
    return this.prisma.article.findMany({ where: { publishd: true } });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id } });
  }

  update(id: number, updateArticleDto: UpdateArticleRequest) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id } });
  }
}
