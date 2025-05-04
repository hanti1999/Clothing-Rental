interface IClothing {
  id: number;
  title: string;
  brand: string;
  style: string;
  rating: number;
  totalStock: number;
  availableStock: number;
  description: string;
  color: string;
  size: string;
  coverUrl: string;
  videoUrl: string;
  summary: string;
  isLoaned?: boolean;
  createdAt?: Date | null;
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  profileImage: string;
}
