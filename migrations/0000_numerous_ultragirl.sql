CREATE TABLE IF NOT EXISTS "accounts" (
	"id" text PRIMARY KEY NOT NULL,
	"plain_id" text,
	"name" text NOT NULL,
	"user_id" text NOT NULL
);
