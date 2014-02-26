// Author: Parvesh Kumar Gahanolia 
// Email: <parvesh@vlabs.ac.in>
window.model = {
	inputString1: '',
	inputString2 : '',
}

window.view = {
	i: 0,	
	k: 1,	
	j: 0,	
	s1i: 0,
	s1k: 0,
	s2j: 0,
	currentSiblingElement: new Object(),
	nextSiblingElement: new Object(),
	outputStrSM1: 'String str2 is found in str1.',
	outputStrSM2: 'String str2 is not found in str1.',
	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},
	activateEvents: function() {
		this.addClickEvent('startBtnId', function() { view.startExperiment() });
		this.addClickEvent('okBtnId', function() { view.validationInput() });
		this.addClickEvent('nextBtnId', function() { view.matchString() });
		this.addClickEvent('stopBtnId', function() { view.stopExperiment() });
	},
	setValue: function (id, value) {
		document.getElementById(id).value = value;
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
	resetVariables: function () {
		this.j = 0;
		this.s2j = 0;
	},
	resetStrings: function () {
		this.setInnerHtml('outputStr', '');
		this.setInnerHtml('iVariable', '');
		this.setInnerHtml('jVariable', '');
		this.setInnerHtml('kVariable', '');
		this.setInnerHtml('iValue', '');
		this.setInnerHtml('jValue', '');
		this.setInnerHtml('kValue', '');
		this.setValue('str1Id', '');
		this.setValue('str2Id', '');
	},
	validationInput: function () {
		model.inputString1 = this.getString('str1Id');
		model.inputString2 = this.getString('str2Id');
		if ( model.inputString1.length > 7 || model.inputString2.length > 7 || model.inputString1.length < 1 || model.inputString2.length < 1 || model.inputString2.length > model.inputString1.length) {
			alert('Maximum String Size allowed is Seven, Minimum Size is One and size of str2 should be less than equal to size of str1');
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
		this.applyColorClass('codeContentId1', 'redClass');
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
	setInnerHtml: function (id, innerText) {
		document.getElementById(id).innerHTML = innerText;
	},
	resetVariablesAtEnd: function () {
		this.i = 0;
		this.k = 1;	
		this.j = 0;
		this.s1i = 0;
		this.s1k = 0;
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
	codeExecutionWithColourAndId: function (id) {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(id, 'redClass');
	},
	showVariablesijk: function () {
		this.setInnerHtml('iVariable', 'i = ');
		this.setInnerHtml('jVariable', 'j = ');
		this.setInnerHtml('kVariable', 'k = ');
	},
	showStringInMemoryMap: function () {
		this.setStringInTable('memoryMap1', model.inputString1);
		this.setStringInTable('memoryMap2', model.inputString2);
	},
	initializationOfVariables: function () {
		this.setInnerHtml('iValue', '0');
		this.setInnerHtml('jValue', '0');
		this.setInnerHtml('kValue', '0');
	},
	assignValueiTok: function () {
		this.codeExecutionWithColour();
		this.showVariables('variableMap1', this.i, 'i');
		this.hideVariables('variableMap1', this.k);
		this.k = 1 + this.i;
		this.showVariables('variableMap1', this.k, 'k');
		this.hideVariables('variableMap2', this.j);
		this.resetVariables();			
		this.showVariables('variableMap2', this.j, 'j');
		this.setInnerHtml('kValue', this.s1k);
		this.setInnerHtml('jValue', this.s2j);
	},
	incrementInVariableValue: function () {
		this.codeExecutionWithColourAndId('codeContentId12');
		this.s1k = this.s1k + 1;
		this.s2j = this.s2j + 1;
		this.setInnerHtml('kValue', this.s1k);
		this.setInnerHtml('jValue', this.s2j);
		this.hideVariables('variableMap2', this.j);
		this.j = this.j + 2;
		this.showVariables('variableMap2', this.j, 'j');
		this.hideVariables('variableMap1', this.k);
		this.k = this.k + 2;
		this.showVariables('variableMap1', this.k, 'k');
	},
	assignStringVariableValueiTok: function () {
		this.codeExecutionWithColourAndId('codeContentId18');
		this.s1i = this.s1i + 1;
		this.s1k = this.s1i;
		this.setInnerHtml('iValue', this.s1i);
		this.hideVariables('variableMap1', this.i);
		this.i = this.i + 2;
		this.showVariables('variableMap1', this.i, 'i');
	},
	matchString: function() {
		this.currentSiblingElement = this.getElementByClass('redClass');
		this.nextSiblingElement = this.getNextSiblingElement(this.currentSiblingElement);
		if (this.nextSiblingElement.id === 'codeContentId2' || this.nextSiblingElement.id === 'codeContentId6' || this.nextSiblingElement.id === 'codeContentId8' || this.nextSiblingElement.id === 'codeContentId16')
			this.codeExecutionWithColour();
		else if (this.nextSiblingElement.id === 'codeContentId3') {
			this.codeExecutionWithColour();
			this.showVariablesijk();
		}
		else if (this.nextSiblingElement.id === 'codeContentId4') {
			this.codeExecutionWithColour();
			this.showStringInMemoryMap();	
		}
		else if (this.nextSiblingElement.id === 'codeContentId5') {
			this.codeExecutionWithColour();
			this.initializationOfVariables();
		}
		else if (this.nextSiblingElement.id === 'codeContentId7') {
			if (this.s1i != model.inputString1.length)
				this.assignValueiTok();
			else if (this.s1i === model.inputString1.length) {
				this.setInnerHtml('outputStr', this.outputStrSM2);
				alert('Code running is Over !');
				this.endOfExecution();
			}
		}
		else if (this.nextSiblingElement.id === 'codeContentId9') {
			if (this.s1k != model.inputString1.length && this.s2j != model.inputString2.length)
				this.codeExecutionWithColour();
			else if (this.s1k === model.inputString1.length || this.s2j === model.inputString2.length )
				this.codeExecutionWithColourAndId('codeContentId14');
		}
		else if (this.nextSiblingElement.id === 'codeContentId10') {
			if (model.inputString1[this.s1k] != model.inputString2[this.s2j])
				this.codeExecutionWithColour();
			else if (model.inputString1[this.s1k] === model.inputString2[this.s2j])
				this.incrementInVariableValue();
		}
		else if (this.nextSiblingElement.id === 'codeContentId13')
			this.codeExecutionWithColourAndId('codeContentId8');
		else if (this.nextSiblingElement.id === 'codeContentId11' && model.inputString1[this.s1k] != model.inputString2[this.s2j])
			this.codeExecutionWithColourAndId('codeContentId14');
		else if (this.nextSiblingElement.id === 'codeContentId15') {
			if (this.s2j === model.inputString2.length) {
				this.codeExecutionWithColour();
				this.setInnerHtml('outputStr', this.outputStrSM1);
			}
			else if (this.s2j != model.inputString2.length) 
				this.assignStringVariableValueiTok();
		}
		else if (this.nextSiblingElement.id === 'codeContentId17') {
			alert('Code running is Over !');
			this.endOfExecution();
		}
		else if (this.nextSiblingElement.id === 'codeContentId19')
			this.codeExecutionWithColourAndId('codeContentId6');
	},	
	init: function () {
		this.activateEvents();
	}
}

window.onload = function () {
	window.view.init();
}