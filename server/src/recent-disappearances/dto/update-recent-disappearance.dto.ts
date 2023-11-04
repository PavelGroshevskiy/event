import { PartialType } from '@nestjs/mapped-types';
import { CreateRecentDisappearanceDto } from './create-recent-disappearance.dto';

export class UpdateRecentDisappearanceDto extends PartialType(CreateRecentDisappearanceDto) {}
