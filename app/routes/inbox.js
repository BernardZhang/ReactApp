module.exports = {
    path: 'inbox',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('../views/Inbox'));
        });
    }
};