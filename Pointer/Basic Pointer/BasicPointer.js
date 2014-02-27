//	* name: JavaScript
//  * author: Parvesh Kumar Gahanolia <parvesh@vlabs.ac.in>

window.model = {

}

window.view = {
	currentSiblingElement: '',
	nextSiblingElement: '',
	previousSiblingElement: '',
	explanationBP1 : 'This program gives the basics of variable initialization and memory mapping. It also demonstrates what pointers are.',
	explanationBP2 : 'Variable A is defined as integer type and initialized to value 10.',
	explanationBP3 : 'value stored in variable A is 10 which is displayed in the output.',
	explanationBP4 : '& or address operator is used to display the address of the variable.',
	explanationBP5 : 'a pointer P is defined.',
	explanationBP6 : 'the pointer P stores the address of variable A. We say that \'P points A\'.',
	explanationBP7 : 'the value in P is displayed.',
	explanationBP8 : '*P refers to the value at location pointed by P. And hence the value in A is changed to 20.',
	explanationBP9 : 'Program execution complete.',
	outputBP1 : 'Value of A is 10',
	outputBP2 : 'Address of A is 60',
	outputBP3 : 'Value of P is 60.',
	outputBP4 : 'Address of P is 56',
	outputBP5 : 'Value at the address in P is 10',
	outputBP6 : 'New Value of A is 20',
	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},
	activateEvents: function() {
		this.addClickEvent('startBtnId', function() { view.startExecution() });
		this.addClickEvent('backBtnId', function() { view.reverseExecution() });
		this.addClickEvent('nextBtnId', function() { view.continueExecution() });
	},
	setString: function (id, string) {
		document.getElementById(id).value = string;
	},
	enableElement: function(Id) {
		document.getElementById(Id).disabled = false;
	},
	disableElement: function(Id) {
		document.getElementById(Id).disabled = true;
	},
	changeClass: function(id, className) {
		document.getElementById(id).className = className;
	},
	applyColorClass: function (id, colorClass) {
		document.getElementById(id).classList.add(colorClass);
	},
	removeColorClass: function (id, colorClass) {
		document.getElementById(id).classList.remove(colorClass);
	},
	replaceElement: function (id1, id2) {
    	document.getElementById(id1).style.display = 'none';
    	document.getElementById(id2).style.display = 'block';
    },
	eraseString: function (id) {
    	document.getElementById(id).value = '';
	},
	setInnerHtml: function (id, innerText) {
 		document.getElementById(id).innerHTML = innerText;
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
	getPsreviousSiblingElement: function (element) {
		var previousSiblingElement = element.previousSibling ;
		previousSiblingElement = previousSiblingElement.previousSibling;
		return previousSiblingElement;
	},
	codeExecutionWithColour: function () {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(this.nextSiblingElement.id, 'redClass');
	},
	reverseCodeExecutionWithColour: function () {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(this.previousSiblingElement.id, 'redClass');
	},
	resetTable60: function () {
		this.setInnerHtml('60byte1', '');
		this.setInnerHtml('60byte2', '');
		this.setInnerHtml('60byte3', '');
		this.setInnerHtml('60byte4', '');
		this.setInnerHtml('60variable', '');
	},
	resetTable56: function () {
		this.setInnerHtml('56byte1', '');
		this.setInnerHtml('56byte2', '');
		this.setInnerHtml('56byte3', '');
		this.setInnerHtml('56byte4', '');
	},
	setValueInTable60: function () {
		this.setInnerHtml('60byte1', '0');
		this.setInnerHtml('60byte2', '0');
		this.setInnerHtml('60byte3', '0');
		this.setInnerHtml('60byte4', '10');
		this.setInnerHtml('60variable', 'A');
	},
	setValueInTable56: function () {
		this.setInnerHtml('56byte1', '0');
		this.setInnerHtml('56byte2', '0');
		this.setInnerHtml('56byte3', '0');
		this.setInnerHtml('56byte4', '60');
	},
	resetTable: function () {
		this.resetTable60();
		this.resetTable56();
		this.setInnerHtml('56variable', '');
	},
	resetVariables: function () {
		currentSiblingElement = '';
		nextSiblingElement = '';
		previousSiblingElement = '';
	},
	resetTextField: function () {
		this.setStringInTextArea('', '');
	},
	setStringInTextArea: function (string1, string2) {
		this.setString('outputText', string1);
		this.setString('explanationText', string2);
	},
	eraseStringFromTextArea: function (id1, id2, string) {
		this.eraseString(id1);
		this.setString(id2, string);
	},
	resetButton: function () {
		this.disableElement('nextBtnId');
		this.replaceElement('backBtnId', 'startBtnId');
	},
	endOfExecution: function () {
		this.resetTable();
		this.resetButton();
		this.resetTextField();
		this.resetVariables();
		this.disableElement('nextBtnId');
		this.replaceElement('backBtnId', 'startBtnId');
		var idOfRedText = this.getElementByClass('redClass').id;
		this.removeColorClass(idOfRedText, 'redClass');
	},
	startExecution: function () {
		this.applyColorClass('codeContentBP1', 'redClass');
		this.replaceElement('startBtnId', 'backBtnId');
		this.enableElement('nextBtnId');
		this.disableElement('backBtnId');
		this.eraseStringFromTextArea('outputText', 'explanationText', this.explanationBP1);
	},
	continueExecution: function () {
		this.currentSiblingElement = this.getElementByClass('redClass');
		this.nextSiblingElement = this.getNextSiblingElement(this.currentSiblingElement);
		this.codeExecutionWithColour();
		if (this.nextSiblingElement.id === 'codeContentBP2') {
			this.eraseString('explanationText');
			this.enableElement('backBtnId');
		}
		else if (this.nextSiblingElement.id === 'codeContentBP3') {
			this.setString('explanationText', this.explanationBP2);
			this.setValueInTable60();
		}
		else if (this.nextSiblingElement.id === 'codeContentBP4')
			this.setStringInTextArea(this.outputBP1, this.explanationBP3);
		else if (this.nextSiblingElement.id === 'codeContentBP5')
			this.setStringInTextArea(this.outputBP2, this.explanationBP4);
		else if (this.nextSiblingElement.id === 'codeContentBP6') {
			this.setInnerHtml('56variable', 'P');
			this.eraseStringFromTextArea('outputText', 'explanationText', this.explanationBP5);
		}
		else if (this.nextSiblingElement.id === 'codeContentBP7') {
			this.setString('explanationText', this.explanationBP6);
			this.setValueInTable56();
		}
		else if (this.nextSiblingElement.id === 'codeContentBP8')
			this.setStringInTextArea(this.outputBP3, this.explanationBP7);
		else if (this.nextSiblingElement.id === 'codeContentBP9') 
			this.eraseStringFromTextArea('explanationText', 'outputText', this.outputBP4);
		else if (this.nextSiblingElement.id === 'codeContentBP10')
			this.setString('outputText', this.outputBP5);
		else if (this.nextSiblingElement.id === 'codeContentBP11') {
			this.setInnerHtml('60byte4', '20');
			this.eraseStringFromTextArea('outputText', 'explanationText', this.explanationBP8);
		}
		else if (this.nextSiblingElement.id === 'codeContentBP12') 
			this.eraseStringFromTextArea('explanationText', 'outputText', this.outputBP6);
		else if (this.nextSiblingElement.id === 'codeContentBP13') {
			this.eraseStringFromTextArea('outputText', 'explanationText', this.explanationBP9);
			this.disableElement('nextBtnId');
			alert('Code running is Over !');
			this.endOfExecution();
		}
	},
	reverseExecution: function () {
		this.currentSiblingElement = this.getElementByClass('redClass');
		this.previousSiblingElement = this.getPsreviousSiblingElement(this.currentSiblingElement);
		this.reverseCodeExecutionWithColour();
		if (this.previousSiblingElement.id === 'codeContentBP1') {
			this.setString('explanationText', this.explanationBP1);
			this.disableElement('backBtnId');
		}
		else if (this.previousSiblingElement.id === 'codeContentBP2') {
			this.eraseString('explanationText');
			this.resetTable60();
		}
		else if (this.previousSiblingElement.id === 'codeContentBP3') 
			this.eraseStringFromTextArea('outputText', 'explanationText', this.explanationBP2);
		else if (this.previousSiblingElement.id === 'codeContentBP4') 
			this.setStringInTextArea(this.outputBP1, this.explanationBP3);
		else if (this.previousSiblingElement.id === 'codeContentBP5') {
			this.setStringInTextArea(this.outputBP2, this.explanationBP4);
			this.setInnerHtml('56variable', '');
		}
		else if (this.previousSiblingElement.id === 'codeContentBP6') {
			this.eraseStringFromTextArea('outputText', 'explanationText', this.explanationBP5);
			this.resetTable56();
		}
		else if (this.previousSiblingElement.id === 'codeContentBP7')
			this.eraseStringFromTextArea('outputText', 'explanationText', this.explanationBP6);
		else if (this.previousSiblingElement.id === 'codeContentBP8')
			this.setStringInTextArea(this.outputBP3, this.explanationBP7);
		else if (this.previousSiblingElement.id === 'codeContentBP9')
			this.setString('outputText', this.outputBP4);
		else if (this.previousSiblingElement.id === 'codeContentBP10') {
			this.eraseStringFromTextArea('explanationText', 'outputText', this.outputBP5);
			this.setInnerHtml('60byte4', '10');
		}
		else if (this.previousSiblingElement.id === 'codeContentBP11')
			this.eraseStringFromTextArea('outputText', 'explanationText', this.explanationBP8);
		else if (this.previousSiblingElement.id === 'codeContentBP12') {
			this.eraseStringFromTextArea('explanationText', 'outputText', this.outputBP6);
			this.enableElement('nextBtnId');
		}
	},

	init: function () {
		this.activateEvents();
	}
}

window.onload = function () {
	window.view.init();
}