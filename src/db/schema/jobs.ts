import {
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "./auth";

export const jobPostings = pgTable("job_posting", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  companyName: text("company_name").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  requirements: text("requirements"),
  status: text("status", { enum: ["open", "closed"] }).default("open"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const applications = pgTable("application", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  jobPostingId: text("job_posting_id")
    .notNull()
    .references(() => jobPostings.id, { onDelete: "cascade" }),
  applicantId: text("applicant_id")
    .notNull()
    .references(() => users.id),
  status: text("status", { enum: ["submitted", "reviewing", "accepted", "rejected"] }).default("submitted"),
  resumeUrl: text("resume_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
