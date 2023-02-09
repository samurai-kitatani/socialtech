 $(function () {  
   // ボタンアニメーション
   $('.button-more').on('mouseover', function () {
     $(this).animate({
       opacity: 0.20,
       marginLeft: 500,
     }, 1000);
   });
   
   $('.button-more').on('mouseout', function () {
     $(this).animate({
       opacity: 1.1,
       marginLeft: 0
     }, 1000);
   });
   
   // カルーセル
   $('.carousel').slick({
     autoplay: true,
     dots: true,
     infinite: true,
     autoplaySpeed: 5000,
     arrows: false,
   });
 
 });

