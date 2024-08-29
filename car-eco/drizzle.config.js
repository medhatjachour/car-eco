/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
      url: import.meta.DRIZZLE_DATABASE_URL,
    }
  };