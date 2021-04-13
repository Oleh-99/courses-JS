
(function($) {
	var apiKey = '9bf9f86bcfd64653ba2731b86234811d';
	var arrCurrency = [];

	function request() {
		$.ajax({
			url: `http://api.currencylayer.com/list?access_key=${apiKey}`, 
			success: function(data) {
				data.currencies['APL'] = 'Iphone 12';
				renderCurrency(data.currencies);
			},
			error: function() {
				alert('Error');
			}
		});
	}

	function renderCurrency(data) {
		for (let i in data) {
			$('select').append(`<option data-value="${i}">${data[i]}</option>`);
		};
	}

	function quotes(info) {
		var result;

		if(0 === arrCurrency.length) {
			$.ajax({
				url: `http://api.currencylayer.com/live?access_key=${apiKey}`, 
				async: false,
				success: function(data) {
					arrCurrency = data;
					arrCurrency.quotes['USDAPL'] = 0.0012515644555695;
					if (arrCurrency.quotes[info]) {
						result = arrCurrency.quotes[info];	
					}
					$('.info-time').append(new Date(data.timestamp * 1000.0).toLocaleString());
				},
				error: function() {
					alert('Error');
				}
			});
		} else {
			if (arrCurrency.quotes[info]) {
				result = arrCurrency.quotes[info];	
			};
		};
		return result;
	}

	function selectValue() {
		$('.currency1').on('change', function() {
			convertValue($('.value-1'), $('.value-2'), $('.currency1'), $('.currency2'));
		});

		$('.currency2').on('change', function() {
			convertValue($('.value-2'), $('.value-1'), $('.currency2'), $('.currency1'));
		});
	}

	function inputValue() {
		$('.value-1').on('keyup', function() {
			convertValue($('.value-2'), $('.value-1'), $('.currency2'), $('.currency1'));
		});

		$('.value-2').on('keyup', function() {
			convertValue($('.value-1'), $('.value-2'), $('.currency1'), $('.currency2'));
		});
	}

	function convertValue(input1, input2, select1, select2) {
		if (select1.val() !== 'Currency' && select2.val() !== 'Currency') {
			var convertFrom = 'USD' + select1.find(':selected').data('value');
			var convertIn = 'USD' + select2.find(':selected').data('value');
			input1.val((input2.val() * quotes(convertFrom)) / quotes(convertIn));
		};
	}

$(document).ready(function() {
	request();
	quotes();
	selectValue();
	inputValue();
});

})(jQuery);