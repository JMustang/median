import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleRequest {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false, default: false })
  publishd?: boolean = false;
}
