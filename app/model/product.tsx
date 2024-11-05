import { Image, Product } from "~/api/products";

export class ImageDTO {
  url: string;

  constructor(url: string) {
    this.url = `${process.env.STRAPI_URL}${url}`;
  }

  static fromJSON(image: Image): ImageDTO {
    return new ImageDTO(image.url);
  }
}

export class ProductDTO {
  id: number;
  title: string;
  price: number;
  description: string;
  images?: ImageDTO[];

  constructor(
    id: number,
    title: string,
    price: number,
    description: string,
    images?: ImageDTO[],
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.images = images;
  }

  static fromJSON(product: Product): ProductDTO {
    let images = product.images?.map((image) => ImageDTO.fromJSON(image));

    return new ProductDTO(
      product.id,
      product.title,
      product.price,
      product.description,
      images,
    );
  }
}
