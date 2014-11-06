/*global BlogBackbone, $*/


window.BlogBackbone = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Posts: '',
    init: function () {
        'use strict';
        
        this.Posts = new BlogBackbone.Collections.Posts();
        this.app  = new BlogBackbone.Views.Appview();
    }
};

$(document).ready(function () {
    'use strict';
    BlogBackbone.init();
});
