require.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery',
    },
    shim: {
        'jquery': {
            deps: [],
            exports: '$'
        }
    }
});

require(['jquery'], function($){
    console.log($);
    console.log('dsjflkdsjflak');
})