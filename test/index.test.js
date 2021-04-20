const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
    it('should return a stricng', () => {
        expect('Cheers from ${os.hostname()}!').to.equal('Cheers from ${os.hostname()}!');

    });

});
