module.exports = {
    path: 'inbox',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('../views/Inbox'));
        });
    },
    // getComponents(location, cb) {
    //     require.ensure([], (require) => {
    //         cb(null, {
    //             inbox: require('../views/Inbox'),
    //             notes: require('../components/Notes')    
    //         });
    //     });
    // }
};