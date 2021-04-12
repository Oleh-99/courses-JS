
(function($) {
	var apiKey = '9bf9f86bcfd64653ba2731b86234811d';
	var arrCurrency = [];

	function request() {
		$.ajax({
			url: `http://api.currencylayer.com/list?access_key=${apiKey}`, 
			success: function(data) {
				renderCurrency(data.currencies);
			},
			error: function() {
				alert('Error');
			}
		});
	}

	function renderCurrency(data) {
		for (let i in data) {
			$('.currency1').append(`<option>${i}</option>`);
			$('.currency2').append(`<option>${i}</option>`);
		};
	}

	function quotes(info) {
		var result;
		if(0 === arrCurrency.length) {
			$.ajax({
				url: `http://api.currencylayer.com/live?access_key=${apiKey}&format=1`, 
				async: false,
				success: function(data) {
					arrCurrency = data;
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
			convertValue1();
		});

		$('.currency2').on('change', function() {
			convertValue2();
		});
	}

	function inputValue() {
		$('.value-1').on('keyup', function() {
			convertValue2();
		});

		$('.value-2').on('keyup', function() {
			convertValue1();
		});
	}

	function convertValue1() {
		if ($('.currency2').val() !== 'Currency' && $('.currency1').val() !== 'Currency') {
			var field1 = $('.value-1').val(' ');
			var field2 = $('.value-2');
			var convertFrom = 'USD' + $('.currency1').val();
			var convertIn = 'USD' + $('.currency2').val();
			field1.val((field2.val() * quotes(convertFrom)) / quotes(convertIn));
		}
	}

	function convertValue2() {
		if ($('.currency2').val() !== 'Currency' && $('.currency1').val() !== 'Currency') {
			var field1 = $('.value-1');
			var field2 = $('.value-2').val(' ');
			var convertFrom = 'USD' + $('.currency2').val();
			var convertIn = 'USD' + $('.currency1').val();
			field2.val((field1.val() * quotes(convertFrom)) / quotes(convertIn));
		}
	}

	function convertPrice() {
		$('.price-apple').find('.currency1').on('change', function() {
			var $this = $(this).val();
			$('.icon').attr('src', `https://cryptoicons.org/api/icon/${$this.toLowerCase()}/200`);
			var convert = 'USD' + $this;
			$('.price').text((799 * quotes(convert)).toFixed(2));
		})
	}

$(document).ready(function() {
	request();
	selectValue();
	inputValue();
	convertPrice();
})

})(jQuery);