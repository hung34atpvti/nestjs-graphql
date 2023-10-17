export interface Recipe {
  id: number;

  name: string;

  ingredients: string;

  instruction: string;

  image: string;

  createdAt: Date;

  updatedAt: Date;
}
