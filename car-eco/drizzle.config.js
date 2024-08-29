/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://car-eco_owner:mkW6OirKfdE9@ep-morning-bread-a2q9ogts.eu-central-1.aws.neon.tech/car-eco?sslmode=require',
    }
  };