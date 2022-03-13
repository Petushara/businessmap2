var ball = document.getElementById('map');

    function addOnWheel(ball, handler) {
      if (ball.addEventListener) {
        if ('onwheel' in document) {
          // IE9+, FF17+
          ball.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
          // устаревший вариант события
          ball.addEventListener("mousewheel", handler);
        } else {
          // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
          ball.addEventListener("MozMousePixelScroll", handler);
        }
      } else { // IE8-
        ball.attachEvent("onmousewheel", handler);
      }
    }

    var scale = 1.0

    addOnWheel(ball, function(e) {

      e = e || window.event;

      var delta = e.deltaY || e.detail || e.wheelDelta;

      scale += (delta * 0.0005) * scale

      if(scale > 6.0) scale = 6.0
      else if(scale < 0.5) scale = 0.5

      ball.style.transform = "scale(" + scale + ", " + scale + ")"

      // отменим прокрутку
      e.preventDefault();
    });