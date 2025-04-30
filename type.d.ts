interface IClothing {
  id: number;
  title: string;
  brand: string;
  style: string;
  rating: number;
  total_stock: number;
  available_stock: number;
  description: string;
  color: string;
  cover: string;
  video: string;
  summary: string;
  isLoaned?: boolean;
}
