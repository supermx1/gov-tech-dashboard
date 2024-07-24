$(document).ready(function(){
	AOS.init();
	$('[data-bss-tooltip]').tooltip();

	$('[data-bss-chart]').each(function(index, elem) {
		this.chart = new Chart($(elem), $(elem).data('bss-chart'));
	});

});