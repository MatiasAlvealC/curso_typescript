
const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports  = {
  async taskOne () {
    try {
      throw new Error ('SOME PROBLEM');
      await sleep(4000);  // 4 seg
      return 'One Value';
    } catch (e) {
      console.log(e);
    }
  },

  async taskTwo () {
    try {
      //throw new Error ('SOME PROBLEM2');
      await sleep(2000);  // 2 seg
      return 'Two Value';
    } catch (e) {
      console.log(e);
    }
  }
}