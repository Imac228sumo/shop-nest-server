import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Products extends Model {
  @Column
  boiler_manufacturer: string; // производитель котлов

  @Column({ defaultValue: 0 })
  price: number;  // цена

  @Column
  parts_manufacturer: string;  // производитель запчастей

  @Column
  vendor_code: string;  // артикул

  @Column
  name: string;  // название товара

  @Column
  description: string;  // описание

  @Column
  images: string;  // фото

  @Column({ defaultValue: 0 })
  in_stock: number;  // количество товаров на складе

  @Column({ defaultValue: false })
  bestseller: boolean; // бесцеллеры

  @Column({ defaultValue: false })
  new: boolean;  // новинки

  @Column
  popularity: number;  // популярность

  @Column
  compatibility: string;  // совместимость
}