$(document).ready(function () {

//scroll
$('.codes__scroll').jScrollPane({
	hideFocus: true,
	contentWidth: '0px',
	verticalDragMaxHeight: 11
});

$('.gallery, .accel__table').jScrollPane({
	hideFocus: true,
	contentWidth: '0px',
	verticalDragMaxHeight: 31
});

});