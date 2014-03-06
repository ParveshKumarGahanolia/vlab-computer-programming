<script>

	
	function displayResultValue(day_radio){
		document.getElementById("text_field_id").value=day_radio;
		document.getElementById("submitDayButten").disabled = false;
		document.getElementById("startButton").style.display="block";
		document.getElementById("nextButton").style.display="none";
	}

	function getValueFromText(){
		var valueOfTextField = document.getElementById("text_field_id").value;
		if ( isNaN(valueOfTextField)){
			alert("Enter Numeric Values Only");
			return false;
		}else{
			document.getElementById("idOfDay").innerHTML = valueOfTextField;
			document.getElementById("startButton").disabled = false;	
		}
		return valueOfTextField;
	}

	function functionSwitchifelse(){
		var list_of_case = document.getElementById("drop_down_list_option");
		var selected_case = list_of_case.options[list_of_case.selectedIndex].text
		return selected_case;
	}



	function functionWithStartButten(){
		document.getElementById("submitDayButten").disabled = true;
		document.getElementById("startButton").style.display="none";
		document.getElementById("nextButton").style.display='block';
		var firstChildId = childNode();
		changeColor(firstChildId);
	}

	function childNode(){
		var node = document.getElementById("switchCase_id");
		var allChild = node.childNodes;
		var firstChildId = allChild[1].id;
		return firstChildId;
	}

	function nextChildNode(id){
		var nextChild1 = document.getElementById(id).nextSibling;
		var nextChild2 = nextChild1.nextSibling;
		var nextChild = nextChild2.id;
		return nextChild; 
	}

	function previousChildNode(id){
		var previousChild1 = document.getElementById(id).previousSibling;
		var previousChild2 = previousChild1.previousSibling;
		var previousChild = previousChild2.id;
		return previousChild;
	}

	function changeColor(id){
		
		var elementbyid = document.getElementById(id);
		elementbyid.style.color="#ff0000";
		elementbyid.setAttribute('name', 'someName');
		
	}

	// function changeName(id){
	// 	var elementbyid = document.getElementById(id);
	// 	elementbyid.setAttribute('name', 'someName');
	// }

	function getLastChangedName(){
		var element = document.getElementsByName("someName");
		var elementId = element[0].id;
		var element1 = document.getElementById(elementId);
		element1.setAttribute('name', 'name');
		return elementId;

	}
	
	function switchMonday(){
		changeColor("case1_id");
		document.getElementById("monday_images").style.opacity = "1";
	}
	
	function switchTuesday(){
		changeColor("case2_id");
		document.getElementById("tuesday_images").style.opacity = "1";
	}

	function switchWednesday(){
		changeColor("case3_id");
		document.getElementById("wednesday_images").style.opacity = "1";
	}

	function switchThursday(){
		changeColor("case4_id");
		document.getElementById("thursday_images").style.opacity = "1";
	}

	function switchFriday(){
		changeColor("case5_id");
		document.getElementById("friday_images").style.opacity = "1";
	}

	function switchSaturday(){
		changeColor("case6_id");
		document.getElementById("saturday_images").style.opacity = "1";
	}

	function switchSunday(){
		changeColor("case7_id");
		document.getElementById("sunday_images").style.opacity = "1";
	}

	function switchDefault(){
		changeColor("default_id");
	}

	function workingDay(){
		changeColor("default_id");
	}

	function holiday(){
		changeColor("workingday_id");
	}
	
	function functionWithNextButten(){
			
		var selected_case = functionSwitchifelse();
		var inputNumber = Number(getValueFromText());

		var currentChildId = getLastChangedName();
		
		currentChildId = nextChildNode(currentChildId);
		//alert(document.getElementById(currentChildId).className);
		
		
		if(currentChildId !== "case1_id" && currentChildId !== "case2_id" && currentChildId !== "case3_id" && currentChildId !== "case4_id" && currentChildId !== "case5_id" && currentChildId !== "case6_id" && currentChildId !== "case7_id" && currentChildId !== "default_id" && currentChildId !== "holiday_id"){
			changeColor(currentChildId);        
		}else if (true) {
       		switch (inputNumber){
				case 1:
  					switchMonday();
  					break;
				case 2:
  					switchTuesday();
  					break;
				case 3:
  					switchWednesday();
  					break;
				case 4:
  					switchThursday();
  					break;
				case 5:
  					switchFriday();
  					break;
				case 6:
  					switchSaturday();
  					break;
				case 7:
  					switchSunday();
  					break;
  				default:
  					switchDefault();
        			break;
			}
		} 
	







	}
	</script>
