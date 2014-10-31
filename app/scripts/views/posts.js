/*global BlogBackbone, Backbone, JST*/

BlogBackbone.Views = BlogBackbone.Views || {};

(function () {
    'use strict';

    BlogBackbone.Views.Posts = Backbone.View.extend({

        template: JST['app/scripts/templates/posts.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
