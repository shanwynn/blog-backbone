/*global BlogBackbone, Backbone, JST*/

BlogBackbone.Views = BlogBackbone.Views || {};

(function () {
    'use strict';

    BlogBackbone.Views.Appview = Backbone.View.extend({

        template: JST['app/scripts/templates/appView.ejs'],

        el: $('.blog-container'),

        events: {
          'click input.send' : 'onSubmit'
        },

        onSubmit: function (event) {
          event.preventDefault();
          var blogTitle = $('#title');
          var blogPost = $('#post');
          var blogOutput = new BlogBackbone.Models.Post({
            title: blogTitle.val(),
            post: blogPost.val(),
          });
          blogOutput.save();
        },

        initialize: function () {
            this.postsList = this.$el.find('#existingPosts');
            this.listenTo(BlogBackbone.Posts, 'add', this.addOne);
            this.listenTo(BlogBackbone.Posts, 'reset', this.addAll);
            this.render();
            BlogBackbone.Posts.fetch();
        },

        addOne: function (blogOutput) {
          var postView = new BlogBackbone.Views.Post(blogOutput);
          $('#existingPosts div blog-output').append(postView.render().el);
        },

        addAll: function () {
          console.log('addAll Called');
        },

        render: function () {
            this.$el.html(this.template());
            console.log('render called in appView');
        }

    });

})();
