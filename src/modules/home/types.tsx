export namespace IEntity {
  export interface Product {
    id: number;
    images: Images[];
    name: string;
    price: number;
    quantity: number;
    stars?: Stars;
    category?: number;
    slug?: string;
    description?: string;
    discount?: Discount;
  }
  export interface Category {
    id: number;
    category_name: string;
    level: number;
    lft: number;
    parent: string;
    rght: string;
    slug: string;
    tree_id: number;
  }
  interface Discount {
    id: number;
    dis_percentage: number;
    end_time: string;
  }
  interface Stars {
    id: number;
    product: number;
    stars: number;
  }
  interface Images {
    id: number;
    images: string;
    product: number;
  }
  export interface Banner {
    created_at: string;
    end_date: null | string;
    id: number;
    image: string;
    product: number;
    text: string;
    updated_at: string;
  }

  export interface Basket {
    id: number;
    product: Product;
    quantity: number;
    user: number;
    sum: string;
  }
}
