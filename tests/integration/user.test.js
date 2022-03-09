import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import HttpStatus from 'http-status-codes';

import app from '../../src/index';

describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => { });
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('POST /registration', () => {

    it('given new user when added should return status 201', (done) => {
      const userdetails = {
        firstName: "nitya",
        lastName: "shree",
        email: "nityashree2508@gmail.com",
        password: "123456"
      };
      request(app)
        .post('/api/v1/users/register')
        .send(userdetails)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
          done();
        });

    });
  });

    describe('POST /register', () => {
     it('given new user when added should return status 201', (done) => {
      const userdetails = {
        firstName: "ab45t",
        lastName: "shree",
        email: "nityashree2508@gmail.com",
        password: "123456"
      };
      request(app)
        .post('/api/v1/users/register')
        .send(userdetails)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.INTERNAL_SERVER_ERROR);
          done();
        });

    });
  });

  describe('POST /login', () => {
    it('for user login', (done) => {
      const userdetails = {
        email: "nityashree2508@gmail.com",
        password: "123456"
      };
      request(app)
        .post('/api/v1/users/login')
        .send(userdetails)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.OK);
          done();
        });

    });
  })

    // describe('POST /forget', () => {
    //   it('for forget password', (done) => {
    //     const userdetails = {
    //       email: "nityashree2508@gmail.com"
    //     };
    //     request(app)
    //       .post('/api/v1/users/forgetPassword')
    //       .send(userdetails)
    //       .end((err, res) => {
    //         expect(res.statusCode).to.be.equal(HttpStatus.OK);
    //         done();
    //       });

    //   });
    // });

    // describe('PUT /reset', () => {
    //   it('for reset password', (done) => {
    //     const userdetails = {
    //       password: "987654"
    //     };
    //     request(app)
    //       .put('/api/v1/users/resetPassword')
    //       .send(userdetails)
    //       .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pdHlhc2hyZWUyNTA4QGdtYWlsLmNvbSIsImlkIjoiNjIyMjAyMTlmZmU2ZDlhMGJmNWEyM2FlIiwiaWF0IjoxNjQ2Mzk1OTI5fQ.tHxqEGCyQWIipoXLLSO67xFEL4psxJHZPpDjaBrXD1g')
    //       .end((err, res) => {
    //         expect(res.statusCode).to.be.equal(HttpStatus.ACCEPTED);
    //         done();
    //       });

    //   });
    // });
   
 

  describe('GET /users', () => {
    it('sget all users', (done) => {
      request(app)
        .get('/api/v1/users')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.OK);


          done();
        });
    });
  });
});
