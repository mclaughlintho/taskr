// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// CLicking the 'Create Task' button

$(document).ready(function() {
  $('.new-task-form').on('submit', '.create-task', function(event) {
    event.preventDefault;
    var form = $('.new-task-form');
    $.ajax('/app/controllers/tasks_controller.rb', {
      data: form.serialize(),
      success: function(result) {
        $('.tasks').append(result);
      }
    });
  });
});



// Clicking the 'Complete Task' button

$(document).ready(function() {
  $('.task').on('submit', '.complete-form', function(event) {
    event.preventDefault();
    $.ajax('/app/views/tasks/_uncomplete_form.html.erb', {
      success: function(result) {
        $(this).closest('.task').append(result);
      }
    })
    $(this).closest('.incomplete-task').hide();
});
});

// Clicking the 'Uncomplete Task' button

$(document).ready(function() {
  $('.task').on('submit', '.uncomplete-form', function(event) {
    event.preventDefault();
    $.ajax('app/views/tasks/_complete_form.html.erb', {
      success: function(result) {
        $(this).closest('.task').append(result)
      }
    })
    $(this).closest('.complete-task').hide();
  });
});