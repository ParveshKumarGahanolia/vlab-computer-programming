// Author: Parvesh Kumar Gahanolia 
// Email: <parvesh@vlabs.ac.in>

window.model = {
	inputValueA: '',
	inputValueB: '',
	sum: 0,
	width: 1,
	computeSum: function () {
    	this.sum = this.sum + Math.cos(2 * Math.PI/13 * this.inputValueA) * this.width;
    },
    incrementInWidth: function () {
    	this.inputValueA = this.inputValueA + this.width;
	}
}

window.view = {
	xCoordinatesValue: 0,
	yCoordinatesValue: 0,
	sum: 0,
	canvasContext: '',
	canvas: new Object(),
	currentSiblingElement: new Object(),
	nextSiblingElement: new Object(),
	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},
	activateEvents: function () {
		this.addClickEvent('okBtnId', function() { view.okButton() });
		this.addClickEvent('startBtnId', function() { view.startButton() });
		this.addClickEvent('nextBtnId', function() { view.nextButton() });
		this.addClickEvent('stopBtnId', function() { view.stopButton() });
	},
	disableElement: function(Id) {
		document.getElementById(Id).disabled = true;
	},
	enableElement: function(Id) {
		document.getElementById(Id).disabled = false;
	},
	replaceElement: function (id1, id2) {
    	document.getElementById(id1).style.display = 'none';
    	document.getElementById(id2).style.display = 'block';
    },
    applyColorClass: function (id, colorClass) {
    	document.getElementById(id).classList.add(colorClass);
	},
	removeColorClass: function (id, colorClass) {
		document.getElementById(id).classList.remove(colorClass);
	},
	executionWithColour: function () {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(this.nextSiblingElement.id, 'redClass');
	},
	getValue: function (id) {
		var value = document.getElementById(id).value;
		return value;
	},
	setValue: function (id, valueToSet) {
		document.getElementById(id).value = valueToSet;
	},
	getElementByClass: function (className) {
		var element = document.getElementsByClassName(className);
		return element[0];
	},
	getNextSiblingElement: function (element) {
		var nextSiblingElement = element.nextSibling;
		nextSiblingElement = nextSiblingElement.nextSibling;
		return nextSiblingElement;
	},
	setInnerHtml: function (id, innerHTML) {
 		document.getElementById(id).innerHTML = innerHTML;
 	},
 	resetVariables: function () {
 		model.inputValueA = '';
		model.inputValueB = '';
		this.xCoordinatesValue = 0;
		this.yCoordinatesValue = 0;
		model.sum = 0;
		this.sum = 0;
 	},
 	resetTextFieldValue: function () {
 		this.setValue('valueA', '');
 		this.setValue('valueB', '');
 	},
 	atTheEndOfExecution: function () {
		this.clearDivValues();
		this.resetVariables();
		this.resetTextFieldValue();
		this.replaceElement('stopBtnId', 'startBtnId');
		this.disableElement('nextBtnId');
		this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.canvasContext.restore();
		this.drawCanvas();
		var idOfRedText = this.getElementByClass('redClass').id;
		this.removeColorClass(idOfRedText, 'redClass');
 	},
 	clearDivValues: function () {
 		this.setInnerHtml('vari', '');
 		this.setInnerHtml('valuei', '');
		this.setInnerHtml('valuesum', '');
		this.setInnerHtml('varsum', '');
 		this.setInnerHtml('integrText', '');
 		this.setInnerHtml('integrValue', '');
 	},
 	getCanvas: function () {
		this.canvas = document.getElementById('myCanvas');
		this.canvasContext = this.canvas.getContext('2d');
	}, 
	drawAxis: function () {
		this.getCanvas();
		this.canvasContext.beginPath();
		this.canvasContext.moveTo(20, 0);
		this.canvasContext.lineTo(20, 360);
		this.canvasContext.moveTo(20, 180);
		this.canvasContext.lineTo(520, 180);
		this.canvasContext.strokeStyle = '#000000';
		this.canvasContext.lineWidth = 2;
		this.canvasContext.stroke();
	},
	drawText: function () {
		this.canvasContext.font = '18px Arial';
		this.canvasContext.beginPath();
		this.canvasContext.fillText('0', 8, 180);
		this.canvasContext.fillText('1', 8, 100);
		this.canvasContext.fillText('2', 8, 20);
		this.canvasContext.fillText('1', 8, 260);
		this.canvasContext.fillText('2', 8, 340);
		this.canvasContext.fillText('5', 80, 200);
		this.canvasContext.fillText('10', 140, 200);
		this.canvasContext.fillText('15', 200, 200);
		this.canvasContext.fillText('20', 260, 200);
		this.canvasContext.fillText('25', 320, 200);
		this.canvasContext.fillText('30', 380, 200);
		this.canvasContext.fillText('35', 440, 200);
		this.canvasContext.fillText('40', 500, 200);
	},
	drawIntersectLines: function () {
		this.canvasContext.beginPath();
		for (var i = 20; i <= 340; i+=80) {
			this.canvasContext.moveTo(15, i);
			this.canvasContext.lineTo(25, i);
		}
		for (var i = 80; i <= 500; i+=60) {
			this.canvasContext.moveTo(i, 175);
			this.canvasContext.lineTo(i, 185);
		}
		this.canvasContext.lineWidth = 2;
		this.canvasContext.stroke();
	},
	drawHorizontalLine: function () {
		this.canvasContext.beginPath();
		for (var i = 20; i <= 500; i+=40) {
			if (i === 180)
				continue;
			this.canvasContext.moveTo(20, i);
			this.canvasContext.lineTo(520, i);
		}
		this.canvasContext.strokeStyle = '#3ADF00';
		this.canvasContext.lineWidth = 1;
		this.canvasContext.stroke();
	},
	drawVerticalLine: function () {
		this.canvasContext.beginPath();
		for (var i = 60; i <= 520; i+=40) {
			this.canvasContext.moveTo(i, 0);
			this.canvasContext.lineTo(i, 360);
		}
		this.canvasContext.strokeStyle = '#3ADF00';
		this.canvasContext.lineWidth = 1;
		this.canvasContext.stroke();
	},
	drawCosCurve: function () {
		this.canvasContext.beginPath();
		var xAxis;
		var yAxis;
		this.canvasContext.moveTo(20, 100);
		for (xAxis = 20; xAxis <= 520; xAxis++) {
			var y = 80*Math.cos(0 + (xAxis - 20) * .0393)
			yAxis = 80 + (100 - (y))
			this.canvasContext.lineTo(xAxis, yAxis);
		}
		this.canvasContext.strokeStyle = '#ff0000';
		this.canvasContext.lineWidth = 2;
		this.canvasContext.stroke();
		this.canvasContext.save();
	},
	drawRectangle: function (xCoordinates, yCoordinates, width, high) {
		this.canvasContext.beginPath();
		this.canvasContext.globalAlpha= 0.6;
		this.canvasContext.fillStyle='#FF00FF';
		this.canvasContext.fillRect(xCoordinates, yCoordinates, width, high);
	},
	showAreaUnderCurve: function () {
		model.computeSum();
		this.callDrawRectangle();
		this.incrementInXCoordinates();
		model.incrementInWidth();
		this.sum = Math.round(model.sum * 100) / 100;
		this.setInnerHtml('valuesum', this.sum);
		this.setInnerHtml('valuei', model.inputValueA);
	},
	calculateXCoordinates: function () {
 		this.xCoordinatesValue = 20 + 12 * model.inputValueA;
 	},
 	incrementInXCoordinates: function () {
 		this.xCoordinatesValue = this.xCoordinatesValue + 12;
 	},
	callDrawRectangle: function () {
		var dynamicValueOfX = this.xCoordinatesValue;
		for (var i =0; i < 12; i++) {
			dynamicValueOfX++;
			var y = 80*Math.cos(0 + (dynamicValueOfX - 20) * .0393);
			this.yCoordinatesValue = 80 + (100 - (y));
			this.drawRectangle(dynamicValueOfX, this.yCoordinatesValue, 1, 180 - this.yCoordinatesValue);
		}
	},
	drawCanvas: function () {
		this.drawAxis();
		this.drawText();
		this.drawIntersectLines();
		this.drawHorizontalLine();
		this.drawVerticalLine();
		this.drawCosCurve();
		this.canvasContext.save();
	},
	okButton: function () {
		var valueA1 = this.getValue('valueA');
		var valueB1 = this.getValue('valueB');
		var valueA2 = parseInt(valueA1);
		var valueB2 = parseInt(valueB1);
		if (valueA1 === '' || valueB1 === '') {
			alert('Enter Value of a and b');
			return false;
		}
		else if ( isNaN(valueA1) || isNaN(valueB1)) {
			alert('Enter numeric value of a and b');
			return false;
		} 
		else if (valueA2 >= valueB2 || valueB2 > 30) {
			alert('Integration Limits are from 0 to 30 and b > a');
			return false;
		}
		else {
			model.inputValueA = valueA2;
			model.inputValueB = valueB2;
		}
		this.applyColorClass('NumApproCodeContent1', 'redClass');
		this.currentSiblingElement = this.getElementByClass('redClass');
		this.enableElement('nextBtnId');
		this.disableElement('okBtnId');
		this.disableElement('valueA');
		this.disableElement('valueB');
	},
	startButton: function () {
		this.replaceElement('startBtnId', 'stopBtnId');
		this.enableElement('valueA');
		this.enableElement('valueB');
		this.enableElement('okBtnId');
	},
	stopButton: function () {
		this.replaceElement('stopBtnId', 'startBtnId');
		this.disableElement('valueA');
		this.disableElement('valueB');
		this.disableElement('okBtnId');
		this.disableElement('nextBtnId');
		this.atTheEndOfExecution();
	},
	nextButton: function () {
		this.currentSiblingElement = this.getElementByClass('redClass');
		this.nextSiblingElement = this.getNextSiblingElement(this.currentSiblingElement);
		if (this.nextSiblingElement.id === 'NumApproCodeContent2') {
			this.executionWithColour();
			this.setInnerHtml('vari', 'i = ');
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent3') {
			this.executionWithColour();
			this.setInnerHtml('varsum', 'sum = ');
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent4') {
			this.executionWithColour();
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent5') {
			this.executionWithColour();
			this.setInnerHtml('valuei', '0');
			this.setInnerHtml('valuesum', '0');
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent6') {
			this.executionWithColour();
			this.calculateXCoordinates();
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent7') {
			this.executionWithColour();
			this.showAreaUnderCurve();
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent8') {
			this.executionWithColour();
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent9') {
			if (model.inputValueA < model.inputValueB) {
				this.removeColorClass(this.currentSiblingElement.id, 'redClass');
				this.applyColorClass('NumApproCodeContent6', 'redClass');
			}
			else if (model.inputValueA = model.inputValueB) {
				this.executionWithColour();
				this.setInnerHtml('integrText', 'INTEGRATION VALUE = ');
				this.setInnerHtml('integrValue', this.sum);
			}
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent10') {
			this.executionWithColour();
			alert('Code running is Over !');
			this.atTheEndOfExecution();
		}
	},
	init: function () {
		this.drawCanvas();
		this.activateEvents();
	}
}

window.onload = function () {
	view.init();
}