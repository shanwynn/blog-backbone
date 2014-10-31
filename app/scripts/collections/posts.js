/*global BlogBackbone, Backbone*/

BlogBackbone.Collections = BlogBackbone.Collections || {};

(function () {
    'use strict';

    BlogBackbone.Collections.Posts = Backbone.Collection.extend({

        model: BlogBackbone.Models.Posts,
        url: 'https://tiny-pizza-server.herokuapp.com/collections/SW-Blog'


    });

})();
