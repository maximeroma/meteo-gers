	var humidity;
	var pressure;
	var temp;
	var temp_max;
	var temp_min;
	var array = [];


$('document').ready(function()
{
	
	
	$.ajax(
	{
		url : "http://api.openweathermap.org/data/2.5/weather?id=6448311&APPID=b7090c87b005bfeb3fcfff3869409919",

		success : function(data)
		{
			console.log(data);
			humidity = data.main.humidity;
			array.push(humidity);
			

			pressure = data.main.pressure;
			array.push(pressure);
			

			temp = data.main.temp;
			temp = temp - 273,15;
			array.push(temp);
			temp_max = data.main.temp_max;
			temp_max = temp_max - 273,15;
			array.push(temp_max);
			temp_min = data.main.temp_min;
			temp_min = temp_min - 273,15;
			array.push(temp_min);
			console.log(array);
			for  (var i = 0; i < array.length; i++)
			{
				$('tbody tr').append('<td>' + array[i] + '</td>');
			}
		},
		error : function(err)
		{
			console.log(err);
		}
	});



});