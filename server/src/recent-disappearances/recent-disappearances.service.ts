import { Injectable } from '@nestjs/common';
import { RecentDisappearances } from './recent-disappearances.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RecentDisappearancesService {
  constructor(
    @InjectModel(RecentDisappearances)
    private recentDisappearancesModel: typeof RecentDisappearances,
  ) {}

  async findAll() {
    return await this.recentDisappearancesModel.findAll();
  }

  async founded(): Promise<{ count: number; rows: RecentDisappearances[] }> {
    return await this.recentDisappearancesModel.findAndCountAll({
      where: { status: true },
    });
  }
  async notFounded(): Promise<{ count: number; rows: RecentDisappearances[] }> {
    return await this.recentDisappearancesModel.findAndCountAll({
      where: { status: false },
    });
  }

  // create(createRecentDisappearanceDto: CreateRecentDisappearanceDto) {
  //   return 'This action adds a new recentDisappearance';
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} recentDisappearance`;
  // }

  // update(
  //   id: number,
  //   updateRecentDisappearanceDto: UpdateRecentDisappearanceDto,
  // ) {
  //   return `This action updates a #${id} recentDisappearance`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} recentDisappearance`;
  // }
}
