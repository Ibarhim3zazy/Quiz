left_time_min = 29;
left_time_sec = 60;
var sto;
function start_qiuz(){
  left_time_sec--;
  if (left_time_sec == 0) {
    left_time_min--;
  }
  sto = setTimeout(start_qiuz,1000);
  document.getElementById('timer').innerHTML = Math.floor(left_time_min) +" : "+ left_time_sec;
  document.getElementById('start').style.transform = "translateY(-100%)";
  document.getElementById('take_quiz').style.display = "block";
      if(left_time_sec==0)
				{
          left_time_sec = 60;
				}
        if(left_time_min==-1 && left_time_sec==60)
  				{
            result();
            left_time_min = 0;
            left_time_sec = 0;
            document.getElementById('timer').innerHTML = Math.floor(left_time_min) +" : "+ left_time_sec;
  				}
}
n = 1;
function next(){
  document.getElementById('q'+n).style.display = "none";
  n+=1;
  document.getElementById('left_arrow').style.opacity = "1";
  if (n == 21) {
    n = 20;
  }
  else if (n ==20) {
    document.getElementById('right_arrow').style.opacity = ".2";
  }
  document.getElementById('q'+n).style.display = "block";
  document.getElementById('current_q').innerHTML = n;
}
function previus(){
  document.getElementById('q'+n).style.display = "none";
  n-=1;
  document.getElementById('right_arrow').style.opacity = "1";
  if (n == 0) {
    n = 1;
  }
  else if (n ==1) {
    document.getElementById('left_arrow').style.opacity = ".2";
  }
  document.getElementById('q'+n).style.display = "block";
  document.getElementById('current_q').innerHTML = n;
}
function ans_a(x){
    document.getElementById(x).style.backgroundColor = "#cccccc";
    document.getElementById('b'+n).style.backgroundColor = "#fff";
    document.getElementById('c'+n).style.backgroundColor = "#fff";
    document.getElementById('d'+n).style.backgroundColor = "#fff";
    document.getElementById('radio_a'+n).checked = true;
}
function ans_b(x){
    document.getElementById(x).style.backgroundColor = "#ccc";
    document.getElementById('a'+n).style.backgroundColor = "#fff";
    document.getElementById('c'+n).style.backgroundColor = "#fff";
    document.getElementById('d'+n).style.backgroundColor = "#fff";
    document.getElementById('radio_b'+n).checked = true;
}
function ans_c(x){
    document.getElementById(x).style.backgroundColor = "#ccc";
    document.getElementById('b'+n).style.backgroundColor = "#fff";
    document.getElementById('a'+n).style.backgroundColor = "#fff";
    document.getElementById('d'+n).style.backgroundColor = "#fff";
    document.getElementById('radio_c'+n).checked = true;
}
function ans_d(x){
    document.getElementById(x).style.backgroundColor = "#ccc";
    document.getElementById('b'+n).style.backgroundColor = "#fff";
    document.getElementById('c'+n).style.backgroundColor = "#fff";
    document.getElementById('a'+n).style.backgroundColor = "#fff";
    document.getElementById('radio_d'+n).checked = true;
}
r=0;
function result(){
  clearTimeout(sto);
  document.getElementById('start-b').style.display = "none";
  document.getElementById('Finish').style.display = "block";
  document.getElementById('start').style.transform = "translateY(0%)";
  document.getElementById('take_quiz').style.display = "none";
  $(document).ready(function(){
    $('.correctA').each(function() {

  if ($(this).css("backgroundColor") == "rgb(204, 204, 204)") {
      r++
      $(this).css("background-color", "#9BE89B");
    };
    document.getElementById('deg').innerHTML = r;
  });
  $('.incorrectA').each(function() {
    if ($(this).css("backgroundColor") == "rgb(204, 204, 204)") {
        $(this).css("background-color", "#FF9494");
    };
  });
});
}
function review(){
  document.getElementById('start').style.transform = "translateY(-100%)";
  document.getElementById('take_quiz').style.display = "block";
  // document.getElementsByClassName('Answer').style.pointerEvents = "none";
  document.getElementById('stop_quiz').style.pointerEvents = "none";
  document.getElementById('Finish_quiz').style.display = "none";
}
