var admin=0;
function makeadmin(){
  document.getElementById("become_admin").style.display = "none";
  document.getElementById("leave_admin").style.display = "block";
  admin=1;
}
function leaveadmin(){
  document.getElementById("become_admin").style.display = "block";
  document.getElementById("leave_admin").style.display = "none";
  admin=0;
}
var body = document.getElementById('top');
var except1 = document.getElementById('div_content1');
var except2 = document.getElementById('div_content2');
var except3 = document.getElementById('div_content3');
var content_visible1=1;
var editor_visible1=0;
var content_visible2=1;
var editor_visible2=0;
var content_visible3=1;
var editor_visible3=0;
body.addEventListener("click", function () {
    //alert("wrapper");
    if(content_visible1==0&&editor_visible1==1){//to leave you dont need admin right
      document.getElementById("div_content1").style.display = "block";
      document.getElementById("div_content1_edit").style.display = "none";
      var contents1=document.getElementById("div_content1_edit").value;
      if(typeof(Storage) !== "undefined") {
          localStorage.div_contents1 = contents1;

      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
      }
      //console.log(contents);
      document.getElementById("div_content1").innerHTML = contents1;
      content_visible1=1;
      editor_visible1=0;
    }
    if(content_visible2==0&&editor_visible2==1){//to leave you dont need admin right
      document.getElementById("div_content2").style.display = "block";
      document.getElementById("div_content2_edit").style.display = "none";
      var contents2=document.getElementById("div_content2_edit").value;
      if(typeof(Storage) !== "undefined") {
          localStorage.div_contents2 = contents2;

      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
      }
      //console.log(contents);
      document.getElementById("div_content2").innerHTML = contents2;
      content_visible2=1;
      editor_visible2=0;
    }
    if(content_visible3==0&&editor_visible3==1){//to leave you dont need admin right
      document.getElementById("div_content3").style.display = "block";
      document.getElementById("div_content3_edit").style.display = "none";
      var contents3=document.getElementById("div_content3_edit").value;
      if(typeof(Storage) !== "undefined") {
          localStorage.div_contents3 = contents3;

      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
      }
      //console.log(contents);
      document.getElementById("div_content3").innerHTML = contents3;
      content_visible3=1;
      editor_visible3=0;
    }
    
}, false);
except1.addEventListener("click", function (ev) {
    //alert("except");
    if(content_visible1==1&&editor_visible1==0&&admin==1){//to enter you need admin right
      document.getElementById("div_content1_edit").style.display = "block";
      document.getElementById("div_content1_edit").focus();
      var contents1=document.getElementById("div_content1").innerHTML;
      console.log(contents1);
      document.getElementById("div_content1").style.display = "none";
      document.getElementById("div_content1_edit").value = contents1;
      content_visible1=0;
      editor_visible1=1;

    }
    ev.stopPropagation();
}, false);

except2.addEventListener("click", function (ev) {
    //alert("except");
    if(content_visible2==1&&editor_visible2==0&&admin==1){//to enter you need admin right
      document.getElementById("div_content2_edit").style.display = "block";
      document.getElementById("div_content2_edit").focus();
      var contents2=document.getElementById("div_content2").innerHTML;
      console.log(contents2);
      document.getElementById("div_content2").style.display = "none";
      document.getElementById("div_content2_edit").value = contents2;
      content_visible2=0;
      editor_visible2=1;

    }
    ev.stopPropagation();
}, false);


except3.addEventListener("click", function (ev) {
    //alert("except");
    if(content_visible3==1&&editor_visible3==0&&admin==1){//to enter you need admin right
      document.getElementById("div_content3_edit").style.display = "block";
      document.getElementById("div_content3_edit").focus();
      var contents3=document.getElementById("div_content3").innerHTML;
      console.log(contents3);
      document.getElementById("div_content3").style.display = "none";
      document.getElementById("div_content3_edit").value = contents3;
      content_visible3=0;
      editor_visible3=1;

    }
    ev.stopPropagation();
}, false);



if(typeof(Storage) !== "undefined") {
    if (localStorage.div_contents1) {
      console.log(localStorage.div_contents1);
      document.getElementById("div_content1").innerHTML = localStorage.div_contents1;
    }
    /*else{
      document.getElementById("div_content1").innerHTML ="If no background color is set on the Element, or its background color is set to 'transparent', the default end value will be white.";
    }*/
    if (localStorage.div_contents2) {
      console.log(localStorage.div_contents2);
      document.getElementById("div_content2").innerHTML = localStorage.div_contents2;
    }
    /*else{
      document.getElementById("div_content2").innerHTML ="hello";
    }*/
    if (localStorage.div_contents3) {
      console.log(localStorage.div_contents3);
      document.getElementById("div_content3").innerHTML = localStorage.div_contents3;
    }
    /*else{
      document.getElementById("div_content3").innerHTML ="hello world";
    }*/
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }