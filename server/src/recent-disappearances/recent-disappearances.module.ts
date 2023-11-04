import { Module } from '@nestjs/common';
import { RecentDisappearancesService } from './recent-disappearances.service';
import { RecentDisappearancesController } from './recent-disappearances.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RecentDisappearances } from './recent-disappearances.model';

@Module({
  imports: [SequelizeModule.forFeature([RecentDisappearances])],
  controllers: [RecentDisappearancesController],
  providers: [RecentDisappearancesService],
  exports: [RecentDisappearancesService],
})
export class RecentDisappearancesModule {}
