jQuery(function () {
	var OpDay = 30; //Opening Day
	var OpMonth = 10; //Opening Month
	var OpYear = 2014; //Opening Year
	
	var opening = new Date();
	opening = new Date(OpYear, OpMonth - 1, OpDay);
	jQuery('#countdown').countdown({until: opening});
	jQuery('#year').text(opening.getFullYear());
});