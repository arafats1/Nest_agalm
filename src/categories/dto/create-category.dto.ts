import { ApiProperty} from "@nestjs/swagger";


export class CreateCategoryDto {
    @ApiProperty()
    image: string;

    @ApiProperty()
    description: string;

}


