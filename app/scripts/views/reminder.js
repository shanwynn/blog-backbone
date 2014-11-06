/*global BackboneTimer, Backbone, JST*/

BackboneTimer.Views = BackboneTimer.Views || {};

(function () {
    'use strict';

    BackboneTimer.Views.Reminder = Backbone.View.extend({

        template: JST['app/scripts/templates/reminder.ejs'],

        tagName: 'tr',

        events: {
          'click .name': 'highlightName'
        },

        highlightName: function (e) {
          console.log('I clicked on name:', e);
        },

        initialize: function (model) {
            this.model = model;
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            console.log('reminder called in reminderView');
            return this;
        },

    });

})();
