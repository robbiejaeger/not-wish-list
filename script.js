var $submitBtn = $('.new-item-form--submit');
var $itemInput = $('.new-item-form--name');
var $itemList = $('.item-list');


$submitBtn.on('click', function(e){
  e.preventDefault();
  var inputText = $itemInput.val();
  $itemList.append(
    `<article class="item-list-item">
      <p>${inputText}</p>
      <button class="delete-item">Delete</button>
    </article>`
  );
  $itemInput.val('');
  $submitBtn.prop('disabled', true);
});


$itemInput.on('input', function(){
  if ($(this).val() === '') {
    $submitBtn.prop('disabled', true);
  } else {
    $submitBtn.prop('disabled', false);
  }
});


$itemList.on('click', '.delete-item', function(){
  $(this).parent().remove();
});