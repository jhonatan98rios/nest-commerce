import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {

  @Prop()
  slug: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  images: { src: string, alt: string, title: string }[];

  @Prop()
  price: number;

  @Prop()
  category: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
