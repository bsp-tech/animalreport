$(function () {
	$('#record-video').on('change', function (){
		if (this.files && this.files[0]){
			var read_video = new FileReader(),
				video = document.getElementById('recorded-video-player'),
				canvas = document.getElementById('recorded-video-canvas'),
				canvas_data = canvas.getContext("2d");

			read_video.onload = function (e){
				video.src = e.target.result;
			};

			read_video.readAsDataURL(this.files[0]);

			video.addEventListener('canplay', function (){
				video.currentTime = 3;
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;

				canvas_data.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
				$('#recorded-video').css('background-image', 'url('+canvas.toDataURL()+')').html('<i class="fas fa-check-circle text-success fa-lg"></i>');
			});

			video.load();
		}
	});

	$('#capture-image').on('change', function (){
		if (this.files && this.files[0]){
			var read_image = new FileReader();

			read_image.onload = function (e){
				$('#captured-image').css('background-image', 'url('+e.target.result+')').html('<i class="fas fa-check-circle text-success fa-lg"></i>');
			};

			read_image.readAsDataURL(this.files[0]);
		}
	});
});