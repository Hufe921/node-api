const should = require('should')
const indexService = require('../../core/services/index')

describe('IndexService', function () {
    // 测试登录
    describe('postLogin', function () {
        this.timeout(60000)
        it('return Tips class', async function () {
            let data = await indexService.postLogin()
            data.should.have.property('state').and.be.a.Boolean()
        });
    });
});