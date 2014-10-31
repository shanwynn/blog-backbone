/*global BlogBackbone, Backbone, JST*/

BlogBackbone.Views = BlogBackbone.Views || {};

(function () {
    'use strict';

    BlogBackbone.Views.Appview = Backbone.View.extend({

        template: JST['app/scripts/templates/appView.ejs'],

        el: $('.blog-container'),

        events: {
          'submit #newPost' : 'onSubmit'
        },

        onSubmit: function (event) {
          event.preventDefault();
          var date = new Date ();
          var blogTitle = $('#title');
          var blogPost = $('#post');
          var blogOutput = new BlogBackbone.Models.Post({
            date: date.val(),
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
          //this.listenTo(this.model, 'change', this.render);//
        },

        addOne: function (blogOutput) {
          var postView = new BlogBackbone.Views.Post(blogOutput);
          $('#existingPosts div blog-output').append(postView.render().el);
        },

        addAll: function () {
          console.log('addAll Called');
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
          //this.$el.html(this.template());//
            console.log('render called in appView');
        }

    });

})();
