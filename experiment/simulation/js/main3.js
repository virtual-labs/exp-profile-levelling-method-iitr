var objImage = null;
function init() {
        objImage = document.getElementById("tri_img");
        
    }
 
    function getKeyAndMove(e) {
        var key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
                moveLeft();
                break;
            case 38: //Up arrow key
                moveUp();
                break;
            case 39: //right arrow key
                moveRight();
                break;
            case 40: //down arrow key
                moveDown();
                break;
                case 83: //down arrow key
                setting();
                break;
        }
    }
  
    function getKeyAndMove(e) {
        var key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
                moveLeft();
                break;
            case 38: //Up arrow key
                moveUp();
                break;
            case 39: //right arrow key
                moveRight();
                break;
            case 40: //down arrow key
                moveDown();
                break;
                
        }
    }
    function moveLeft() {
        objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
        
    }
    function moveUp() {
        objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
        

    }
    function moveRight() {
        objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
       
    }
    function moveDown() {
        objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
        
    }
    window.onload = init;
  
    function start()
       {
        document.getElementById("st_main").disabled= true;
        document.getElementById("staff_maina").style.display = "inline";
        document.getElementById("t").style.visibility = "visible";
        document.getElementById("v11").style.visibility = "visible";
        document.getElementById("v11").style.backgroundColor = "blanchedalmond";
        document.getElementById("table_head").style.display = "inline";
        document.getElementById("pointa").style.display = "inline";
        document.getElementById("l1").style.display = "inline";
       }
       function viewa()
       {
        document.getElementById("v12").style.visibility = "visible";
        document.getElementById("v12").style.backgroundColor = "#FFF8DC";
        document.getElementById("staff_maina").style.display = "none";
        setTimeout(function(){  document.getElementById("point1").style.display = "inline"; }, 1500);
        setTimeout(function(){  document.getElementById("point2").style.display = "inline";}, 1500);
        setTimeout(function(){  document.getElementById("point3").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("point4").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("point5").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("point6").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("point7").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("point8").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("point9").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("l2").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("l3").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("l4").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("l5").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("l7").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("l9").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("l10").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("l11").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("l12").style.display = "inline";}, 1500);
        setTimeout(function(){ document.getElementById("next_main").style.display = "inline";}, 3000);
        setTimeout(function(){ swal("click on the Next button");}, 3000);

      }
       function viewb()
       {
       
        document.getElementById("v22").style.visibility = "visible";
        document.getElementById("v22").style.backgroundColor = "blanchedalmond";

        if( document.getElementById("v22").style.visibility === "visible" && document.getElementById("v32").style.visibility === "visible" && document.getElementById("v42").style.visibility === "visible" && document.getElementById("v52").style.visibility === "visible")
        {
            setTimeout(function(){ swal("click on the Next button");}, 500);
            document.getElementById("next_main").style.display="none";
            document.getElementById("next_main2").style.display="inline";
        }
      
       }
       function viewc()
       {
      
        document.getElementById("v32").style.visibility = "visible";
        document.getElementById("v32").style.backgroundColor = "#FFF8DC";
        if( document.getElementById("v22").style.visibility === "visible" && document.getElementById("v32").style.visibility === "visible" && document.getElementById("v42").style.visibility === "visible" && document.getElementById("v52").style.visibility === "visible")
        {
            setTimeout(function(){ swal("click on the Next button");}, 500);
            document.getElementById("next_main").style.display="none";
            document.getElementById("next_main2").style.display="inline";
        }
        
       }
      
       function viewd()
       {
        
        document.getElementById("v42").style.visibility = "visible";
        document.getElementById("v42").style.backgroundColor = "blanchedalmond";
        if( document.getElementById("v22").style.visibility === "visible" && document.getElementById("v32").style.visibility === "visible" && document.getElementById("v42").style.visibility === "visible" && document.getElementById("v52").style.visibility === "visible")
        {
            setTimeout(function(){ swal("click on the Next button");}, 500);
            document.getElementById("next_main").style.display="none";
            document.getElementById("next_main2").style.display="inline";
        }
       
       }
       
       function viewe()
       {
        document.getElementById("v52").style.visibility = "visible";
        document.getElementById("v52").style.backgroundColor = "#FFF8DC";
       
        if( document.getElementById("v22").style.visibility === "visible" && document.getElementById("v32").style.visibility === "visible" && document.getElementById("v42").style.visibility === "visible" && document.getElementById("v52").style.visibility === "visible")
        {
            setTimeout(function(){ swal("click on the Next button");}, 500);
            document.getElementById("next_main").style.display="none";
            document.getElementById("next_main2").style.display="inline";
        }
   
       
       }
       function viewf(){
        if( document.getElementById("v62").style.visibility === "visible" && document.getElementById("v72").style.visibility === "visible" && document.getElementById("v92").style.visibility === "visible" && document.getElementById("v102").style.visibility === "visible" && document.getElementById("v112").style.visibility === "visible" && document.getElementById("v122").style.visibility === "visible")
        {
            setTimeout(function(){ swal("click on the Next button");}, 500);
           
        }
        else 
        if(document.getElementById("v71").style.visibility === "visible")
        {
            document.getElementById("v62").style.visibility = "visible";
            document.getElementById("v62").style.backgroundColor = "blanchedalmond";
        }
         else{
            document.getElementById("v63").style.visibility = "visible";
            document.getElementById("v63").style.backgroundColor = "blanchedalmond";
            document.getElementById("v64").style.visibility = "visible";
            document.getElementById("v64").style.backgroundColor = "#FFF8DC";
            setTimeout(function(){ swal("click on the autolevel machine to move it at location L2");}, 500);
            document.getElementById("tri_img_main").style.pointerEvents ="auto"; 
            document.getElementById("autolevel_main").style.pointerEvents ="auto";
            document.getElementById("staff_mainf").style.display = "none";

           } 
    
      
       
       }
       function viewg(){
        if( document.getElementById("v62").style.visibility === "visible" && document.getElementById("v72").style.visibility === "visible" && document.getElementById("v92").style.visibility === "visible" && document.getElementById("v102").style.visibility === "visible" && document.getElementById("v112").style.visibility === "visible" && document.getElementById("v122").style.visibility === "visible")
        {
            setTimeout(function(){ swal("click on the Next button");}, 500);
        }
       
        document.getElementById("v72").style.visibility = "visible";
        document.getElementById("v72").style.backgroundColor = "blanchedalmond";
       }
       function viewi(){
        if( document.getElementById("v62").style.visibility === "visible" && document.getElementById("v72").style.visibility === "visible" && document.getElementById("v92").style.visibility === "visible" && document.getElementById("v102").style.visibility === "visible" && document.getElementById("v112").style.visibility === "visible" && document.getElementById("v122").style.visibility === "visible")
        {
            setTimeout(function(){ swal("click on the Next button");}, 500);
           
        }
        document.getElementById("v92").style.visibility = "visible";
        document.getElementById("v92").style.backgroundColor = "#FFF8DC";
    }
    function viewj(){
        if( document.getElementById("v62").style.visibility === "visible" && document.getElementById("v72").style.visibility === "visible" && document.getElementById("v92").style.visibility === "visible" && document.getElementById("v102").style.visibility === "visible" && document.getElementById("v112").style.visibility === "visible" && document.getElementById("v122").style.visibility === "visible")
        {
            setTimeout(function(){ swal("click on the Next button");}, 500);
           
        }
        document.getElementById("v102").style.visibility = "visible";
        document.getElementById("v102").style.backgroundColor = "blanchedalmond";
    }
    function viewk(){
        if( document.getElementById("v62").style.visibility === "visible" && document.getElementById("v72").style.visibility === "visible" && document.getElementById("v92").style.visibility === "visible" && document.getElementById("v102").style.visibility === "visible" && document.getElementById("v112").style.visibility === "visible" && document.getElementById("v122").style.visibility === "visible")
        {
            setTimeout(function(){ swal("click on the Next button");}, 500);
           
        }
        document.getElementById("v112").style.visibility = "visible";
        document.getElementById("v112").style.backgroundColor = "#FFF8DC";
    }
    function viewl(){
        if( document.getElementById("v62").style.visibility === "visible" && document.getElementById("v72").style.visibility === "visible" && document.getElementById("v92").style.visibility === "visible" && document.getElementById("v102").style.visibility === "visible" && document.getElementById("v112").style.visibility === "visible" && document.getElementById("v122").style.visibility === "visible")
        {
            setTimeout(function(){ swal("click on the Next button");}, 500);
           
        }
        document.getElementById("v122").style.visibility = "visible";
        document.getElementById("v122").style.backgroundColor = "blanchedalmond";
    }
    function viewh(){
        document.getElementById("v82").style.visibility = "visible";
        document.getElementById("v82").style.backgroundColor = "#FFF8DC";

        if(document.getElementById("v82").style.visibility === "visible" && document.getElementById("v132").style.visibility === "visible" )
        {
            setTimeout(function(){ swal("click on the CALCULATE button");}, 500);
            setTimeout(function(){ document.getElementById("cal").style.display = "inline";}, 500);
        }
    }
    function viewm(){
        document.getElementById("v132").style.visibility = "visible";
        document.getElementById("v132").style.backgroundColor = "#FFF8DC";
        if(document.getElementById("v82").style.visibility === "visible" && document.getElementById("v132").style.visibility === "visible" )
        {
            setTimeout(function(){ swal("click on the CALCULATE button");}, 500);
            setTimeout(function(){ document.getElementById("cal").style.display = "inline";}, 500);
            
        }
        
    }
      function n(){
                    if(document.getElementById("v11").style.visibility === "visible")
                    {
                            document.getElementById("staff_mainb").style.display = "inline";
                            document.getElementById("staff_mainc").style.display = "inline";
                            document.getElementById("staff_maind").style.display = "inline";
                            document.getElementById("staff_maine").style.display = "inline";
                           
                            document.getElementById("v21").style.visibility = "visible";
                            document.getElementById("v21").style.backgroundColor = "#FFF8DC";     document.getElementById("v21").style.visibility = "visible";
                            document.getElementById("v21").style.backgroundColor = "#FFF8DC";
                            document.getElementById("v31").style.visibility = "visible";
                            document.getElementById("v31").style.backgroundColor = "blanchedalmond";
                            document.getElementById("v41").style.visibility = "visible";
                            document.getElementById("v41").style.backgroundColor = "#FFF8DC";
                            document.getElementById("v51").style.visibility = "visible";
                            document.getElementById("v51").style.backgroundColor = "blanchedalmond";
                            document.getElementById("next_main").disabled= true;
                    }
                   
                    }
     function n2(){
        if( document.getElementById("v22").style.visibility === "visible" && document.getElementById("v32").style.visibility === "visible" && document.getElementById("v42").style.visibility === "visible" && document.getElementById("v52").style.visibility === "visible")
        {
            document.getElementById("staff_mainb").style.display = "none";
            document.getElementById("staff_mainc").style.display = "none";
            document.getElementById("staff_maind").style.display = "none";
            document.getElementById("staff_maine").style.display = "none";
            document.getElementById("staff_mainf").style.display = "inline";
            document.getElementById("pointtp1").style.display = "inline";
            document.getElementById("l6").style.display = "inline";
            document.getElementById("v61").style.visibility = "visible";
            document.getElementById("v61").style.backgroundColor = "#FFF8DC";
        }
        if( document.getElementById("v62").style.visibility === "visible" && document.getElementById("v72").style.visibility === "visible" && document.getElementById("v92").style.visibility === "visible" && document.getElementById("v102").style.visibility === "visible" && document.getElementById("v112").style.visibility === "visible" && document.getElementById("v122").style.visibility === "visible")
        {
            
            document.getElementById("staff_mainf").style.display = "none";
            document.getElementById("staff_maing").style.display = "none";
            document.getElementById("staff_maini").style.display = "none";
            document.getElementById("staff_mainj").style.display = "none";
            document.getElementById("staff_maink").style.display = "none";
            document.getElementById("staff_mainl").style.display ="none";
            document.getElementById("staff_mainm").style.display ="inline";
            setTimeout(function(){ document.getElementById("staff_mainh").style.display ="inline";}, 1000);
            document.getElementById("staff_mainh").style.display ="inline";
            document.getElementById("v81").style.visibility = "visible";
            document.getElementById("v81").style.backgroundColor = "#FFF8DC";
            document.getElementById("v131").style.visibility = "visible";
            document.getElementById("v131").style.backgroundColor = "blanchedalmond";
            document.getElementById("l8").style.display = "inline";
            document.getElementById("l13").style.display = "inline";
            document.getElementById("pointx").style.display = "inline";
            document.getElementById("pointc").style.display = "inline";
        }
        
       
}
      function view()
      {
            document.getElementById("t").style.display = "inline";
            document.getElementById("alidade_img").style.display = "none";
            document.getElementById("save").disabled = true;
            document.getElementById("finish").style.display = "inline";
      }

     function shift()
     {
        document.getElementById("tri_img_main").style.display = "none";
        document.getElementById("autolevel_main").style.display = "none";
        document.getElementById("tri_img_main2").style.display = "inline";
        document.getElementById("autolevel_main2").style.display = "inline";
        document.getElementById("staff_mainf").style.display = "inline";
        document.getElementById("staff_maing").style.display = "inline";
        document.getElementById("staff_maini").style.display = "inline";
        document.getElementById("staff_mainj").style.display = "inline";
        document.getElementById("staff_maink").style.display = "inline";
        document.getElementById("staff_mainl").style.display ="inline";
        document.getElementById("v71").style.visibility = "visible";
        document.getElementById("v71").style.backgroundColor = "blanchedalmond";
        document.getElementById("v91").style.visibility = "visible";
        document.getElementById("v91").style.backgroundColor = "blanchedalmond";
        document.getElementById("v101").style.visibility = "visible";
        document.getElementById("v101").style.backgroundColor = "#FFF8DC";
        document.getElementById("v111").style.visibility = "visible";
        document.getElementById("v111").style.backgroundColor = "blanchedalmond";
        document.getElementById("v121").style.visibility = "visible";
        document.getElementById("v121").style.backgroundColor = "#FFF8DC";

     }

     function ele(){
        document.getElementById("c23").style.visibility = "visible";
        document.getElementById("c33").style.visibility = "visible";
        document.getElementById("c43").style.visibility = "visible";
        document.getElementById("c53").style.visibility = "visible";
        document.getElementById("c64").style.visibility = "visible";
        document.getElementById("c73").style.visibility = "visible";
        document.getElementById("c83").style.visibility = "visible";
        document.getElementById("c93").style.visibility = "visible";
        document.getElementById("c103").style.visibility = "visible";
        document.getElementById("c113").style.visibility = "visible";
        document.getElementById("c123").style.visibility = "visible";
        document.getElementById("t133").style.visibility = "visible";

        if(document.getElementById("c23").style.visibility === "visible" && document.getElementById("c33").style.visibility === "visible" &&  document.getElementById("c43").style.visibility === "visible"
         && document.getElementById("c53").style.visibility === "visible" && 
        document.getElementById("c64").style.visibility === "visible" &&
        document.getElementById("c73").style.visibility ===  "visible" &&
        document.getElementById("c83").style.visibility ===  "visible" &&
        document.getElementById("c93").style.visibility ===  "visible" &&
        document.getElementById("c103").style.visibility ===  "visible" &&
        document.getElementById("c113").style.visibility ===  "visible" &&
        document.getElementById("c123").style.visibility ===  "visible" &&
        document.getElementById("t133").style.visibility ===  "visible" && document.getElementById("c13").style.visibility === "visible" &&
        document.getElementById("c65").style.visibility === "visible" && document.getElementById("c14").style.visibility === "visible" &&
        document.getElementById("c24").style.visibility === "visible" &&
        document.getElementById("c34").style.visibility === "visible" &&
        document.getElementById("c44").style.visibility === "visible" &&
        document.getElementById("c54").style.visibility === "visible" &&
        document.getElementById("c66").style.visibility === "visible" &&
        document.getElementById("c74").style.visibility === "visible" &&
        document.getElementById("c84").style.visibility === "visible" &&
        document.getElementById("c94").style.visibility === "visible" &&
        document.getElementById("c104").style.visibility === "visible" &&
        document.getElementById("c114").style.visibility === "visible" &&
        document.getElementById("c124").style.visibility === "visible" &&
        document.getElementById("t134").style.visibility === "visible")
        {
            setTimeout(function(){  document.getElementById("t141").style.visibility = "visible"; }, 1000);  
        setTimeout(function(){  document.getElementById("t142").style.visibility = "visible";}, 1000);    
        setTimeout(function(){  document.getElementById("t143").style.visibility = "visible";}, 1000);   
        setTimeout(function(){  document.getElementById("t144").style.visibility = "visible";}, 1000);   
        setTimeout(function(){ swal("Click on finish Button");}, 2000);
        }

     }
     function hi(){
        document.getElementById("c13").style.visibility = "visible";
        document.getElementById("c65").style.visibility = "visible";
        if(document.getElementById("c23").style.visibility === "visible" && document.getElementById("c33").style.visibility === "visible" &&  document.getElementById("c43").style.visibility === "visible"
        && document.getElementById("c53").style.visibility === "visible" && 
       document.getElementById("c64").style.visibility === "visible" &&
       document.getElementById("c73").style.visibility ===  "visible" &&
       document.getElementById("c83").style.visibility ===  "visible" &&
       document.getElementById("c93").style.visibility ===  "visible" &&
       document.getElementById("c103").style.visibility ===  "visible" &&
       document.getElementById("c113").style.visibility ===  "visible" &&
       document.getElementById("c123").style.visibility ===  "visible" &&
       document.getElementById("t133").style.visibility ===  "visible" && document.getElementById("c13").style.visibility === "visible" &&
       document.getElementById("c65").style.visibility === "visible" && document.getElementById("c14").style.visibility === "visible" &&
       document.getElementById("c24").style.visibility === "visible" &&
       document.getElementById("c34").style.visibility === "visible" &&
       document.getElementById("c44").style.visibility === "visible" &&
       document.getElementById("c54").style.visibility === "visible" &&
       document.getElementById("c66").style.visibility === "visible" &&
       document.getElementById("c74").style.visibility === "visible" &&
       document.getElementById("c84").style.visibility === "visible" &&
       document.getElementById("c94").style.visibility === "visible" &&
       document.getElementById("c104").style.visibility === "visible" &&
       document.getElementById("c114").style.visibility === "visible" &&
       document.getElementById("c124").style.visibility === "visible" &&
       document.getElementById("t134").style.visibility === "visible")
       {
        setTimeout(function(){  document.getElementById("t141").style.visibility = "visible"; }, 1000);  
        setTimeout(function(){  document.getElementById("t142").style.visibility = "visible";}, 1000);    
        setTimeout(function(){  document.getElementById("t143").style.visibility = "visible";}, 1000);   
        setTimeout(function(){  document.getElementById("t144").style.visibility = "visible";}, 1000);   
        setTimeout(function(){ swal("Click on finish Button");}, 2000);
       }
    }
    function ri(){
        document.getElementById("c14").style.visibility = "visible";
        document.getElementById("c24").style.visibility = "visible";
        document.getElementById("c34").style.visibility = "visible";
        document.getElementById("c44").style.visibility = "visible";
        document.getElementById("c54").style.visibility = "visible";
        document.getElementById("c66").style.visibility = "visible";
        document.getElementById("c74").style.visibility = "visible";
        document.getElementById("c84").style.visibility = "visible";
        document.getElementById("c94").style.visibility = "visible";
        document.getElementById("c104").style.visibility = "visible";
        document.getElementById("c114").style.visibility = "visible";
        document.getElementById("c124").style.visibility = "visible";
        document.getElementById("t134").style.visibility = "visible";

        if(document.getElementById("c23").style.visibility === "visible" && document.getElementById("c33").style.visibility === "visible" &&  document.getElementById("c43").style.visibility === "visible"
        && document.getElementById("c53").style.visibility === "visible" && 
       document.getElementById("c64").style.visibility === "visible" &&
       document.getElementById("c73").style.visibility ===  "visible" &&
       document.getElementById("c83").style.visibility ===  "visible" &&
       document.getElementById("c93").style.visibility ===  "visible" &&
       document.getElementById("c103").style.visibility ===  "visible" &&
       document.getElementById("c113").style.visibility ===  "visible" &&
       document.getElementById("c123").style.visibility ===  "visible" &&
       document.getElementById("t133").style.visibility ===  "visible" && document.getElementById("c13").style.visibility === "visible" &&
       document.getElementById("c65").style.visibility === "visible" && document.getElementById("c14").style.visibility === "visible" &&
       document.getElementById("c24").style.visibility === "visible" &&
       document.getElementById("c34").style.visibility === "visible" &&
       document.getElementById("c44").style.visibility === "visible" &&
       document.getElementById("c54").style.visibility === "visible" &&
       document.getElementById("c66").style.visibility === "visible" &&
       document.getElementById("c74").style.visibility === "visible" &&
       document.getElementById("c84").style.visibility === "visible" &&
       document.getElementById("c94").style.visibility === "visible" &&
       document.getElementById("c104").style.visibility === "visible" &&
       document.getElementById("c114").style.visibility === "visible" &&
       document.getElementById("c124").style.visibility === "visible" &&
       document.getElementById("t134").style.visibility === "visible")
       {
        setTimeout(function(){  document.getElementById("t141").style.visibility = "visible"; }, 1000);  
        setTimeout(function(){  document.getElementById("t142").style.visibility = "visible";}, 1000);    
        setTimeout(function(){  document.getElementById("t143").style.visibility = "visible";}, 1000);   
        setTimeout(function(){  document.getElementById("t144").style.visibility = "visible";}, 1000);   
        setTimeout(function(){ swal("Click on finish Button");}, 2000);
       }
    }