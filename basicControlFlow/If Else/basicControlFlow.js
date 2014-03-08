//---------------------------------+
// Author: Parvesh Kumar Gahanolia |
// Email: <parvesh@vlabs.ac.in>    |
//---------------------------------+
window.model = {
	valueOfX: 210, //user input of x.
	valueOfY: 210, //user input of y.
}

window.view = {
	currentSiblingElement: new Object(), // Object value of current sibling.
	nextSiblingElement: new Object(), // Object value of next sibling.
	nextOfnextSiblingElement: new Object(), // // Object value of next of next sibling.
	canvasContext: '', // canvasContext have many properties and methods for drawing paths, boxes, circles, text, images, and more.
	canvas: new Object(), // Object value of canvas.
	// addClickEvent: add EventListener to other methods.
	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},
	// activateEvents: calls addClickEvent method to add EventListener to other methods.
	activateEvents: function() {
		//this.addClickEvent('ifElseList', function() { view.replaceElement('ifElseIfCode','ifElseCode') });
		//this.addClickEvent('ifElseIfList', function() { view.replaceElement('ifElseCode','ifElseIfCode') });
		this.addClickEvent('okBtnId', function() { view.validationInput() });
		this.addClickEvent('startBtnId', function() { view.startExecution() });
		this.addClickEvent('stopBtnId', function() { view.stopExecution() });
		this.addClickEvent('nextBtnId', function() { view.continueExecutionIfElse() });
	},
	// getSelectedLoopId: returns id of selected option in list.
	getSelectedLoopId: function(id) {
		var list_of_loop = document.getElementById(id);
		var selected_loop = list_of_loop.options[list_of_loop.selectedIndex].id;
		return selected_loop;
	},
	// changeClass: changes class name of a element.
	changeClass: function(id, className) {
		document.getElementById(id).className = className
	},
    // enableElement: makes element enable.
    enableElement: function (id) {
    	document.getElementById(id).disabled = false;
    },
    // disableElement: makes element disable.
    disableElement: function (id) {
    	document.getElementById(id).disabled = true;
    },
    // replaceElement: replace one element by another element.
    replaceElement: function (id1, id2) {
    	document.getElementById(id1).style.display = 'none';
    	document.getElementById(id2).style.display = 'block';  	 
    },
	// setValue: set given value to a element.
    setValue: function (id, value) {
		document.getElementById(id).value = value;
	},
	// getValue: get value from element.
	getValue: function (id) {
		var value = document.getElementById(id).value;
		return value;
	},
	// applyColorClass: adds new color class to a element.
	applyColorClass: function (id, colorClass) {
		document.getElementById(id).classList.add(colorClass);
	},
	// removeColorClass: removes color class from element.
	removeColorClass: function (id, colorClass) {
		document.getElementById(id).classList.remove(colorClass);
	},
	// getNextSiblingElement: return next sibling element.
	getNextSiblingElement: function (element) {
		var nextSiblingElement = element.nextSibling;
		nextSiblingElement = nextSiblingElement.nextSibling;
		return nextSiblingElement;
	},
	// getElementByClass: return element by given class name.
	getElementByClass: function (className) {
		var element = document.getElementsByClassName(className);
		return element[0];
	},
	// setInnerHtml: set innerText to a element.
 	setInnerHtml: function (id, innerText) {
 		document.getElementById(id).innerHTML = innerText;
 	},
 	// changeFlagValue: change flag value to 1 when point is inside of square.
 	changeFlagValue: function (id1, id2, value) {
		this.setInnerHtml(id1, value);
		this.codeExecutionWithColourAndId(id2);
 	},
 	// setFlagText: set flag text in elements during code execution.
 	setFlagText: function () {
 		this.codeExecutionWithColour();
		this.setInnerHtml('flag1Id', 'flag_1 = ');
		this.setInnerHtml('flag2Id', 'flag_2 = ');
		this.setInnerHtml('flag3Id', 'flag_3 = ');
		this.setInnerHtml('flag4Id', 'flag_4 = ');
 	},
 	// setFlagText: set flag value in elements during code execution.
 	setFlagValue: function () {
 		this.codeExecutionWithColour();
		this.setInnerHtml('flagValue1', '0');
		this.setInnerHtml('flagValue2', '0');
		this.setInnerHtml('flagValue3', '0');
		this.setInnerHtml('flagValue4', '0');
 	},
 	// codeExecutionWithColour: shows execution of code by changing color in code Content.
	codeExecutionWithColour: function () {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(this.nextSiblingElement.id, 'redClass');
	},
	// codeExecutionWithColourAndId: shows execution of code by changing color with given id in code Content.
	codeExecutionWithColourAndId: function (id) {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(id, 'redClass');
	},
	// resetVariables: reset all variables to it's initial state. 
 	resetVariables: function () {
 		model.valueOfX = 210;
		model.valueOfY = 210;
 	},
 	// clearOutputValues: clear all output values that displayed during the execution.
 	clearOutputValues: function () {
 		this.setInnerHtml('xInnerText', '');
 		this.setInnerHtml('yInnerText', '');
		this.setInnerHtml('flag1Id', '');
		this.setInnerHtml('flag2Id', '');
 		this.setInnerHtml('flag3Id', '');
 		this.setInnerHtml('flag4Id', '');
 		this.setInnerHtml('flagValue1', '');
		this.setInnerHtml('flagValue2', '');
 		this.setInnerHtml('flagValue3', '');
 		this.setInnerHtml('flagValue4', '');
 	},
 	// resetTextFieldValue: reset text field to their initial state.
 	resetTextFieldValue: function () {
 		this.setValue('textFieldXId', 210);
 		this.setValue('textFieldYId', 210);
 	},
 	// resetButtonAndTextField: reset button it's initial state and do text field enable.
 	resetButtonAndTextField: function () {
		this.enableElement('textFieldXId');
		this.enableElement('textFieldYId');
		this.enableElement('okBtnId');
		this.disableElement('nextBtnId');
		this.disableElement('stopBtnId');
		this.changeClass('loopList', 'button expList');
		this.changeClass('okBtnId', 'button okButton');
		this.changeClass('stopBtnId', 'buttonDisable stopButton margin15 hide');
		this.changeClass('startBtnId', 'buttonDisable startButton margin15');
		this.changeClass('nextBtnId', 'buttonDisable nextButton margin15');
	},
	// endOfExecution: work at end of code execution and with stop button to reset whole experiment at it's initial state.
	endOfExecution: function () {
		this.resetButtonAndTextField();
		this.resetTextFieldValue();
		this.clearOutputValues();
		this.resetVariables();
		this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height); // to clear previously drawed canvas.
		this.canvasContext.restore(); // restor canvas it's initial state.
		this.displayFigures(); // displays Figures graph on canvas.
		this.enableElement('loopList');
		var idOfRedText = this.getElementByClass('redClass').id;
		this.removeColorClass(idOfRedText, 'redClass');
	},
 	// getCanvas: get canvas and canvasContext as a Object.
	getCanvas: function () {
		this.canvas = document.getElementById('myCanvas');
		this.canvasContext = this.canvas.getContext('2d');
	},
	// drawFillRectangle: draws fill rectangle on canvasContext.
 	drawFillRectangle: function () {
 		this.getCanvas();
 		this.canvasContext.fillStyle = '#C2D995';
 		this.canvasContext.fillRect (100, 100, 250, 300);
 		this.canvasContext.strokeStyle = '#000000';
 		this.canvasContext.rect(100, 100, 250, 300);
 		this.canvasContext.stroke();	
 	},
 	// drawCircle: draws circle on canvasContext according given x and y coordinates.
  	drawCircle: function (x, y, colour) {
 		this.canvasContext.beginPath();
 		this.canvasContext.fillStyle = colour; 
 		this.canvasContext.arc(x, y, 3, 0, 2 * Math.PI, true);
 		this.canvasContext.fill();
 	},
 	// displayText: draws given text on canvasContext according given x and y coordinates.
    displayText: function (text, x, y) {
    	this.canvasContext.beginPath();
       	this.canvasContext.font = 'italic 20px Arial';
		this.canvasContext.fillText(text, x, y);
    },
    // displayTextWithColour: draws given text  with colour on canvasContext according given x and y coordinates.
    displayTextWithColour: function (text, x, y, color) {
    	this.canvasContext.beginPath();
       	this.canvasContext.font = 'italic 20px Arial';
       	this.canvasContext.fillStyle = color;
		this.canvasContext.fillText(text, x, y);		
    },
    // displayFigures: display figures on canvasContext according given x and y coordinates.
    displayFigures: function () {
    	this.drawFillRectangle();
    	this.drawCircle(100, 100, '#000000');
		this.drawCircle(350, 100, '#000000');
		this.drawCircle(100, 400, '#000000');
		this.drawCircle(350, 400, '#000000');
		this.displayText('(x1, y1)', 90, 90);
		this.displayText('(x2, y2)', 340, 90);
		this.displayText('(x3, y3)', 340, 420);
		this.displayText('(x4, y4)', 90, 420);
		this.canvasContext.save();
    },
	/* validationInput: check validation of input that is given by user and if input value is valid 
	then make text field and ok button disable and make start button enable. */
	validationInput: function () {
    	var valueOfX = this.getValue('textFieldXId');
    	var valueOfY = this.getValue('textFieldYId');
    	if ((valueOfX === '' || valueOfY === '') || isNaN(valueOfX) || isNaN(valueOfY)) {
			alert('Enter Numeric Values Only');
			return false;
		}
		else {
			model.valueOfX = Number(valueOfX);
			model.valueOfY = Number(valueOfY);
			this.disableElement('loopList');
			this.disableElement('textFieldXId');
			this.disableElement('textFieldYId');
			this.enableElement('startBtnId');
			this.changeClass('startBtnId', 'button startButton margin15');
			this.disableElement('okBtnId');
			this.changeClass('okBtnId', 'buttonDisable okButton');
			this.changeClass('loopList', 'buttonDisable expList');
			this.setInnerHtml('xInnerText', model.valueOfX);
			this.setInnerHtml('yInnerText', model.valueOfY);
			this.drawCircle(model.valueOfX, model.valueOfY, '#FF2400');
			this.displayTextWithColour('(x, y)', model.valueOfX + 10, model.valueOfY, '#FF2400');
		}
    },
    // startExperiment: work to start code execution.
	startExecution: function () {
		this.changeClass('startBtnId', 'buttonDisable startButton margin15 hide');
		this.changeClass('nextBtnId', 'button nextButton margin15');
		this.changeClass('stopBtnId', 'button stopButton margin15')
		this.enableElement('stopBtnId');
		this.enableElement('nextBtnId');
		this.disableElement('startBtnId');
		this.applyColorClass('codeContentIfElse1Id', 'redClass');
	},
	// stopExperiment: stop code execution at any point.
	stopExecution: function () {
		this.endOfExecution();
	},
	// continueExecutionIfElse: shows code execution and gives final result at end of code.
	continueExecutionIfElse: function () {
		this.currentSiblingElement = this.getElementByClass('redClass');
		this.nextSiblingElement = this.getNextSiblingElement(this.currentSiblingElement);
		this.nextOfnextSiblingElement = this.getNextSiblingElement(this.nextSiblingElement);
		if (this.nextSiblingElement.id === 'codeContentIfElse23Id' || this.nextSiblingElement.id === 'codeContentIfElse27Id') {
			this.codeExecutionWithColourAndId('codeContentIfElse28Id');
			alert('Code running is Over !');
			this.endOfExecution();
		}
		else {
			if (this.nextSiblingElement.id === 'codeContentIfElse2Id' || this.nextSiblingElement.id === 'codeContentIfElse3Id') {	
				if (this.nextSiblingElement.id === 'codeContentIfElse2Id')
					this.setFlagText();
				else
					this.setFlagValue();
			}
			if (this.nextSiblingElement.id === 'codeContentIfElse4Id' || this.nextOfnextSiblingElement.id === 'codeContentIfElse6Id') {
				if (this.nextSiblingElement.id === 'codeContentIfElse4Id') 
					this.codeExecutionWithColour();
				else if (model.valueOfX >= 100) 
					this.changeFlagValue('flagValue1', 'codeContentIfElse6Id', '1');
				else
					this.codeExecutionWithColourAndId('codeContentIfElse8Id');
			}
			if (this.nextOfnextSiblingElement.id === 'codeContentIfElse8Id' || this.nextOfnextSiblingElement.id === 'codeContentIfElse10Id') {
				if (this.nextOfnextSiblingElement.id === 'codeContentIfElse8Id') 
					this.codeExecutionWithColourAndId('codeContentIfElse8Id');
				else if (model.valueOfX <= 350) 
					this.changeFlagValue('flagValue2', 'codeContentIfElse10Id', '1');
				else
					this.codeExecutionWithColourAndId('codeContentIfElse12Id');
			}
			if (this.nextOfnextSiblingElement.id === 'codeContentIfElse12Id' || this.nextOfnextSiblingElement.id === 'codeContentIfElse14Id') {
				if (this.nextOfnextSiblingElement.id === 'codeContentIfElse12Id') 
					this.codeExecutionWithColourAndId('codeContentIfElse12Id');
				else if (model.valueOfY >= 100) 
					this.changeFlagValue('flagValue3', 'codeContentIfElse14Id', '1');
				else
					this.codeExecutionWithColourAndId('codeContentIfElse16Id');
			}
			if (this.nextOfnextSiblingElement.id === 'codeContentIfElse16Id' || this.nextOfnextSiblingElement.id === 'codeContentIfElse18Id') {
				if (this.nextOfnextSiblingElement.id === 'codeContentIfElse16Id')
					this.codeExecutionWithColourAndId('codeContentIfElse16Id');
				else if (model.valueOfY <= 400) 
					this.changeFlagValue('flagValue4', 'codeContentIfElse18Id', '1');
				else
					this.codeExecutionWithColourAndId('codeContentIfElse20Id');
			}
			if (this.nextOfnextSiblingElement.id === 'codeContentIfElse20Id' || this.nextOfnextSiblingElement.id === 'codeContentIfElse22Id') {
				if (this.nextOfnextSiblingElement.id === 'codeContentIfElse20Id') 
					this.codeExecutionWithColourAndId('codeContentIfElse20Id');
				else if (model.valueOfX > 100 && model.valueOfX < 350 && model.valueOfY > 100 && model.valueOfY < 400) {
					this.codeExecutionWithColourAndId('codeContentIfElse22Id');
					this.displayTextWithColour('Output: INSIDE', 100, 50, '#FF2400');
				}
				else
					this.codeExecutionWithColourAndId('codeContentIfElse24Id');
			}
			if (this.nextOfnextSiblingElement.id === 'codeContentIfElse24Id' || this.nextOfnextSiblingElement.id === 'codeContentIfElse26Id') {
				if (this.nextOfnextSiblingElement.id === 'codeContentIfElse24Id') 
					this.codeExecutionWithColourAndId('codeContentIfElse24Id');
				else if (this.nextOfnextSiblingElement.id === 'codeContentIfElse26Id') {
					this.codeExecutionWithColourAndId('codeContentIfElse26Id');
					this.displayTextWithColour('Output: OUTSIDE', 100, 50, '#FF2400');
				}
			}
		}
	},

	executionIfElseIfElse: function () {
		this.currentSiblingElement = this.getElementByClass('redClass');
		this.nextSiblingElement = this.getNextSiblingElement(this.currentSiblingElement);
		this.nextOfnextSiblingElement = this.getNextSiblingElement(this.nextSiblingElement);
		if (this.nextSiblingElement.id === 'codeContentIfElseIf2Id') 
		{
			this.codeExecutionWithColour();
			this.setInnerHtml('flag1Id', 'flag = ');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf3Id') 
		{		
			this.codeExecutionWithColourAndId('codeContentIfElseIf3aId');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf3bId' && model.valueOfX < 100) 
		{
			this.changeFlagValue('flagValue1', 'codeContentIfElseIf5Id', '0');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf3bId' && model.valueOfX > 350) 
		{			
			this.codeExecutionWithColourAndId('codeContentIfElseIf3cId');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf3dId' && model.valueOfX > 350) 
		{			
			this.changeFlagValue('flagValue1', 'codeContentIfElseIf5Id', '0');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf3bId' && (100 <= model.valueOfX) && (model.valueOfX <= 350)) 
		{
			this.codeExecutionWithColourAndId('codeContentIfElseIf3cId');
		}
			
		if (this.nextSiblingElement.id === 'codeContentIfElseIf3dId' && (100 <= model.valueOfX) && (model.valueOfX <= 350)) 
		{
			this.codeExecutionWithColourAndId('codeContentIfElseIf7aId');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf7bId' && model.valueOfY < 100) 
		{
			this.changeFlagValue('flagValue1', 'codeContentIfElseIf9Id', '0');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf7bId' && model.valueOfY > 400) 
		{
			this.codeExecutionWithColourAndId('codeContentIfElseIf7cId');
		}
		
		if (this.nextSiblingElement.id === 'codeContentIfElseIf7dId' && model.valueOfY > 400) 
		{
			this.changeFlagValue('flagValue1', 'codeContentIfElseIf9Id', '0');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf7bId' && (100 <= model.valueOfY) && (model.valueOfY <= 400)) 
		{
			this.codeExecutionWithColourAndId('codeContentIfElseIf7cId');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf7dId' && (100 <= model.valueOfX) && (model.valueOfX <= 350) && (100 <= model.valueOfY) && (model.valueOfY <= 400)) 
		{
			this.codeExecutionWithColourAndId('codeContentIfElseIf11Id');
		}

		if ((this.nextSiblingElement.id === 'codeContentIfElseIf12Id' || this.nextSiblingElement.id === 'codeContentIfElseIf14Id' || this.nextSiblingElement.id === 'codeContentIfElseIf16Id') && (100 <= model.valueOfX) && (model.valueOfX <= 350) && (100 <= model.valueOfY) && (model.valueOfY <= 400))
		{
			this.codeExecutionWithColour();
			this.setInnerHtml('flagValue1', '1');
		}

		if (this.nextSiblingElement.id ==='codeContentIfElseIf6Id' || this.nextSiblingElement.id ==='codeContentIfElseIf10Id') 
		{
			this.codeExecutionWithColourAndId('codeContentIfElseIf15Id');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf16Id' && !((100 <= model.valueOfX) && (model.valueOfX <= 350) && (100 <= model.valueOfY) && (model.valueOfY <= 400))) 
		{
			this.codeExecutionWithColourAndId('codeContentIfElseIf19Id');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf20Id') 
		{
			this.codeExecutionWithColourAndId('codeContentIfElseIf21Id');
		}

		if (this.nextSiblingElement.id === 'codeContentIfElseIf18Id' || this.nextSiblingElement.id === 'codeContentIfElseIf22Id') 
		{
			this.codeExecutionWithColourAndId('codeContentIfElseIf23Id');
			alert('Code running is Over !');
			this.endOfExecution();
		}	
	},
	// init: calls methods to draw canvas and activate events.
	init: function () {
		this.activateEvents();
		this.displayFigures();
	}
}
// onload function: call init method on window onload.
window.onload = function () { 
	window.view.init();
}