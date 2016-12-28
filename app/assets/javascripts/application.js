// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
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
//= require bootstrap-sprockets
//= require jquery.tablesorter
//= require_tree .

var setupGenericSortableList = function($obj) {
  var $notAlreadySorted = $(".sortable-table").not('.already-sorted');
  if($notAlreadySorted.length > 0) {
    $notAlreadySorted.each(function() {
      $this = $(this);
      $table = $this.find('table');
      if ($table.length) {
        $table.tablesorter({
          cssNoSort: 'sorter-false'
        });
        $this.addClass('already-sorted');
      }
    });
  }
};

var setupQuickLists = function() {
  $('#quicklists').change(function() {
    var val = $(this).val();
    if (!val) {
      $('.filter-ql-style').html('');
      return;
    }
    var not_filters = "";
    vals = val.split(';');
    $.each(vals, function(index, value) {
      not_filters += ':not([data-index*="' + value.toLowerCase() + '"])';
    });
    $('.filter-ql-style').html('.searchable' + not_filters + ' { display: none; }');
  });
}

var setupFilterSearch = function() {
  if(!$('#filter-search-input').length > 0) { return; }
  $('#filter-search-input').on('input', function() {
    var val = $(this).val();
    if (!val) {
      $('.filter-search-style').html('');
      return;
    }
    $('.filter-search-style').html('.searchable:not([data-index*="' + val.toLowerCase() + '"]) { display: none; }');
  });
};

var do_on_load = function() {
  setupGenericSortableList();
  setupFilterSearch();
  setupQuickLists();
  $('.filter-search-style').html(''); /* reset search between pages */
}
$(document).ready(do_on_load);
$(document).on('turbolinks:load', do_on_load);
