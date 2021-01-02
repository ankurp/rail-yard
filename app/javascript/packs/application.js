// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require('@rails/ujs').start();
require('@hotwired/turbo');
require('@rails/activestorage').start();
require('channels');
require('local-time').start();
require('bootstrap');
require('data-confirm-modal');

window.Rails = Rails;

$(document).on('turbo:load', () => {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});
