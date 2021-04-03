const users = require('../database/DatabaseSchema/user');

async function registerUser(userDetail) {
    const result = await users.insert(userDetail);
    return result;
}
module.exports = { registerUser }