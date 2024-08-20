import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./connection";

async function main() {
    console.log("Migrating database...");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("Database migrated successfully!");
    process.exit(0);
}

main().catch((err) => {
    console.error(err);
    process.exit(0);
});
