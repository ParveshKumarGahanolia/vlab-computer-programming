//	* name: JavaScript
//  * author: Parvesh Kumar Gahanolia <parvesh@vlabs.ac.in>

window.model = {
inputNumber: 0,
valueOfX: 210,
valueOfY: 210,
}

window.view = {

	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},

	activateEvents: function() {
		this.addClickEvent('radio_buttton_1', function() { view.setValue('text_field_id', this.value) });
		this.addClickEvent('radio_buttton_2', function() { view.setValue('text_field_id', this.value) });
		this.addClickEvent('radio_buttton_3', function() { view.setValue('text_field_id', this.value) });
		this.addClickEvent('radio_buttton_4', function() { view.setValue('text_field_id', this.value) });
		this.addClickEvent('radio_buttton_5', function() { view.setValue('text_field_id', this.value) });
		this.addClickEvent('radio_buttton_6', function() { view.setValue('text_field_id', this.value) });
		this.addClickEvent('radio_buttton_7', function() { view.setValue('text_field_id', this.value) });
		this.addClickEvent('submitDayButton', function() { view.submitButtonSwitch() });
		this.addClickEvent('drop_down_list', function() { view.functionSwitchifelse() });
		this.addClickEvent('drop_down_list1', function() { view.functionSwitchifelse() });
		this.addClickEvent('startButton', function() { view.startButtonSwitch() });
		this.addClickEvent('nextButton', function() { view.nextButtonSwitch() });
		this.addClickEvent('resetButton', function() { view.resetButtonSwitch() });
		this.addClickEvent('position_drop_down', function() { view.replaceElement('control_flow_switch_experiment','Position_Point_control_flow') });
		this.addClickEvent('week_drop_down', function() { view.replaceElement('Position_Point_control_flow','control_flow_switch_experiment') });
		this.addClickEvent('if_else_list', function() { view.replaceElement('if_elseif_else_code','if_else_code') });
		this.addClickEvent('if_elseif_else_list', function() { view.replaceElement('if_else_code','if_elseif_else_code') });
		this.addClickEvent('save_if', function() { view.saveButtonIfElse() });
		this.addClickEvent('edit_if', function() { view.editButtonIfElse() });
		this.addClickEvent('start_if', function() { view.startButtonIfElse(), view.drawCircle(model.valueOfX, model.valueOfY), view.displayText('(x, y)', model.valueOfX + 10, model.valueOfY) });
		this.addClickEvent('stop_if', function() { view.stopButtonIfElse() });
		this.addClickEvent('next_if', function() { view.nextButtonIfElse() });
		
	},

	getSelectedLoopId: function(id) {
		var list_of_loop = document.getElementById(id);
		var selected_loop = list_of_loop.options[list_of_loop.selectedIndex].id;
		return selected_loop;
	},

 	setInnerHtml: function (id, innerHTML) {
 		document.getElementById(id).innerHTML = innerHTML;
 	},
	
    enableElement: function (id) {
    	document.getElementById(id).disabled = false;
    },

    disableElement: function (id) {
    	document.getElementById(id).disabled = true;
    },

    replaceElement: function (id1, id2) {
    	document.getElementById(id1).style.display = 'none';
    	document.getElementById(id2).style.display = 'block';  	 
    },

    setValue: function (id, value) {
		document.getElementById(id).value = value;
	},

	getValue: function (id) {
		var value = document.getElementById(id).value;
		return value;
	},

	applyColorRed: function (id, colorClass) {
		var elementbyid = document.getElementById(id);
		elementbyid.className += ' ' + colorClass;
	},

	removeColorRed: function (id, colorClass) {
		var elementbyid = document.getElementById(id);
		elementbyid.classList.remove(colorClass);
	},

	getFirstChildId: function (id) {
		var node = document.getElementById(id);
		var allChild = node.childNodes;
		var firstChildId = allChild[1].id;
		return firstChildId;
	},

	getNextChildId: function (id) {
		var nextChild1 = document.getElementById(id).nextSibling;
		var nextChild2 = nextChild1.nextSibling;
		var nextChildId = nextChild2.id;
		return nextChildId; 
	},

	getPreviousChildId: function (id) {
		var previousChild1 = document.getElementById(id).previousSibling;
		var previousChild2 = previousChild1.previousSibling;
		var previousChildId = previousChild2.id;
		return previousChildId;
	},

	getClassId: function (className) {
		var element = document.getElementsByClassName(className);
		var classId = element[0].id;
		return classId;		
	},

	getClassName: function (id) {
		var className = document.getElementById(id).className;
		return className;
	},

	changeOpacity: function (id) {
		document.getElementById(id).style.opacity = '1';
	},
	
	switchToDay: function (id, previousChildId, imagesId, innerHTMLId, innerHTML) {
		this.applyColorRed(id, 'redClass');
		this.removeColorRed(previousChildId, 'redClass');
		this.setInnerHtml(innerHTMLId, innerHTML);
		this.changeOpacity(imagesId);	
	},

	setInnerHtml: function (id, innerHTML) {
 		document.getElementById(id).innerHTML = innerHTML;
 	},

 	drawFillRectangle: function () {
 		var rect = document.getElementById('myCanvas').getContext('2d');
 		rect.fillStyle = '#FFFF99';
 		rect.fillRect (100, 100, 250, 300);
 		rect.strokeStyle = '#000000';
 		rect.rect(100, 100, 250, 300);
 		rect.stroke();	
 	},

  	drawCircle: function (x ,y) {
 		var circ = document.getElementById('myCanvas').getContext('2d');
 		circ.beginPath();
 		circ.fillStyle = '#000000'; 
 		circ.arc(x, y, 3, 0, 2 * Math.PI, true);
 		circ.fill();
 	},

    displayText: function (text1, x, y) {
    	var text = document.getElementById('myCanvas').getContext('2d');
       	text.font = 'italic 20px Arial';
		text.fillText(text1, x, y);
    },

    displayText1: function (text1, x, y, color) {
    	var text = document.getElementById('myCanvas').getContext('2d');
       	text.font = 'italic 20px Arial';
       	text.fillStyle = color;
		text.fillText(text1, x, y);		
    },

    displayFigures: function () {
    	this.drawFillRectangle();
    	this.drawCircle(100, 100);
		this.drawCircle(350, 100);
		this.drawCircle(100, 400);
		this.drawCircle(350, 400);
		this.displayText('(x1, y1)', 90, 90);
		this.displayText('(x2, y2)', 340, 90);
		this.displayText('(x3, y3)', 340, 420);
		this.displayText('(x4, y4)', 90, 420);
    },

	saveButtonIfElse: function () {
 		this.replaceElement('save_if', 'edit_if');
		this.getTextBoxValue('x_if', 'y_if');
		this.setInnerHtml('x_innerHTML', model.valueOfX);
		this.setInnerHtml('y_innerHTML', model.valueOfY);
 	},

 	editButtonIfElse: function () {
 		this.enableElement('x_if');
		this.enableElement('y_if');
		this.replaceElement('edit_if', 'save_if');
 	},

 	startButtonIfElse: function () {
 		this.replaceElement('start_if', 'stop_if');
		this.enableElement('next_if');
		var selected_loop = this.getSelectedLoopId('loop_list_if');

		if (selected_loop === 'if_else_list')
		{
			var firstChildId = this.getFirstChildId('if_else_code');
			this.applyColorRed(firstChildId, 'redClass');
		}
		if (selected_loop === 'if_elseif_else_list')
		{
			var firstChildId = this.getFirstChildId('if_elseif_else_code');
			this.applyColorRed(firstChildId, 'redClass');
		}
 	},

 	stopButtonIfElse: function () {
 		this.enableElement('save_if');
		this.enableElement('edit_if');
		this.replaceElement('stop_if', 'start_if');
		this.enableElement('loop_list_if');
 	},

 	nextButtonIfElse: function() {
  		var selected_loop = this.getSelectedLoopId('loop_list_if');
		if (selected_loop === 'if_else_list')
		{
			this.executionIfElse();
		}
		if (selected_loop === 'if_elseif_else_list')
		{
			this.executionIfElseIfElse();
		}
	},

	getTextBoxValue: function (idx, idy) {
    	var valueOfX = Number(document.getElementById(idx).value);
    	var valueOfY = Number(document.getElementById(idy).value);
    	if ((valueOfX == '' || valueOfY == '') || isNaN(valueOfX) || isNaN(valueOfY)) {
			alert('Enter Numeric Values Only');
			return false;
		}
		else
		{
			model.valueOfX = Number(valueOfX);
			model.valueOfY = Number(valueOfY);
		}
    },

	submitButtonSwitch: function () {
		var textFieldValue = this.getValue('text_field_id');
		if (textFieldValue === '' || isNaN(textFieldValue)) {
			alert('Enter Numeric Values Only');
			return false;
		} else {
			this.setInnerHtml('idOfDay', textFieldValue);
			this.enableElement('startButton');
			model.inputNumber = Number(textFieldValue);
		}		
	},

	startButtonSwitch: function () {
		var firstChildId = this.getFirstChildId('switchCase_id');
		this.applyColorRed(firstChildId, 'redClass');
		this.replaceElement('startButton', 'nextButton');	
	},

	resetButtonSwitch: function () {
   		location.reload(true);
   		document.getElementById('submitDayButton').disabled = false;
 	},

	executionIfElse: function () {
		var classId = this.getClassId('redClass');
		var currentChildId = this.getNextChildId(classId);
		var nextChildId = this.getNextChildId(currentChildId);
		var previousChildId = this.getPreviousChildId(currentChildId);
		
		if (currentChildId === 'codeContentIfElse_23' || currentChildId === 'codeContentIfElse_27')
		{
			this.applyColorRed('codeContentIfElse_28', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			alert('Code running is Over !');
			location.reload(true);
		}
		else 
		{
			if (currentChildId === 'codeContentIfElse_2' || currentChildId === 'codeContentIfElse_3') 
			{	
				if (currentChildId === 'codeContentIfElse_2') 
				{
					this.applyColorRed(currentChildId, 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
					this.setInnerHtml('flag_1_text', 'flag_1 = ');
					this.setInnerHtml('flag_2_text', 'flag_2 = ');
					this.setInnerHtml('flag_3_text', 'flag_3 = ');
					this.setInnerHtml('flag_4_text', 'flag_4 = ');
				}
				else
				{
					this.applyColorRed(currentChildId, 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
					this.setInnerHtml('flag_1_value', '0');
					this.setInnerHtml('flag_2_value', '0');
					this.setInnerHtml('flag_3_value', '0');
					this.setInnerHtml('flag_4_value', '0');
				}
			}

			if (currentChildId === 'codeContentIfElse_4' || nextChildId === 'codeContentIfElse_6') 
			{
				if (currentChildId === 'codeContentIfElse_4') 
				{
					this.applyColorRed(currentChildId, 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				} 
				else if (model.valueOfX >= 100) 
				{
					this.applyColorRed('codeContentIfElse_6', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
					this.setInnerHtml('flag_1_value', '1');
				}
				else
				{
					this.applyColorRed('codeContentIfElse_8', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				}

			}

			if (nextChildId === 'codeContentIfElse_8' || nextChildId === 'codeContentIfElse_10') 
			{
				if (nextChildId === 'codeContentIfElse_8') 
				{
					this.applyColorRed('codeContentIfElse_8', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				} 
				else if (model.valueOfX <= 350) 
				{
					this.applyColorRed('codeContentIfElse_10', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
					this.setInnerHtml('flag_2_value', '1');
				}
				else
				{
					this.applyColorRed('codeContentIfElse_12', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				}
			}

			if (nextChildId === 'codeContentIfElse_12' || nextChildId === 'codeContentIfElse_14') 
			{
				if (nextChildId === 'codeContentIfElse_12') 
				{
					this.applyColorRed('codeContentIfElse_12', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				} 
				else if (model.valueOfY >= 100) 
				{
					this.applyColorRed('codeContentIfElse_14', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
					this.setInnerHtml('flag_3_value', '1');
				}
				else
				{
					this.applyColorRed('codeContentIfElse_16', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				}
			}

			if (nextChildId === 'codeContentIfElse_16' || nextChildId === 'codeContentIfElse_18') 
			{
				if (nextChildId === 'codeContentIfElse_16') 
				{
					this.applyColorRed('codeContentIfElse_16', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				} 
				else if (model.valueOfY <= 400) 
				{
					this.applyColorRed('codeContentIfElse_18', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
					this.setInnerHtml('flag_4_value', '1');
				}
				else
				{
					this.applyColorRed('codeContentIfElse_20', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				}
			}

			if (nextChildId === 'codeContentIfElse_20' || nextChildId === 'codeContentIfElse_22') 
			{
				if (nextChildId === 'codeContentIfElse_20') 
				{
					this.applyColorRed('codeContentIfElse_20', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				} 
				else if (model.valueOfX > 100 && model.valueOfX < 350 && model.valueOfY > 100 && model.valueOfY < 400) 
				{
					this.applyColorRed('codeContentIfElse_22', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				}
				else
				{
					this.applyColorRed('codeContentIfElse_24', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				}
			}

			if (nextChildId === 'codeContentIfElse_24' || nextChildId === 'codeContentIfElse_26') 
			{
				if (nextChildId === 'codeContentIfElse_24') 
				{
					this.applyColorRed('codeContentIfElse_24', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				} 
				else if (nextChildId === 'codeContentIfElse_26') 
				{
					this.applyColorRed('codeContentIfElse_26', 'redClass');
					this.removeColorRed(previousChildId, 'redClass');
				}
			}
		}
	},

	executionIfElseIfElse: function () {
		var classId = this.getClassId('redClass');
		var currentChildId = this.getNextChildId(classId);
		var nextChildId = this.getNextChildId(currentChildId);
		var previousChildId = this.getPreviousChildId(currentChildId);
		
		if (currentChildId === 'codeContentIfElseIfElse_2') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setInnerHtml('flag_1_text', 'flag = ');
		}

		if (currentChildId === 'codeContentIfElseIfElse_3') 
		{			
			this.applyColorRed('codeContentIfElseIfElse_3a', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
		}

		if (currentChildId === 'codeContentIfElseIfElse_3b' && model.valueOfX < 100) 
		{			
			this.applyColorRed('codeContentIfElseIfElse_5', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setInnerHtml('flag_1_value', '0');
		}

		if (currentChildId === 'codeContentIfElseIfElse_3b' && model.valueOfX > 350) 
		{			
			this.applyColorRed('codeContentIfElseIfElse_3c', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
		}

		if (currentChildId === 'codeContentIfElseIfElse_3d' && model.valueOfX > 350) 
		{			
			this.applyColorRed('codeContentIfElseIfElse_5', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setInnerHtml('flag_1_value', '0');
		}

		if (currentChildId === 'codeContentIfElseIfElse_3b' && (100 <= model.valueOfX) && (model.valueOfX <= 350)) 
		{
			this.applyColorRed('codeContentIfElseIfElse_3c', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
		}
			
		if (currentChildId === 'codeContentIfElseIfElse_3d' && (100 <= model.valueOfX) && (model.valueOfX <= 350)) 
		{
			this.applyColorRed('codeContentIfElseIfElse_7a', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
		}

		if (currentChildId === 'codeContentIfElseIfElse_7b' && model.valueOfY < 100) 
		{
			this.applyColorRed('codeContentIfElseIfElse_9', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setInnerHtml('flag_1_value', '0');
		}

		if (currentChildId === 'codeContentIfElseIfElse_7b' && model.valueOfY > 400) 
		{
			this.applyColorRed('codeContentIfElseIfElse_7c', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
		}
		
		if (currentChildId === 'codeContentIfElseIfElse_7d' && model.valueOfY > 400) 
		{
			this.applyColorRed('codeContentIfElseIfElse_9', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setInnerHtml('flag_1_value', '0');
		}

		if (currentChildId === 'codeContentIfElseIfElse_7b' && (100 <= model.valueOfY) && (model.valueOfY <= 400)) 
		{
			this.applyColorRed('codeContentIfElseIfElse_7c', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
		}

		if (currentChildId === 'codeContentIfElseIfElse_7d' && (100 <= model.valueOfX) && (model.valueOfX <= 350) && (100 <= model.valueOfY) && (model.valueOfY <= 400)) 
		{
			this.applyColorRed('codeContentIfElseIfElse_11', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			currentChildId
		}

		if ((currentChildId === 'codeContentIfElseIfElse_12' || currentChildId === 'codeContentIfElseIfElse_14' || currentChildId === 'codeContentIfElseIfElse_16') && (100 <= model.valueOfX) && (model.valueOfX <= 350) && (100 <= model.valueOfY) && (model.valueOfY <= 400))
		{
			this.applyColorRed(nextChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setInnerHtml('flag_1_value', '1');
		}

		if (currentChildId ==='codeContentIfElseIfElse_6' || currentChildId ==='codeContentIfElseIfElse_10') 
		{
			this.applyColorRed('codeContentIfElseIfElse_15', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
		}

		if (currentChildId === 'codeContentIfElseIfElse_16' && !((100 <= model.valueOfX) && (model.valueOfX <= 350) && (100 <= model.valueOfY) && (model.valueOfY <= 400))) 
		{
			this.applyColorRed('codeContentIfElseIfElse_19', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
		}

		if (currentChildId === 'codeContentIfElseIfElse_20') 
		{
			this.applyColorRed('codeContentIfElseIfElse_21', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
		}

		if (currentChildId === 'codeContentIfElseIfElse_18' || currentChildId === 'codeContentIfElseIfElse_22') 
		{
			this.applyColorRed('codeContentIfElseIfElse_23', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			alert('Code running is Over !');
			location.reload(true);
		}	
	},

    

	nextButtonSwitch: function () {
		var classId = this.getClassId('redClass');
		var currentChildId = this.getNextChildId(classId);
	 	var previousChildId = this.getPreviousChildId(currentChildId);
	 	var currentClassName = this.getClassName(currentChildId);
	 	var previousClassName = this.getClassName(previousChildId);

	 	if (currentChildId === 'close_brc2_id' || currentChildId === 'else_id' || currentChildId === 'else_if_id') 
	 	{
	 		this.applyColorRed('close_brc2_id', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.replaceElement('nextButton', 'resetButton');
			alert('Code running is Over !');
	 	}

	 	if ( model.inputNumber > 7 ) 
	 	{
	 		if (currentChildId === 'holiday_id') 
	 		{
	 			this.applyColorRed('else_if_id', 'redClass');
				this.removeColorRed(previousChildId, 'redClass');
	 		}
	 		else if (currentChildId === 'workingday_id') 
	 		{
	 			this.applyColorRed('else_id', 'redClass');
				this.removeColorRed(previousChildId, 'redClass');
	 		}
	 		else if (currentChildId === 'invalidIP_id') 
	 		{
	 			this.applyColorRed(currentChildId, 'redClass');
				this.removeColorRed(previousChildId, 'redClass');
				this.setInnerHtml('outputDay', 'INVALID INPUT');
	 		}
	 	}

	 	if ( (1 <= model.inputNumber) && (model.inputNumber <= 6) ) 
	 	{
	 		if (currentChildId === 'holiday_id') 
	 		{
	 			this.applyColorRed('else_if_id', 'redClass');
				this.removeColorRed(previousChildId, 'redClass');
	 		}
	 		else if (currentChildId === 'workingday_id') 
	 		{
	 			this.applyColorRed(currentChildId, 'redClass');
				this.removeColorRed(previousChildId, 'redClass');
				this.changeOpacity('workingday_image');
				this.setInnerHtml('outputDay', 'WORKING DAY');
	 		}	
	 	}

	 	if (model.inputNumber === 7)
	 	{
	 		if (currentChildId === 'holiday_id') 
	 		{
	 			this.applyColorRed(currentChildId, 'redClass');
				this.removeColorRed(previousChildId, 'redClass');
				this.changeOpacity('holiday_image');
				this.setInnerHtml('outputDay', 'HOLIDAY');
	 		}
	 	}

	 	if (currentChildId === 'if_id') 
	 	{
	 		this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
	 	}

	 	if (currentClassName === 'break') 
	 	{
	 		this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
	 	}

	 	if (previousClassName === 'break redClass') 
	 	{
	 		this.applyColorRed('close_brc1_id', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
	 	}
		
		if (currentChildId === 'char_id' || currentChildId === 'str_id' || currentChildId === 'switch_id') {
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');        
		} 
		else if (currentChildId === 'case1_id')
		{
       		switch (model.inputNumber){
				case 1:
					this.switchToDay('case1_id', previousChildId, 'monday_images', 'str_null', 'Monday');
  					break;
				case 2:
  					this.switchToDay('case2_id', previousChildId, 'tuesday_images', 'str_null', 'Tuesday');
  					break;
				case 3:
  					this.switchToDay('case3_id', previousChildId, 'wednesday_images', 'str_null', 'Wednesday');
  					break;
				case 4:
  					this.switchToDay('case4_id', previousChildId, 'thursday_images', 'str_null', 'Thursday');
  					break;
				case 5:
  					this.switchToDay('case5_id', previousChildId, 'friday_images', 'str_null', 'Friday');
  					break;
				case 6:
  					this.switchToDay('case6_id', previousChildId, 'saturday_images', 'str_null', 'Saturday');
  					break;
				case 7:
  					this.switchToDay('case7_id', previousChildId, 'sunday_images', 'str_null', 'Sunday');
  					break;
  				default:
  					this.switchToDay('default_id', previousChildId, null, 'str_null', 'Null');
        			break;
			}	
		}
	},
	
	init: function () {
		this.activateEvents();

	}
}

window.onload = function () { 
	window.view.init();
	window.view.displayFigures();
}