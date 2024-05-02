$(document).ready(function()
{
	$(".musica").audioControls(
	{

		autoPlay:false,
		timer: 'increment',
		onAudioChange: function(datos)
		{
			$(".nomp3").text(datos.title)
		}

		});
});