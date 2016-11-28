$(document).ready(function(){
  $(document).keydown(function(e){
    if (e.keyCode == 37) {
      //当按下的按键是左方向键
      left_move('plane');
    }else if(e.keyCode == 38){
      //当按下的按键是上方向键
      up_move('plane');

    }else if(e.keyCode == 39){
      //当按下的按键是右方向键
      right_move('plane');

    }else if(e.keyCode == 40){
      //当按下的按键是下方向键
      down_move('plane');

    }

    if (e.keyCode == 32) {
      //当按下空格键
      shoot_bullet('plane');
    }

  })

  //左移动函数
  function left_move(move_id){
    var x = $('#' + move_id).offset().left;
    $('#' + move_id).animate({
      left : '-=' + x + 'px'
    },
    '9'
    );
  }

  //右移动函数
  function right_move(move_id){
    var x = $('#' + move_id).offset().left;
    var winx = $(window).width();
    var w = $('#' + move_id + ' img').width();
    $('#' + move_id).animate({
      left : '+=' + (winx - w - x) + 'px'
    },
    '9'
    );
  }

  //向上移动函数
  function up_move(move_id){
    var y = $('#' + move_id).offset().top;
    $('#' + move_id).animate({
      top : '-=' + y + 'px'
    },
    '9'
    )
  }

  //向下移动函数
  function down_move(move_id){
    var y = $('#' + move_id).offset().top;
    var h = $('#' + move_id + ' img').height();
    var winy = $(window).height();
    $('#' + move_id).animate({
      top : '+=' + (winy -y - h) + 'px'
    },
    '9'
    )
  }

  //当放开按键
  $(document).keyup(function(e){
    $('#plane').stop(true);
  })


  function shoot_bullet(move_id){
    var plane = $('#' + move_id).offset();
    var w = $('#' + move_id + ' img').width();
    var winy = $(window).height();
    $('#bullet').show().css({top:plane.top, left:plane.left+(w/2)});
    $('#bullet').animate({top:'-=' + winy + 'px'}, 'slow')
    $('#shoot_audio')[0].play();
  }


})