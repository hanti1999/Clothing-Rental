export const navigationLinks = [
  {
    href: '/clothing',
    label: 'Quần áo',
  },

  {
    img: '/icons/user.svg',
    selectedImg: '/icons/user-fill.svg',
    href: '/my-profile',
    label: 'My Profile',
  },
];

export const adminSideBarLinks = [
  {
    img: '/icons/admin/home.svg',
    route: '/admin',
    text: 'Home',
  },
  {
    img: '/icons/admin/users.svg',
    route: '/admin/users',
    text: 'All Users',
  },
  {
    img: '/icons/admin/book.svg',
    route: '/admin/books',
    text: 'All Books',
  },
  {
    img: '/icons/admin/bookmark.svg',
    route: '/admin/book-requests',
    text: 'Borrow Requests',
  },
  {
    img: '/icons/admin/user.svg',
    route: '/admin/account-requests',
    text: 'Account Requests',
  },
];

export const FIELD_NAMES = {
  fullName: 'Full name',
  email: 'Email',
  password: 'Password',
};

export const FIELD_TYPES = {
  fullName: 'text',
  email: 'email',
  password: 'password',
};

export const sampleClothing = [
  {
    id: 1,
    title: 'The Midnight Library',
    brand: 'Matt Haig',
    style: 'Fantasy / Fiction',
    rating: 4.6,
    total_stock: 20,
    available_stock: 10,
    description:
      'A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.',
    color: '#1c1f40',
    cover: 'https://m.media-amazon.com/images/I/81J6APjwxlL.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    brand: 'James Clear',
    style: 'Self-Help / Productivity',
    rating: 4.9,
    total_stock: 99,
    available_stock: 50,
    description:
      'A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.',
    color: '#fffdf6',
    cover: 'https://m.media-amazon.com/images/I/81F90H7hnML.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.',
  },
  {
    id: 3,
    title: "You Don't Know JS: Scope & Closures",
    brand: 'Kyle Simpson',
    style: 'Computer Science / JavaScript',
    rating: 4.7,
    total_stock: 9,
    available_stock: 5,
    description:
      'An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.',
    color: '#f8e036',
    cover:
      'https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.',
  },
  {
    id: 4,
    title: 'The Alchemist',
    brand: 'Paulo Coelho',
    style: 'Philosophy / Adventure',
    rating: 4.5,
    total_stock: 78,
    available_stock: 50,
    description:
      'A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.',
    color: '#ed6322',
    cover:
      'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.',
  },
  {
    id: 5,
    title: 'Deep Work',
    brand: 'Cal Newport',
    style: 'Self-Help / Productivity',
    rating: 4.7,
    total_stock: 23,
    available_stock: 23,
    description:
      'Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.',
    color: '#ffffff',
    cover: 'https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.',
  },
  {
    id: 6,
    title: 'Clean Code',
    brand: 'Robert C. Martin',
    style: 'Computer Science / Programming',
    rating: 4.8,
    total_stock: 56,
    available_stock: 56,
    description:
      'A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.',
    color: '#080c0d',
    cover:
      'https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.',
  },
  {
    id: 7,
    title: 'The Pragmatic Programmer',
    brand: 'Andrew Hunt, David Thomas',
    style: 'Computer Science / Programming',
    rating: 4.8,
    total_stock: 25,
    available_stock: 3,
    description:
      'A timeless guide for developers to hone their skills and improve their programming practices.',
    color: '#100f15',
    cover:
      'https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'A timeless guide for developers to hone their skills and improve their programming practices.',
  },
  {
    id: 8,
    title: 'The Psychology of Money',
    brand: 'Morgan Housel',
    style: 'Finance / Self-Help',
    rating: 4.8,
    total_stock: 10,
    available_stock: 5,
    description:
      'Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.',
    color: '#ffffff',
    cover:
      'https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.',
  },
];
