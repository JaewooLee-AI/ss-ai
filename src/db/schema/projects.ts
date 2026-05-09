import {
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { expertProfiles } from "./experts";

export const programs = pgTable("program", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status", { enum: ["draft", "active", "completed"] }).default("draft"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const deployments = pgTable("deployment", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  programId: text("program_id")
    .notNull()
    .references(() => programs.id, { onDelete: "cascade" }),
  expertId: text("expert_id")
    .notNull()
    .references(() => expertProfiles.id),
  status: text("status", { enum: ["pending", "ongoing", "completed"] }).default("pending"),
  startDate: timestamp("start_date", { mode: "date" }),
  endDate: timestamp("end_date", { mode: "date" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
