import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({ path: ".env" });
const databaseURL =
  process.env.DATABASE_URL ??
  (function () {
    console.warn("🔴 Cannot find database URL");
    return "";
  })();

const client = postgres(databaseURL, {
  max: 1,
});
const db = drizzle(client, { schema });
const migrateDb = async () => {
  try {
    console.log("🟠 Migrating Client");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("🟢 Successfully Migrated");
  } catch (error) {
    console.log("🔴 Error Migrating Client", error);
  }
};
migrateDb();
export default db;
