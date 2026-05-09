import { relations } from "drizzle-orm";
import { users, accounts, sessions, verificationTokens } from "./auth";
import { expertProfiles } from "./experts";
import { programs, deployments } from "./projects";
import { posts, videos } from "./content";
import { jobPostings, applications } from "./jobs";

// Export all schemas
export * from "./auth";
export * from "./experts";
export * from "./projects";
export * from "./content";
export * from "./jobs";

// Relations
export const usersRelations = relations(users, ({ one, many }) => ({
  expertProfile: one(expertProfiles, {
    fields: [users.id],
    references: [expertProfiles.userId],
  }),
  posts: many(posts),
  videos: many(videos),
  applications: many(applications),
}));

export const expertProfilesRelations = relations(expertProfiles, ({ one, many }) => ({
  user: one(users, {
    fields: [expertProfiles.userId],
    references: [users.id],
  }),
  deployments: many(deployments),
}));

export const programsRelations = relations(programs, ({ many }) => ({
  deployments: many(deployments),
}));

export const deploymentsRelations = relations(deployments, ({ one }) => ({
  program: one(programs, {
    fields: [deployments.programId],
    references: [programs.id],
  }),
  expert: one(expertProfiles, {
    fields: [deployments.expertId],
    references: [expertProfiles.id],
  }),
}));

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));

export const videosRelations = relations(videos, ({ one }) => ({
  author: one(users, {
    fields: [videos.authorId],
    references: [users.id],
  }),
}));

export const jobPostingsRelations = relations(jobPostings, ({ many }) => ({
  applications: many(applications),
}));

export const applicationsRelations = relations(applications, ({ one }) => ({
  jobPosting: one(jobPostings, {
    fields: [applications.jobPostingId],
    references: [jobPostings.id],
  }),
  applicant: one(users, {
    fields: [applications.applicantId],
    references: [users.id],
  }),
}));
