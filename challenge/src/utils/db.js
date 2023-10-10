const {
    Activity,
    Item,
} = require("../models")

function syncTables() {
    return Promise.all([
        Activity.sync(),
        Item.sync(),
    ])
}

module.exports = {
    syncTables,
}
