const fs = require('fs')

function getAdmins() {
    const listaAdmins = JSON.parse(
        fs.readFileSync('database/admins.json', 'utf-8')
    );
    return listaAdmins.map(({email, password}) => ({email, password}))
}

module.exports = {
    getAdmins
}
