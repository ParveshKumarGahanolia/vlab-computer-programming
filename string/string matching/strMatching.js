window.model = {
	string1 : '',
	string2 : '',
}

window.view = {

	i: 0,	
	k: 1,	
	j: 0,	
	s1i: 0,
	s1k: 0,
	s2j: 0,
	outputStrSM1: 'String str2 is found in str1.',
	outputStrSM2: 'String str2 is not found in str1.',
	outputStrSC1: 'Strings str2 and str1 are same.',
	outputStrSC2: 'String str1 is greater than str2.',
	outputStrSC3: 'String str2 is greater than str1.',

	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},

	activateEvents: function() {
		this.addClickEvent('startBtn', function() { view.startButton() });
		this.addClickEvent('nextBtn', function() { view.nextButton() });
		this.addClickEvent('strMatch', function() { view.showStrMatchExp() });
		this.addClickEvent('strComp', function() { view.showStrComparExp() });
	},

	showStrMatchExp: function () {
		this.replaceElement('stringComparMainDiv','stringMatchMainDiv');
		this.replaceElement('stringComparTextDiv','stringMatchTextDiv');
		this.replaceElement('strComparCode','strMatchCode');
	},

	showStrComparExp: function () {
		this.replaceElement('stringMatchMainDiv','stringComparMainDiv');
		this.replaceElement('stringMatchTextDiv','stringComparTextDiv');
		this.replaceElement('strMatchCode','strComparCode');
	},

	getSelectedLoopId: function(id) {
		var list_of_loop = document.getElementById(id);
		var selected_loop = list_of_loop.options[list_of_loop.selectedIndex].id;
		return selected_loop;
	},

	applyColorClass: function (id, colorClass) {
		var elementbyid = document.getElementById(id);
		elementbyid.className += ' ' + colorClass;
	},

	removeColorClass: function (id, colorClass) {
		var elementbyid = document.getElementById(id);
		elementbyid.classList.remove(colorClass);
	},

	replaceElement: function (id1, id2) {
    	document.getElementById(id1).style.display = 'none';
    	document.getElementById(id2).style.display = 'block';  	 
    },

	resetVariables: function() {
		this.j = 0;
		this.s2j = 0;
	},


 	getString: function (id) {
		var string = document.getElementById(id).value;
		return string;
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

	startButton: function() {
  		var selected_loop = this.getSelectedLoopId('pointerList');
		if (selected_loop === 'strMatch')
		{
			this.executionStartSM();
		}
		if (selected_loop === 'strComp')
		{
			this.executionStartSC();
		}
	},

	nextButton: function() {
  		var selected_loop = this.getSelectedLoopId('pointerList');
		if (selected_loop === 'strMatch')
		{
			this.executionNextSM();
		}
		if (selected_loop === 'strComp')
		{
			this.executionNextSC();
		}
	},

	setStringInMemoryMap: function (id, string) {	
    	for (var i = 0; i <= string.length; ++i) {
    		if( i < string.length ) {
        		document.getElementById(id).rows[0].cells[i].innerHTML = string[i];
        	} 
        	else if ( i = string.length ) {
        		document.getElementById(id).rows[0].cells[i].innerHTML = '/0';
        	}
    	}    	
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

	executionStartSM: function() {
		model.string1 = this.getString('str1');
		model.string2 = this.getString('str2');
		if ( model.string1.length > 7 || model.string2.length > 7 || model.string1.length < 1 || model.string2.length < 1 || model.string2.length > model.string1.length) {
			alert('Maximum String Size allowed is Seven, Minimum Size is One and size of str2 should be less than equal to size of str1');
			return false;
		}
		var firstChildId = this.getFirstChildId('strMatchCode');
		this.applyColorClass(firstChildId, 'redClass');	
	},

	executionNextSM: function() {
		var classId = this.getClassId('redClass');
		var currentChildId = this.getNextChildId(classId);
		var previousChildId = this.getPreviousChildId(currentChildId);

		if (currentChildId === 'codeContentSM2') {
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		else if (currentChildId === 'codeContentSM3') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			this.setInnerHtml('iVariable', 'i = ');
			this.setInnerHtml('jVariable', 'j = ');
			this.setInnerHtml('kVariable', 'k = ');
		}

		else if (currentChildId === 'codeContentSM4') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			this.setStringInMemoryMap('memoryMap1', model.string1);
			this.setStringInMemoryMap('memoryMap2', model.string2);	
		}

		else if (currentChildId === 'codeContentSM5') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			this.setInnerHtml('iValue', '0');
			this.setInnerHtml('jValue', '0');
			this.setInnerHtml('kValue', '0');
		}

		else if (currentChildId === 'codeContentSM6') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		else if (currentChildId === 'codeContentSM7') 
		{
			if (this.s1i != model.string1.length) 
			{
				this.applyColorClass(currentChildId, 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
				this.showVariables('variableMap1', this.i, 'i');

				this.hideVariables('variableMap1', this.k);
				this.k = 1 + this.i;
				this.showVariables('variableMap1', this.k, 'k');

				this.hideVariables('variableMap2', this.j);
				this.resetVariables();				
				this.showVariables('variableMap2', this.j, 'j');

				this.setInnerHtml('kValue', this.s1k);
				this.setInnerHtml('jValue', this.s2j);
			}
			else if (this.s1i === model.string1.length) 
			{
				this.setInnerHtml('outputStr', this.outputStrSM2);
				alert('Code running is Over !');
			}
		}

		else if (currentChildId === 'codeContentSM8') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		else if (currentChildId === 'codeContentSM9') 
		{
			if (this.s1k != model.string1.length && this.s2j != model.string2.length) {
				this.applyColorClass(currentChildId, 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			} 
			else if (this.s1k === model.string1.length || this.s2j === model.string2.length ) {
				this.applyColorClass('codeContentSM14', 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			}
		}

		else if (currentChildId === 'codeContentSM10') 
		{
			if (model.string1[this.s1k] != model.string2[this.s2j]) 
			{
				this.applyColorClass(currentChildId, 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			}
			else if (model.string1[this.s1k] === model.string2[this.s2j]) 
			{
				this.applyColorClass('codeContentSM12', 'redClass');
				this.removeColorClass(previousChildId, 'redClass');

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

				
			}
		}

		else if (currentChildId === 'codeContentSM13') 
		{
			this.applyColorClass('codeContentSM8', 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		else if (currentChildId === 'codeContentSM11' && model.string1[this.s1k] != model.string2[this.s2j]) 
		{
			this.applyColorClass('codeContentSM14', 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		else if (currentChildId === 'codeContentSM15') 
		{
			if (this.s2j === model.string2.length) 
			{
				this.applyColorClass(currentChildId, 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
				this.setInnerHtml('outputStr', this.outputStrSM1);
			}
			else if (this.s2j != model.string2.length) 
			{
				this.applyColorClass('codeContentSM18', 'redClass');
				this.removeColorClass(previousChildId, 'redClass');

				this.s1i = this.s1i + 1;
				this.s1k = this.s1i;
				this.setInnerHtml('iValue', this.s1i);

				this.hideVariables('variableMap1', this.i);
				this.i = this.i + 2;
				this.showVariables('variableMap1', this.i, 'i');

			}
		}

		else if (currentChildId === 'codeContentSM16') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		else if (currentChildId === 'codeContentSM17') 
		{
			alert('Code running is Over !');
		}

		else if (currentChildId === 'codeContentSM19') 
		{
			this.applyColorClass('codeContentSM6', 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}
	},

	executionStartSC: function() {
		model.string1 = this.getString('str1');
		model.string2 = this.getString('str2');
		if ( model.string1.length > 7 || model.string2.length > 7 || model.string1.length < 1 || model.string2.length < 1 ) {
			alert('Maximum String Size allowed is Seven, Minimum Size is One.');
			return false;
		}
		var firstChildId = this.getFirstChildId('strComparCode');
		this.applyColorClass(firstChildId, 'redClass');
	},

	executionNextSC: function() {
		var classId = this.getClassId('redClass');
		var currentChildId = this.getNextChildId(classId);
		var previousChildId = this.getPreviousChildId(currentChildId);

		if (currentChildId === 'codeContentSC2') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		else if (currentChildId === 'codeContentSC3') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			this.setInnerHtml('iVariable', 'i = ');
			this.setInnerHtml('jVariable', 'j = ');
		}

		else if (currentChildId === 'codeContentSC4') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			this.setStringInMemoryMap('memoryMap1', model.string1);
			this.setStringInMemoryMap('memoryMap2', model.string2);	
		}

		else if (currentChildId === 'codeContentSC5') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			this.setInnerHtml('iValue', '0');
			this.setInnerHtml('jValue', '0');
			this.showVariables('variableMap1', this.i, 'i');
			this.showVariables('variableMap2', this.j, 'j');
		}

		else if (currentChildId === 'codeContentSC6') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		else if (currentChildId === 'codeContentSC7') 
		{
			if (this.s1i < model.string1.length && this.s2j < model.string2.length) 
			{
				this.applyColorClass(currentChildId, 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			}
			else if (this.s1i === model.string1.length && this.s2j === model.string2.length) 
			{
				this.applyColorClass('codeContentSC13', 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			}
			else if (this.s2j === model.string2.length && this.s1i < model.string1.length || this.s1i === model.string1.length && this.s2j < model.string2.length) 
			{
				this.applyColorClass('codeContentSC13', 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			}
		}

		else if (currentChildId === 'codeContentSC8') 
		{
			if (model.string1[this.s1i] > model.string2[this.s2j]) 
			{
				this.applyColorClass(currentChildId, 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			}
			else 
			{
				this.applyColorClass('codeContentSC9', 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			}	
		}

		else if (currentChildId === 'codeContentSC10') 
		{
			if (model.string1[this.s1i] < model.string2[this.s2j]) 
			{
				this.applyColorClass(currentChildId, 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			}
			else 
			{
				this.applyColorClass('codeContentSC11', 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
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

			}	
		}

		else if (currentChildId === 'codeContentSC12') 
		{
			this.applyColorClass('codeContentSC6', 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		else if (currentChildId === 'codeContentSC9' || currentChildId === 'codeContentSC11') 
		{
			this.applyColorClass('codeContentSC13', 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
		}

		else if (currentChildId === 'codeContentSC14') 
		{
			if (model.string1[this.s1i] > model.string2[this.s2j] || model.string1[this.s1i] < model.string2[this.s2j] || this.s2j === model.string2.length && this.s1i < model.string1.length || this.s1i === model.string1.length && this.s2j < model.string2.length) 
			{
				this.applyColorClass('codeContentSC15', 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			}
			else if (model.string1[this.s1i] === model.string2[this.s2j]) 
			{
				this.applyColorClass(currentChildId, 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
				this.setInnerHtml('outputStr', this.outputStrSC1);
			}
		}

		else if (currentChildId === 'codeContentSC16') 
		{
			if (model.string1[this.s1i] > model.string2[this.s2j] || this.s2j === model.string2.length && this.s1i < model.string1.length) 
			{
				this.applyColorClass(currentChildId, 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
				this.setInnerHtml('outputStr', this.outputStrSC2);
			}
			else if (model.string1[this.s1i] < model.string2[this.s2j] || this.s1i === model.string1.length && this.s2j < model.string2.length) 
			{
				this.applyColorClass('codeContentSC17', 'redClass');
				this.removeColorClass(previousChildId, 'redClass');
			}
		}

		else if (currentChildId === 'codeContentSC18') 
		{
			this.applyColorClass(currentChildId, 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			this.setInnerHtml('outputStr', this.outputStrSC3);
		}

		else if (currentChildId === 'codeContentSC17' || currentChildId === 'codeContentSC19' || currentChildId === 'codeContentSC15') 
		{
			this.applyColorClass('codeContentSC19', 'redClass');
			this.removeColorClass(previousChildId, 'redClass');
			alert('Code running is Over !');
		}
	},

	init: function () {
		this.activateEvents();
	}
}
window.onload = function () {
	window.view.init();
}