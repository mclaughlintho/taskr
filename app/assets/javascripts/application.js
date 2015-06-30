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
  $('.new-task-form form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    $.ajax('/tasks', {
      data: form.serialize(),
      type: 'post',
      success: function(result) {
        $('.tasks').append(result);
        form.find('#task_title').val("");
      }
    });
  });
});



// Clicking the 'Complete Task' button

$(document).ready(function() {
  $(document).on('submit', '.complete-form form', function(event) {
    event.preventDefault();
    var completeForm = $(this)
    $.ajax(completeForm.attr('action'), {
      type: 'patch',
      data: completeForm.serialize(),
      success: function(updatedTask) {
        completeForm.closest('.task').append(updatedTask);
        completeForm.closest('.incomplete-task').remove();
      }
    })
});
});

// Clicking the 'Uncomplete Task' button

$(document).ready(function() {
  $(document).on('submit', '.uncomplete-form form', function(event) {
    event.preventDefault();
    var uncompleteForm = $(this)
    $.ajax(uncompleteForm.attr('action'), {
      type: 'patch',
      data: uncompleteForm.serialize(),
      success: function(updatedTask) {
        uncompleteForm.closest('.task').append(updatedTask);
        uncompleteForm.closest('.complete-task').remove();
      }
    })
  });
});

// Clicking the 'Delete' button

$(document).ready(function() {
  $('.delete').on('click', function(event) {
    event.preventDefault();
    var deleteButton = $(this)
      deleteButton.closest('.task').remove();
  })
})