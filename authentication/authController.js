const authService = require('../authentication/authService');

async function registerUser(req, res) {
    try {
        const data = await authService.registerUser(req.body);
        res.status(200).json(data);
    } catch (error) {
        console.log('I am in catch');
        res.status(500).json(error.message);
    }
}
module.exports = { registerUser }