
(function($) {
	var apiKey = '9bf9f86bcfd64653ba2731b86234811d';
	var arrCurrency = [];

	function loaderCurrencies() {
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

	function processingCurrency(info) {
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
					var $currencyWrapper = $('.currency-now');
					$currencyWrapper.find('.dollar').text(arrCurrency.quotes['USDUAH'].toFixed(2));
					$currencyWrapper.find('.euro').text(((arrCurrency.quotes['USDUAH']) / arrCurrency.quotes['USDEUR']).toFixed(2));
					$('.info-time').append(new Date(data.timestamp * 1000.0).toLocaleString());
				},
				error: function() {
					alert('Error');
				}
			});
		} else {
			result = arrCurrency.quotes[info];	
		};

		return result;
	}

	function convertCurrency() {
		var $value1 = $('.value-1');
		var $value2 = $('.value-2');
		var $currency1 = $('.currency1');
		var $currency2 = $('.currency2');

		$currency1.on('change', function() {
			convertValue($value1, $value2, $currency1, $currency2);
		});
		$currency2.on('change', function() {
			convertValue($value2, $value1, $currency2, $currency1);
		});
		$value1.on('keyup', function() {
			convertValue($value2, $value1, $currency2, $currency1);
		});
		$value2.on('keyup', function() {
			convertValue($value1, $value2, $currency1, $currency2);
		});
	}

	function convertValue(input1, input2, select1, select2) {
		if ('Currency' !== select1.val() && 'Currency' !== select2.val()) {
			if (0 !== input1.val().length || 0 !== input2.val().length) {
				var convertFrom = 'USD' + select1.find(':selected').data('value');
				var convertIn = 'USD' + select2.find(':selected').data('value');
				input1.val((parseFloat(input2.val()) * processingCurrency(convertFrom)) / processingCurrency(convertIn));
			}
		};
	}

$(document).ready(function() {
	loaderCurrencies();
	processingCurrency();
	convertCurrency();
});

})(jQuery);