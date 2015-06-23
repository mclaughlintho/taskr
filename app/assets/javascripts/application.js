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
  $('.new-task-form').on('submit', '.create-task', function() {
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
  $('.complete-form').on('click', function(event) {
    event.preventDefault();
    $(this).closest('.task').find('.incomplete').addClass('complete').removeClass('incomplete');
    $(this).addClass('hidden');
    $(this).closest('.task').find('.uncomplete-form').show();
});
});

// Clicking the 'Uncomplete Task' button

$(document).ready(function() {
  $('.uncomplete-form').on('click', function(event) {
    event.preventDefault();
    $(this).closest('.task').find('.complete').addClass('incomplete').removeClass('complete');
    $(this).addClass('hidden');
    $(this).closest('.task').find('.complete-form').show();
  });
});