/*global BlogBackbone, Backbone, JST*/

BlogBackbone.Views = BlogBackbone.Views || {};

(function () {
    'use strict';

    BlogBackbone.Views.Post = Backbone.View.extend({

        template: JST['app/scripts/templates/post.ejs'],

        tagName: 'div',

        id: '',

        className: 'blog-post-area',

        events: {
          'click .send': 'sendPost'
        },

        sendPost: function (event) {
          console.log('I clicked on button', event);
        },

        initialize: function (model) {
            this.model = model;
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            console.log('Blog entry posted');
            return this;
        }

    });

})();
