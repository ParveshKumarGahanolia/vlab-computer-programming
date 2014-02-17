// Author: Parvesh Kumar Gahanolia 
// Email: <parvesh@vlabs.ac.in>

window.model = {
	valueA: '',
	valueB: '',
	sum: 0,
	i: 0,
	width: 1,
	computeSum: function () {
    	this.sum = this.sum + Math.cos(2 * Math.PI/13 * this.valueA) * this.width;
    },

    incrementInWidth: function () {
    	this.valueA = this.valueA + this.width;
	}
}

window.view = {

	sum: '',
	canvas: '',

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

	replaceElement: function (id1, id2) {
    	document.getElementById(id1).style.display = 'none';
    	document.getElementById(id2).style.display = 'block';  	 
    },

	applyColorClass: function (id, colorClass) {
		var elementbyid = document.getElementById(id);
		elementbyid.className += ' ' + colorClass;
	},

	removeColorClass: function (id, colorClass) {
		var elementbyid = document.getElementById(id);
		elementbyid.classList.remove(colorClass);
	},

	getValue: function (id) {
		var value = document.getElementById(id).value;
		return value;
	},

	getClassId: function (className) {
		var element = document.getElementsByClassName(className);
		var classId = element[0].id;
		return classId;		
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

	setInnerHtml: function (id, innerHTML) {
 		document.getElementById(id).innerHTML = innerHTML;
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
			model.valueA = valueA2;
			model.valueB = valueB2;
		}
		var firstChildId = this.getFirstChildId('NumApproCode');
		this.applyColorClass(firstChildId, 'redClass');
	},

	startButton: function () {
		this.replaceElement('startBtnId', 'stopBtnId');
	},

	nextButton: function () {
		var classId = this.getClassId('redClass');
		var currentChildId = this.getNextChildId(classId);
		var previousChildId = this.getPreviousChildId(currentChildId);
		

		if (currentChildId === 'NumApproCodeContent2') {
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			this.setInnerHtml('vari', 'i = ');
		}

		if (currentChildId === 'NumApproCodeContent3') {
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			this.setInnerHtml('varsum', 'sum = ');
		}

		if (currentChildId === 'NumApproCodeContent4') {
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		if (currentChildId === 'NumApproCodeContent5') {
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			this.setInnerHtml('valuei', '0');
			this.setInnerHtml('valuesum', '0');
		}

		if (currentChildId === 'NumApproCodeContent6') {
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		if (currentChildId === 'NumApproCodeContent7') {
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			model.computeSum();
			model.incrementInWidth();
			this.sum = Math.round(model.sum * 100) / 100;
			this.setInnerHtml('valuesum', this.sum);
			this.setInnerHtml('valuei', model.valueA);
		}

		if (currentChildId === 'NumApproCodeContent8') {
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		if (currentChildId === 'NumApproCodeContent9') {
			if (model.valueA < model.valueB) {
				this.applyColorClass('NumApproCodeContent6', 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			}
			else if (model.valueA = model.valueB) {
				this.applyColorClass(currentChildId, 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
				this.setInnerHtml('integrText', 'INTEGRATION VALUE = ');
				this.setInnerHtml('integrValue', this.sum);
			}
		}

		if (currentChildId === 'NumApproCodeContent10')	{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			alert('Code running is Over !');
		}
	},

	stopButton: function () {
		this.replaceElement('stopBtnId', 'startBtnId');
	},

	getCanvas: function () {
		var canvas = document.getElementById('myCanvas').getContext('2d');
		return canvas;
	},

	drawAxis: function () {
		canvas = this.getCanvas();
		canvas.beginPath();
		canvas.moveTo(20, 0);
		canvas.lineTo(20, 360);
		canvas.moveTo(20, 180);
		canvas.lineTo(520, 180);
		canvas.strokeStyle = '#000000';
		canvas.lineWidth = 2;
		canvas.stroke();
	},

	drawText: function () {
		canvas.font = '18px Arial';
		canvas.beginPath();
		canvas.fillText('0', 8, 180);
		canvas.fillText('1', 8, 100);
		canvas.fillText('2', 8, 20);
		canvas.fillText('1', 8, 260);
		canvas.fillText('2', 8, 340);
		canvas.fillText('5', 80, 200);
		canvas.fillText('10', 140, 200);
		canvas.fillText('15', 200, 200);
		canvas.fillText('20', 260, 200);
		canvas.fillText('25', 320, 200);
		canvas.fillText('30', 380, 200);
		canvas.fillText('35', 440, 200);
		canvas.fillText('40', 500, 200);
	},

	drawIntersectLines: function () {
		canvas.beginPath();
		for (var i = 20; i <= 340; i+=80) {
			canvas.moveTo(15, i);
			canvas.lineTo(25, i);
		}
		for (var i = 80; i <= 500; i+=60) {
			canvas.moveTo(i, 175);
			canvas.lineTo(i, 185);
		}
		canvas.lineWidth = 2;
		canvas.stroke();
	},

	drawCosCurve: function () {
		canvas.beginPath();
		var xAxis;
		var yAxis;
		canvas.moveTo(20, 100);
		for (xAxis = 20; xAxis <= 520; xAxis++) {
			var y = 80*Math.cos(0 + (xAxis - 20) * .03275)
			yAxis = 80 + (100 - (y))
			canvas.lineTo(xAxis, yAxis);
		}
		canvas.strokeStyle = '#ff0000';
		canvas.lineWidth = 2;
    	canvas.stroke();
	},

	drawHorizontalLine: function () {
		canvas.beginPath();
		for (var i = 20; i <= 500; i+=40) {
			canvas.moveTo(20, i);
			canvas.lineTo(520, i);
		}
		canvas.strokeStyle = '#3ADF00';
		canvas.lineWidth = 1;
		canvas.stroke();
	},

	drawVerticalLine: function () {
		canvas.beginPath();
		for (var i = 60; i <= 520; i+=40) {
			canvas.moveTo(i, 0);
			canvas.lineTo(i, 360);
		}
		canvas.strokeStyle = '#3ADF00';
		canvas.lineWidth = 1;
		canvas.stroke();
	}, 

	drawCanvas: function () {
		this.drawAxis();
		this.drawText();
		this.drawIntersectLines();
		this.drawHorizontalLine();
		this.drawVerticalLine();
		this.drawCosCurve();
	},

	init: function () {
		this.drawCanvas();
		this.activateEvents();
	}
}

window.onload = function () {
	view.init();
}