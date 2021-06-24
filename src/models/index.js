// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Order, Product } = initSchema(schema);

export {
  Category,
  Order,
  Product
};