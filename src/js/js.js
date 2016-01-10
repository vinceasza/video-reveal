

(function(){



$(window).on('load resize', function(){
  $('.video-play').on('click', function(e){
    e.preventDefault();
    var url = $(this).data('url');
    createVideo(url);
  });

  function createVideo(url){
    var width = $('.video-reveal').width();
    var iframe = '<iframe width="' + width + '" height="315" src="' + url + '" frameborder="0" allowfullscreen autoplay></iframe>';
    $('.video-reveal').html(iframe);
  }
});

}());
