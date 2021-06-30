// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Product, Order } = initSchema(schema);

export {
  Category,
  Product,
  Order
};