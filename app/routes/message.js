module.exports = {
    path: 'message',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('../views/Message'));
        });
    }
};