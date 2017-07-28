console.log('loaded');
$(document).ready(function(){

	$('#submit').click(function(event) {
		const $value=$('#input-box').val();
		$('#to-do-list').append('<li>'+$value+'</li>')
		$('#input-box').val('')
	
	})

		$('#to-do-list').on('click', 'li', function(hi) {
			const bla = $(this).contents();
			console.log(bla)
			bla.appendTo('#completed').wrap('<li></li>')
		

	});
$('#completed').on('click', 'li', function(yo) {
	this.remove();

});


});