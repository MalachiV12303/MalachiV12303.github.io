import { pgTable, text, char, varchar, numeric, integer } from 'drizzle-orm/pg-core'

export type SelectCamera = typeof cameras.$inferSelect;
export type Camera = Pick<SelectCamera, 'id' | 'name' | 'type' | 'brand' | 'price'  | 'storage' | 'mount' |'description' | 'megapixels' | 'res' | 'shutter' >;
export type SelectLense = typeof lenses.$inferSelect;
export type Lense = Pick<SelectLense, 'id' | 'name' | 'type' | 'brand' | 'price' | 'mount' | 'maxap' | 'minfl' | 'maxfl'>;


export const lenses = pgTable("lenses", {
	id: char({ length: 8 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 20 }).notNull(),
	brand: varchar({ length: 20 }).notNull(),
	price: numeric({ precision: 19, scale:  2 }).$type<number>().notNull(),
	maxap: text().notNull(),
	minfl: integer().notNull(),
	maxfl: integer().notNull(),
	mount: text().array().notNull(),
});

export const cameras = pgTable("cameras", {
	id: char({ length: 8 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 20 }).notNull(),
	brand: varchar({ length: 20 }).notNull(),
	price: numeric({ precision: 19, scale:  2 }).$type<number>().notNull(),
	shutter: text(),
	description: text(),
	res: integer().default(0).notNull(),
	megapixels: numeric({ precision: 3, scale:  1 }).default('0').notNull(),
	storage: text().array(),
	mount: text().array(),
});
