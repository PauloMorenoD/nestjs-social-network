import { PartialType } from '@nestjs/mapped-types';
import { CreatePublishmentDto } from './create-publishment.dto';

export class UpdatePublishmentDto extends PartialType(CreatePublishmentDto) {}
