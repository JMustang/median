import { PartialType } from '@nestjs/swagger';
import { CreateArticleRequest } from './create-article.request';

export class UpdateArticleRequest extends PartialType(CreateArticleRequest) {}
