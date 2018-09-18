import pool from './connect';

const createUserTable = `DROP TABLE users CASCADE; 
            CREATE TABLE users(
            user_id SERIAL PRIMARY KEY NOT NULL,
            firstName CHARACTER VARYING(20) NOT NULL,
            lastName CHARACTER VARYING(20) NOT NULL,
            username CHARACTER VARYING(10) UNIQUE NOT NULL,
            email CHARACTER VARYING(50) UNIQUE NOT NULL,
            password CHARACTER VARYING(255) NOT NULL
        )`;

const createBusinessTable = `DROP TABLE businesses CASCADE; 
            CREATE TABLE businesses(
            business_id SERIAL PRIMARY KEY NOT NULL,
            owner_id INTEGER NOT NULL,
            businessName CHARACTER VARYING(100) UNIQUE NOT NULL,
            description CHARACTER VARYING(50) NOT NULL,
            email CHARACTER VARYING(50) UNIQUE NOT NULL,
            location CHARACTER VARYING(30) NOT NULL,
            category CHARACTER VARYING(15) NOT NULL,
            phoneNumber CHARACTER VARYING(20) NOT NULL,
            FOREIGN KEY (owner_id) REFERENCES users (user_id) ON DELETE CASCADE
        )`;

const createReviewTable = `DROP TABLE reviews CASCADE; 
            CREATE TABLE reviews(
            review_id SERIAL PRIMARY KEY NOT NULL,
            bus_id INTEGER NOT NULL,
            owner_id INTEGER NOT NULL,
            content CHARACTER VARYING(500) NOT NULL,
            FOREIGN KEY (bus_id) REFERENCES businesses (business_id) ON DELETE CASCADE,
            FOREIGN KEY (owner_id) REFERENCES users (user_id) ON DELETE CASCADE
        )`;


/* eslint-disable no-console */

pool.query(createUserTable)
  .then((result) => {
    console.log('userTable', result);
  }).catch(error => console.log(`userTable ${error.message}`));


pool.query(createBusinessTable)
  .then((result) => {
    console.log('businessTable', result);
  }).catch(error => console.log(`businessTable ${error.message}`));


pool.query(createReviewTable)
  .then((result) => {
    console.log('reviewTable', result);
  }).catch(error => console.log(`reviewTable ${error.message}`));
