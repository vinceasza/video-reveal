var navi = (function(){
  var $window = $(window);
  var $navUl = $('.navigation ul');

  return {
    toggle: function() {

        $window.bind('load resize',function(){
          winWidth = $window.width();
          if (winWidth < 850){
            $navUl.hide();
          } else {
            $navUl.show();
          }
          $('.responsive-menu-btn').on('click', function(e) {
            e.preventDefault();
            $navUl.toggle();
          });
        });
    },
    scrollToDiv: function(){
      $navUl.on('click','a',function(e){
        e.preventDefault();
        var hash = $(this).attr('href');
        var pos = $(hash).offset();
        $('html, body').animate({scrollTop: pos.top}, "slow");
      });
    },
    highlighter: function(hash,top, viewportTop){
      if ( viewportTop > top - 200 ) {
        $(".navigation ul li a").each(function(index){
          if (this.hash == hash){
            $(this).addClass('selected');
          } else {
            $(this).removeClass('selected');
          }
        });
      }
    },
    scrollNav: function(){
      $window.bind('scroll load', function(){
        var viewportTop = $window.scrollTop();
        var winHeight = $(document).innerHeight();
        var a  = $('.navigation ul li a');
        for (var i=0; i < a.length; i++){
          var currentAnchor = a[i];
          var nextAnchor = a[i];
          var hash = $(currentAnchor).attr('href');
          var nextHash = $(nextAnchor).attr('href');
          var top = $(hash).offset().top;
          navi.highlighter(hash,top,viewportTop);
        }
      });
    }
  }
}());

(function(){


navi.toggle();
navi.scrollToDiv();
navi.scrollNav();

}());
