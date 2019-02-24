import { ApiModelProperty } from '@nestjs/swagger';

export class HelloDto {
  @ApiModelProperty({
    required: true,
    example: 'piisuke2',
  })
  readonly name: string;

  @ApiModelProperty({
    required: true,
    example: 38,
  })
  readonly age: number;
}
