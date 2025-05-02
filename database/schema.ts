import { pgTable, date, pgEnum, timestamp } from 'drizzle-orm/pg-core';
import { varchar, uuid, integer, text } from 'drizzle-orm/pg-core';

export const STATUS_ENUM = pgEnum('status', [
  'PENDING',
  'APPROVED',
  'REJECTED',
]);
export const ROLE_ENUM = pgEnum('role', ['USER', 'ADMIN']);
export const BORROW_STATUS_ENUM = pgEnum('borrow_status', [
  'BORROWED',
  'RETURNED',
]);

export const users = pgTable('users', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar('full_name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  profileImage: text('profile_image').notNull(),
  status: STATUS_ENUM('status').default('PENDING'),
  role: ROLE_ENUM('role').default('USER'),
  lastActivityDate: date('last_activity_date').defaultNow(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
  }).defaultNow(),
});

export const clothing = pgTable('clothing', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  brand: varchar('brand', { length: 255 }).notNull(),
  size: text('size').notNull(),
  style: text('style').notNull(),
  rating: integer('rating').notNull(),
  coverUrl: text('cover_url').notNull(),
  color: varchar('color').notNull(),
  description: text('description').notNull(),
  totalStock: integer('total_stock').notNull().default(1),
  availableStock: integer('available_stock').notNull().default(0),
  videoUrl: text('video_url').notNull(),
  summary: varchar('summary').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});
