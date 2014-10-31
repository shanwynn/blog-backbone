/*global BlogBackbone, Backbone*/

BlogBackbone.Models = BlogBackbone.Models || {};

(function () {
    'use strict';

    BlogBackbone.Models.Post = Backbone.Model.extend({

        url: 'https://tiny-pizza-server.herokuapp.com/collections/SW-Blog',

        initialize: function() {
        },

        defaults: {
          date: new Date(),
          title: '',
          post: '',
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
