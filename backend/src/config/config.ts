require("dotenv").config();

var dbPort, prodDbPort;
if (process.env["DB_PORT"] !== undefined) {
  dbPort = parseInt(process.env["DB_PORT"]);
}
if (process.env["PROD_DB_PORT"] !== undefined) {
  prodDbPort = parseInt(process.env["PROD_DB_PORT"]);
}

const config = {
  port: process.env["PORT"],
  connectionString: process.env["DB_CONNECTION_STRING"],
  development: {
    client: "pg",
    connection: {
      host: process.env["DB_HOST"],
      port: dbPort,
      database: process.env["DB_NAME"],
      user: process.env["DB_USER"],
      password: process.env["DB_PASSWORD"],
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  production: {
    client: "pg",
    connection: {
      host: process.env["PROD_DB_HOST"],
      port: prodDbPort,
      user: process.env["PROD_DB_USER"],
      password: process.env["PROD_DB_PASSWORD"],
      database: process.env["PROD_DB_NAME"],
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  testing: {
    client: "pg",
    connection: {
      host: process.env["TEST_DB_HOST"],
      port: process.env["TEST_DB_PORT"],
      user: process.env["TEST_DB_USER"],
      password: process.env["TEST_DB_PASSWORD"],
      database: process.env["TEST_DB_NAME"],
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  email: {
    smtp: {
      service: process.env["EMAIL_SERVICE"],
      auth: {
        user: process.env["EMAIL_USER"],
        pass: process.env["EMAIL_PASSWORD"],
      },
    },
    from: process.env["EMAIL_FROM"] || "",
  },
  jwt: {
    secret: process.env["JWT_SECRET"] || "",
    accessExpirationMinutes: process.env["JWT_ACCESS_EXPIRATION_MINUTES"],
    refreshExpirationDays: process.env["JWT_REFRESH_EXPIRATION_DAYS"],
    resetPasswordExpirationMinutes: process.env["JWT_RESET_PASSWORD_EXPIRATION_MINUTES"],
    verifyEmailExpirationMinutes: process.env["JWT_VERIFY_EMAIL_EXPIRATION_MINUTES"],
  },
};

export default config;
