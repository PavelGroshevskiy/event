import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeConfigService } from './config/sequelizeConfigService';
import { databaseConfig } from './config/configuration';
import { RecentDisappearancesModule } from './recent-disappearances/recent-disappearances.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    ConfigModule.forRoot({ load: [databaseConfig] }),
    RecentDisappearancesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
