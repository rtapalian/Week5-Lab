/*Richard Tapalian
  SE240
  Week 5 Lab
  08/21/2013
*/  
		
			/*This is the hover function.  The first animation moves the button up and the second animation moves the button down*/
			$( "li" ).hover(function () {$(this).animate({"margin-top": "-10px"});},function(){$(this).animate({"margin-top":"10px"});});
			
			/*This is the operator that adds the contentbox styling to all for nav boxes*/
			$("#nav1,#nav2,#nav3,#nav4").addClass("contentBox");
			
			/*These four functions show and hide the text boxes for the four buttons.  When one is clicked the others disappear.*/ 
		function changenav1 (){	
			$("#nav1").show(500);//This shows the appropriate nav box
			$("#nav2,#nav3,#nav4").hide(500);//This hides the other nav boxes
			}
			$(".button-color-1").click(changenav1);//This runs the function when the button is clicked
			
			
		function changenav2 (){	
			$("#nav2").show(500);//This shows the appropriate nav box
			$("#nav1,#nav3,#nav4").hide(500);//This hides the other nav boxes
			}
			$(".button-color-2").click(changenav2);//This runs the function when the button is clicked
			
			
		function changenav3 (){	
			$("#nav3").show(500);//This shows the appropriate nav box
			$("#nav1,#nav2,#nav4").hide(500);//This hides the other nav boxes
			}
			$(".button-color-3").click(changenav3);//This runs the function when the button is clicked
			
		function changenav4 (){	
			$("#nav4").show(500);//This shows the appropriate nav box
			$("#nav1,#nav2,#nav3").hide(500);//This hides the other nav boxes
			}
			$(".button-color-4").click(changenav4);//This runs the function when the button is clicked
			
	
