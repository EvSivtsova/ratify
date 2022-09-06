const mongoose = require('mongoose');

require('../mongodb_helper');
const User = require('../../models/user');

describe('User model', () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it('stores user details', () => {
    const user = new User({
      email: 'sample@example.com',
      password: 'password',
      firstName: 'Example',
      lastName: 'User',
      animal: 'rat'
    });
    expect(user.email).toEqual('sample@example.com');
    expect(user.password).toEqual('password');
    expect(user.firstName).toEqual('Example');
    expect(user.lastName).toEqual('User');
    expect(user.animal).toEqual('rat');
  });

  it('saves a user in the database', (done) => {
    const user = new User({
      email: 'someone@example.com',
      password: 'password',
      firstName: 'Sven',
      lastName: 'Svenson',
      animal: 'rat'
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          email: 'someone@example.com',
          password: 'password',
          firstName: 'Sven',
          lastName: 'Svenson',
          animal: 'rat'
        });
        done();
      });
    });
  });

  it('saves a user in the database without animal', (done) => {
    const user = new User({
      email: 'someone@example.com',
      password: 'password',
      firstName: 'Sven',
      lastName: 'Svenson',
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          email: 'someone@example.com',
          password: 'password',
          firstName: 'Sven',
          lastName: 'Svenson',
        });
        expect(users[0].animal).toBeNull;
        done();
      });
    });
  });
  
  it('is an array that can store users', (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  
  it('stores breeder details', () => {
    const user = new User({
      email: 'johndoe@gmail.com',
      password: 'Mypassword1&',
      firstName: 'John',
      lastName: 'Doe',
      animal: 'rat',
      isABreeder: true,
      verifiedBreeder: {
        status: false,
        county: 'London',
        association:'Fancy Rats',
        website:'www.ratbreeder.com',
      }
    });
    expect(user.email).toEqual('johndoe@gmail.com');
    expect(user.password).toEqual('Mypassword1&');
    expect(user.firstName).toEqual('John');
    expect(user.lastName).toEqual('Doe');
    expect(user.animal).toEqual('rat');
    expect(user.isABreeder).toEqual(true);
    expect(user.verifiedBreeder.status).toEqual(false);
    expect(user.verifiedBreeder.county).toEqual('London');
    expect(user.verifiedBreeder.association).toEqual('Fancy Rats');
    expect(user.verifiedBreeder.website).toEqual('www.ratbreeder.com');
  });

  it('saves a breeder in the database', (done) => {
    const user = new User({
      email: 'johndoe@gmail.com',
      password: 'Mypassword1&',
      firstName: 'John',
      lastName: 'Doe',
      animal: 'rat',
      isABreeder: true,
      verifiedBreeder: {
        status: false,
        county: 'London',
        association:'Fancy Rats',
        website:'www.ratbreeder.com',
      },
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          email: 'johndoe@gmail.com',
          password: 'Mypassword1&',
          firstName: 'John',
          lastName: 'Doe',
          animal: 'rat',
          isABreeder: true,
          verifiedBreeder: {
            status: false,
            county: 'London',
            association:'Fancy Rats',
            website:'www.ratbreeder.com',
          },
        });
        done();
      });
    });
  });
  
  it('stores users', (done) => {
    const user1 = new User({
      email: 'johndoe@gmail.com',
      password: 'Mypassword1&',
      firstName: 'John',
      lastName: 'Doe',
      animal: 'rat',
      isABreeder: true,
      verifiedBreeder: {
        status: false,
        county: 'London',
        association:'Fancy Rats',
        website:'www.ratbreeder.com',
      }
    });
    
    const user2 = new User({
      email: 'someone@example.com',
      password: 'password',
      firstName: 'Sven',
      lastName: 'Svenson',
    });
    
    user1.save(() => {
      user2.save(() => {
        User.find((err, users) => {
          expect(err).toBeNull();
          expect(users.length).toEqual(2);
          done();  
        });
      });
    });
  });
});
