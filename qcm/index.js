$(document).ready(function(){
var note=0;
$('#envoyer').click(function(){
    valid=true;
     
    //la coleur orange
       let result=$('input[name="bootstrap"]:checked') ;
    if(result.length==0)
      {    
     $("#q1").css("color","orange");
        valid =false;
      }
    else{
    //la couleur des questions
    let r = $("input[name='bootstrap']:checked").val();
    if(r=="2011"){
    $("#q1").css( "color", "green");
    note++;
    
    valid=false;
    }else{
    $("#q1").css("color","red");
    valid=false;
    }
    //la couleur des répances
    $("#q12011").css("color","green");
    if(r=="2006")
    {
      $("#q12006").css("color","red");
    }else if(r=="2013")
    $("#q12013").css("color","red");
    }
   return valid;
   
});
// pour question de jquery 
$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="jquery"]:checked') ;
  if(result.length==0)
    {    
   $("#q2").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='jquery']:checked").val();
  if(r=="2006"){
  $("#q2").css( "color", "green");
  note++;
 
  valid=false;
  }else{
  $("#q2").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q22006").css("color","green");
  if(r=="2007")
  {
    $("#q22007").css("color","red");
  }else if(r=="2005")
  $("#q22005").css("color","red");
  }
 return valid;
 
});
 //la question pour laravel
$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="laravel"]:checked') ;
  if(result.length==0)
    {    
   $("#q3").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='laravel']:checked").val();
  if(r=="2011"){
  $("#q3").css( "color", "green");
  note++;

  valid=false;
  }else{
  $("#q3").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q32011").css("color","green");
  if(r=="2012")
  {
    $("#q32012").css("color","red");
  }else if(r=="2010")
  $("#q32010").css("color","red");
  }
 return valid;
 
});
//la question pour react

$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="react"]:checked') ;
  if(result.length==0)
    {    
   $("#q4").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='react']:checked").val();
  if(r=="2013"){
  $("#q4").css( "color", "green");
  note++;
  
  valid=false;
  }else{
  $("#q4").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q42013").css("color","green");
  if(r=="2011")
  {
    $("#q42011").css("color","red");
  }else if(r=="2009")
  $("#q42009").css("color","red");
  }
 return valid;
 
});
//la derniere question

$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="qcm"]:checked') ;
  if(result.length==0)
    {    
   $("#q5").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='qcm']:checked").val();
  if(r=="oui"){
  $("#q5").css( "color", "green");
  note++;

  valid=false;
  }else{
  $("#q5").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q5oui").css("color","green");
  if(r=="non")
  {
    $("#q5non").css("color","red");
  }else if(r=="both")
  $("#q5both").css("color","red");
  }
  $("#q6").html("votre note est: "+note+"/5");
 return valid;
 
});


});