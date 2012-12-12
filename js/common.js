$(document).ready(function () {

//scroll
$('.codes__scroll').jScrollPane({
	hideFocus: true,
	contentWidth: '0px',
	verticalDragMaxHeight: 11
});

//gallery scroll
$('.gallery, .accel__table').jScrollPane({
	hideFocus: true,
	contentWidth: '0px',
	verticalDragMaxHeight: 31
});

//gallery photo
$('.gallery a').click(function() {
	var photo = $(this).attr('href');
	$('.popup-bg_dark, .popup-photo').fadeIn();
	$('.popup-photo__pic img').attr('src', photo);
	return false;
});
$('.close-photo').click(function() {
	$('.popup-bg_dark, .popup-photo').fadeOut();
});

});