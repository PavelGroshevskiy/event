import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class RecentDisappearances extends Model {
  @Column
  who_missing: string;

  @Column
  title: string;

  @Column
  status: boolean;

  @Column
  images: string;
}
