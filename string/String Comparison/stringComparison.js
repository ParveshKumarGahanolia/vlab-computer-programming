// Author: Parvesh Kumar Gahanolia 
// Email: <parvesh@vlabs.ac.in>
window.model = {
	inputString1: '',
	inputString2 : '',
}

window.view = {
	i: 0,		
	j: 0,	
	s1i: 0,
	s2j: 0,
	currentSiblingElement: new Object(),
	nextSiblingElement: new Object(),
	outputStrSC1: 'Strings str2 and str1 are same.',
	outputStrSC2: 'String str1 is greater than str2.',
	outputStrSC3: 'String str2 is greater than str1.',
	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},
	activateEvents: function() {
		this.addClickEvent('startBtnId', function() { view.startExperiment() });
		this.addClickEvent('okBtnId', function() { view.validationInput() });
		this.addClickEvent('nextBtnId', function() { view.compareString() });
		this.addClickEvent('stopBtnId', function() { view.stopExperiment() });
	},
	disableElement: function(Id) {
		document.getElementById(Id).disabled = true;
	},
	enableElement: function(Id) {
		document.getElementById(Id).disabled = false;
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
	getString: function (id) {
		var string = document.getElementById(id).value;
		return string;
	},
	getNextSiblingElement: function (element) {
		var nextSiblingElement = element.nextSibling;
		nextSiblingElement = nextSiblingElement.nextSibling;
		return nextSiblingElement;
	},
	setValue: function (id, valueToSet) {
		document.getElementById(id).value = valueToSet;
	},
	getElementByClass: function (className) {
		var element = document.getElementsByClassName(className);
		return element[0];
	},
	resetStrings: function () {
		this.setInnerHtml('outputStr', '');
		this.setInnerHtml('iVariable', '');
		this.setInnerHtml('jVariable', '');
		this.setInnerHtml('iValue', '');
		this.setInnerHtml('jValue', '');
		this.setValue('str1Id', '');
		this.setValue('str2Id', '');
	},
	validationInput: function () {
		model.inputString1 = this.getString('str1Id');
		model.inputString2 = this.getString('str2Id');
		if ( model.inputString1.length > 7 || model.inputString2.length > 7 || model.inputString1.length < 1 || model.inputString2.length < 1 ) {
			alert('Maximum String Size allowed is Seven, Minimum Size is One.');
			return false;
		}
		this.enableElement('startBtnId');
		this.disableElement('okBtnId');
		this.disableElement('str1Id');
		this.disableElement('str2Id');
	},
	startExperiment: function () {
		this.replaceElement('startBtnId', 'stopBtnId');
		this.enableElement('stopBtnId');
		this.enableElement('nextBtnId');
		this.disableElement('startBtnId');
		this.applyColorClass('codeContentSC1', 'redClass');
	},
	stopExperiment: function () {
		this.endOfExecution();
	},
	setStringInTable: function (id, string) {
		for (var i = 0; i <= string.length; ++i) {
			if ( i < string.length ) {
				document.getElementById(id).rows[0].cells[i].innerHTML = string[i];
			}
			else if ( i === string.length ) {
				document.getElementById(id).rows[0].cells[i].innerHTML = '/0';
			}
		}
	},
	clearStringTable: function (id) {
		var tableLength = document.getElementById(id).rows[0].cells.length;
		for (var i = 0; i <= tableLength; ++i) {
			if ( i < tableLength ) {
				document.getElementById(id).rows[0].cells[i].innerHTML = '';
			}
			else if ( i === tableLength ) {
				document.getElementById(id).rows[0].cells[0].innerHTML = '/0';
			}
		}
	},
	clearVariableTable: function (id) {
		var tableLength = document.getElementById(id).rows[0].cells.length;
		for (var i = 0; i <= tableLength; ++i) {
			if ( i < tableLength ) {
				document.getElementById(id).rows[0].cells[i].innerHTML = '';
			}
		}
	},
	resetTable: function () {
		this.clearStringTable('memoryMap1');
		this.clearVariableTable('variableMap1');
		this.clearStringTable('memoryMap2');
		this.clearVariableTable('variableMap2');
	},
	showVariables: function (id, variable, value) {
		document.getElementById(id).rows[0].cells[variable].innerHTML = value;
	},
	hideVariables: function (id, variable) {
		document.getElementById(id).rows[0].cells[variable].innerHTML = '';
	},
	setInnerHtml: function (id, innerHTML) {
		document.getElementById(id).innerHTML = innerHTML;
	},
	resetVariablesAtEnd: function () {
		this.i = 0;
		this.j = 0;
		this.s1i = 0;
		this.s2j = 0;
		model.inputString1 = '';
		model.inputString2 = '';
	},
	resetButtonAndTextField: function () {
		this.replaceElement('stopBtnId', 'startBtnId');
		this.enableElement('str1Id');
		this.enableElement('str2Id');
		this.enableElement('okBtnId');
		this.disableElement('nextBtnId');
		this.disableElement('stopBtnId');
	},
	endOfExecution: function () {
		this.resetVariablesAtEnd();
		this.resetStrings();
		this.resetButtonAndTextField();
		this.resetTable();
		var idOfRedText = this.getElementByClass('redClass').id;
		this.removeColorClass(idOfRedText, 'redClass');
	},
	codeExecutionWithColour: function () {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(this.nextSiblingElement.id, 'redClass');
	},
	showVariablesij: function () {
		this.setInnerHtml('iVariable', 'i = ');
		this.setInnerHtml('jVariable', 'j = ');
	},
	showStringInMemoryMap: function () {
		this.setStringInTable('memoryMap1', model.inputString1);
		this.setStringInTable('memoryMap2', model.inputString2);
	},
	initializationOfVariables: function () {
		this.setInnerHtml('iValue', '0');
		this.setInnerHtml('jValue', '0');
		this.showVariables('variableMap1', this.i, 'i');
		this.showVariables('variableMap2', this.j, 'j');
	},
	incrementInVariableValue: function () {
		this.applyColorClass('codeContentSC11', 'redClass');
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.s1i = this.s1i + 1;
		this.s2j = this.s2j + 1;
		this.setInnerHtml('iValue', this.s1i);
		this.setInnerHtml('jValue', this.s2j);
		this.hideVariables('variableMap1', this.i);
		this.i = this.i + 2;
		this.showVariables('variableMap1', this.i, 'i');
		this.hideVariables('variableMap2', this.j);
		this.j = this.j + 2;
		this.showVariables('variableMap2', this.j, 'j');
	},
	compareString: function() {
		this.currentSiblingElement = this.getElementByClass('redClass');
		this.nextSiblingElement = this.getNextSiblingElement(this.currentSiblingElement);
		if (this.nextSiblingElement.id === 'codeContentSC2' || this.nextSiblingElement.id === 'codeContentSC6')
			this.codeExecutionWithColour();
		else if (this.nextSiblingElement.id === 'codeContentSC3') {
			this.codeExecutionWithColour();
			this.showVariablesij();
		}
		else if (this.nextSiblingElement.id === 'codeContentSC4') {
			this.codeExecutionWithColour();
			this.showStringInMemoryMap();
		}
		else if (this.nextSiblingElement.id === 'codeContentSC5') {
			this.codeExecutionWithColour();
			this.initializationOfVariables();	
		}
		else if (this.nextSiblingElement.id === 'codeContentSC7') {
			if (this.s1i < model.inputString1.length && this.s2j < model.inputString2.length)
				this.codeExecutionWithColour();
			else if (this.s1i === model.inputString1.length && this.s2j === model.inputString2.length) {
				this.removeColorClass(this.currentSiblingElement.id, 'redClass');
				this.applyColorClass('codeContentSC13', 'redClass');
			}
			else if (this.s2j === model.inputString2.length && this.s1i < model.inputString1.length || this.s1i === model.inputString1.length && this.s2j < model.inputString2.length) {
				this.removeColorClass(this.currentSiblingElement.id, 'redClass');
				this.applyColorClass('codeContentSC13', 'redClass');
			}
		}
		else if (this.nextSiblingElement.id === 'codeContentSC8') {
			if (model.inputString1[this.s1i] > model.inputString2[this.s2j]) 
				this.codeExecutionWithColour();
			else {
				this.removeColorClass(this.currentSiblingElement.id, 'redClass');
				this.applyColorClass('codeContentSC9', 'redClass');
			}	
		}
		else if (this.nextSiblingElement.id === 'codeContentSC10') {
			if (model.inputString1[this.s1i] < model.inputString2[this.s2j]) 
				this.codeExecutionWithColour();
			else 
				this.incrementInVariableValue();
		}
		else if (this.nextSiblingElement.id === 'codeContentSC12') {
			this.removeColorClass(this.currentSiblingElement.id, 'redClass');
			this.applyColorClass('codeContentSC6', 'redClass');
		}
		else if (this.nextSiblingElement.id === 'codeContentSC9' || this.nextSiblingElement.id === 'codeContentSC11') {
			this.removeColorClass(this.currentSiblingElement.id, 'redClass');
			this.applyColorClass('codeContentSC13', 'redClass');
		}
		else if (this.nextSiblingElement.id === 'codeContentSC14') {
			if (model.inputString1[this.s1i] > model.inputString2[this.s2j] || model.inputString1[this.s1i] < model.inputString2[this.s2j] || this.s2j === model.inputString2.length && this.s1i < model.inputString1.length || this.s1i === model.inputString1.length && this.s2j < model.inputString2.length)	{
				this.removeColorClass(this.currentSiblingElement.id, 'redClass');
				this.applyColorClass('codeContentSC15', 'redClass');
			}
			else if (model.inputString1[this.s1i] === model.inputString2[this.s2j]) {
				this.codeExecutionWithColour();
				this.setInnerHtml('outputStr', this.outputStrSC1);
			}
		}
		else if (this.nextSiblingElement.id === 'codeContentSC16') {
			if (model.inputString1[this.s1i] > model.inputString2[this.s2j] || this.s2j === model.inputString2.length && this.s1i < model.inputString1.length) {
				this.codeExecutionWithColour();
				this.setInnerHtml('outputStr', this.outputStrSC2);
			}
			else if (model.inputString1[this.s1i] < model.inputString2[this.s2j] || this.s1i === model.inputString1.length && this.s2j < model.inputString2.length) {
				this.removeColorClass(this.currentSiblingElement.id, 'redClass');
				this.applyColorClass('codeContentSC17', 'redClass');
			}
		}
		else if (this.nextSiblingElement.id === 'codeContentSC18') {
			this.codeExecutionWithColour();
			this.setInnerHtml('outputStr', this.outputStrSC3);
		}
		else if (this.nextSiblingElement.id === 'codeContentSC17' || this.nextSiblingElement.id === 'codeContentSC19' || this.nextSiblingElement.id === 'codeContentSC15') {
			this.removeColorClass(this.currentSiblingElement.id, 'redClass');
			this.applyColorClass('codeContentSC19', 'redClass');
			alert('Code running is Over !');
			this.endOfExecution();
		}
	},	
	init: function () {
		this.activateEvents();
	}
}

window.onload = function () {
	window.view.init();
}