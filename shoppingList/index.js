// Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
// Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
// Linking to your application JavaScript file from the index.html page.
// Using this and event delegation
// Requirements
// In terms of user experience, your shopping list app must allow users to:

// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
'use strict';

function addNewItem(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    // const newListItem = $(event.currentTarget).find('.js-shopping-list-entry');  
    let listItem = $('.js-shopping-list-entry').val();
    $('.shopping-list').append(`
    <li>
    <span class="shopping-item">${listItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
      `);
  });
}

function checkItem(){
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked'); 
  });
}

function deleteItem(){
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
}

deleteItem();
checkItem();
addNewItem();

// $(".shopping-list li").clone().appendTo(".shopping-list");   



// $(function() {
//   $('.js-form').submit(event => {
//     // this stops the default form submission behavior
//     event.preventDefault();
//     const userTextElement = $(event.currentTarget).find('#user-text');
//     $('.js-display-user-text').text(`user text is:  ${userTextElement.val()}`);
//     userTextElement.val('');
//   });  
// });
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// Additionally:

// You must use a CDN-hosted version of jQuery
// Put your application code in a file called index.js and link to it in index.html
// Be sure to put both script elements at the bottom of the <body> element.
// Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
// Hey friend, we’re here to help! Just a reminder that you can always check out the Q&A sessions if you’re stuck or have questions. Feel free to drop by for a few minutes or the full hour. Happy coding!

