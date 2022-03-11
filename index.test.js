const { expect } = require('chai');
const lockScreen = require('./index');

describe('LockScreen', () => {
  it('should be function', () => {
    expect(lockScreen).to.be.a('function');
  });

  it('should return 0', () => {
    const promise = lockScreen();

    expect(promise).to.be.a('promise');
    return promise.then(code => expect(code).to.equal(0));
  });
});
