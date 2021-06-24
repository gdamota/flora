import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Category {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class Order {
  readonly id: string;
  readonly products: string[];
  readonly price: number;
  readonly datetime: string;
  readonly status: string;
  readonly address: string;
  readonly zip_code: string;
  readonly city: string;
  readonly name: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly materials: string[];
  readonly cost: number;
  readonly price: number;
  readonly quantity?: number;
  readonly category?: string;
  readonly Category?: Category;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}