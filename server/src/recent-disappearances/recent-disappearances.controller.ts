import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecentDisappearancesService } from './recent-disappearances.service';
import { CreateRecentDisappearanceDto } from './dto/create-recent-disappearance.dto';
import { UpdateRecentDisappearanceDto } from './dto/update-recent-disappearance.dto';
import { RecentDisappearances } from './recent-disappearances.model';

@Controller('recent-disappearances')
export class RecentDisappearancesController {
  constructor(
    private readonly recentDisappearancesService: RecentDisappearancesService,
  ) {}

  @Get()
  findAll() {
    return this.recentDisappearancesService.findAll();
  }

  @Get('founded')
  getFounded() {
    return this.recentDisappearancesService.founded();
  }
  @Get('not-founded')
  getNotFounded() {
    return this.recentDisappearancesService.notFounded();
  }

  // @Post()
  // create(@Body() createRecentDisappearanceDto: CreateRecentDisappearanceDto) {
  //   return this.recentDisappearancesService.create(createRecentDisappearanceDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.recentDisappearancesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRecentDisappearanceDto: UpdateRecentDisappearanceDto) {
  //   return this.recentDisappearancesService.update(+id, updateRecentDisappearanceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.recentDisappearancesService.remove(+id);
  // }
}
