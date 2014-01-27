window.model = {

}

window.view = {

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

	explanationCBR1 : 'This program demonstrates the use of pointers in call-by-reference method.',
	explanationCBR2 : 'Variables A and B are declared as integer types and assigned values 5 and 9 respectively.',
	explanationCBR3 : 'Value stored in variable A is 5 which is displayed in the output.',
	explanationCBR4 : 'Value stored in variable B is 9 which is displayed in the output.',
	explanationCBR5 : 'The function \'swap\' is called and addresses of A and B are passed as arguments.',
	explanationCBR6 : 'Function call. Local integer type pointer variables Pa and Pb get assigned the address of A and B respectively.',
	explanationCBR7 : 'A local integer type variable \'temp\' is declared and the value at address in Pa is assigned to it i.e. A\'s value is stored in temp.',
	explanationCBR8 : 'Value at address in Pa is changed to the value at address in Pb i.e. B\'s value is now stored in A.',
	explanationCBR9 : 'Value at addrss in Pb is changed to the value of temp i.e. temp is now stored in B.',
	explanationCBR10 : 'Function returns.',
	explanationCBR11 : 'The New Value stored in variable A is 9 which is displayed in the output.',
	explanationCBR12 : 'The New Value stored in variable B is 5 which is displayed in the output.',
	explanationCBR13 : 'Program Execution Complete',

	outputCBR1 : 'Value of A is 5',
	outputCBR2 : 'Address of B is 9',
	outputCBR3 : 'Value of A after swapping is 9',
	outputCBR4 : 'Value of B after swapping is 5',

	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},

	activateEvents: function() {
		this.addClickEvent('startBtnBP', function() { view.startButton() });
		this.addClickEvent('backBtnBP', function() { view.backButton() });
		this.addClickEvent('nextBtnBP', function() { view.nextButton() });
		this.addClickEvent('basicPointer', function() { view.replaceElement('cbrPointerText','basicPointerText') });
		this.addClickEvent('cbrPointer', function() { view.replaceElement('basicPointerText','cbrPointerText') });
	},

	getSelectedLoopId: function(id) {
		var list_of_loop = document.getElementById(id);
		var selected_loop = list_of_loop.options[list_of_loop.selectedIndex].id;
		return selected_loop;
	},

	applyColorRed: function (id, colorClass) {
		var elementbyid = document.getElementById(id);
		elementbyid.className += ' ' + colorClass;
	},

	removeColorRed: function (id, colorClass) {
		var elementbyid = document.getElementById(id);
		elementbyid.classList.remove(colorClass);
	},

	replaceElement: function (id1, id2) {
    	document.getElementById(id1).style.display = 'none';
    	document.getElementById(id2).style.display = 'block';  	 
    },

    setString: function (id, value) {
		document.getElementById(id).value = value;
	},

	eraseString: function (id) {
    	document.getElementById(id).value = '';
	},

	setInnerHtml: function (id, innerHTML) {
 		document.getElementById(id).innerHTML = innerHTML;
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
		if (selected_loop === 'basicPointer')
		{
			this.executionStartBP();
		}
		if (selected_loop === 'cbrPointer')
		{
			this.executionStartCBR();
		}
	},

	nextButton: function() {
  		var selected_loop = this.getSelectedLoopId('pointerList');
		if (selected_loop === 'basicPointer')
		{
			this.executionNextBP();
		}
		if (selected_loop === 'cbrPointer')
		{
			this.executionNextCBR();
		}
	},

	backButton: function() {
  		var selected_loop = this.getSelectedLoopId('pointerList');
		if (selected_loop === 'basicPointer')
		{
			this.executionBackBP();
		}
		if (selected_loop === 'cbrPointer')
		{
			this.executionBackCBR();
		}
	},

	executionStartCBR: function () {
		var firstChildId = this.getFirstChildId('cbrPointerText');
		this.applyColorRed(firstChildId, 'redClass');
		this.replaceElement('startBtnBP', 'backBtnBP');
		this.setString('explanationText', this.explanationCBR1);
		this.eraseString('outputText');
	},

	executionBackCBR: function () {
		var classId = this.getClassId('redClass');
		var previousChildId = this.getPreviousChildId(classId);
		var currentChildId = this.getNextChildId(previousChildId);

		if (previousChildId === 'codeContentCBR1') 
		{
			this.applyColorRed(previousChildId, 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR1);
		}

		else if (previousChildId === 'codeContentCBR2') 
		{
			this.applyColorRed(previousChildId, 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.eraseString('explanationText');
			this.setInnerHtml('60byte1', '');
			this.setInnerHtml('60byte2', '');
			this.setInnerHtml('60byte3', '');
			this.setInnerHtml('60byte4', '');
			this.setInnerHtml('60variable', '');
			this.setInnerHtml('56byte1', '');
			this.setInnerHtml('56byte2', '');
			this.setInnerHtml('56byte3', '');
			this.setInnerHtml('56byte4', '');
			this.setInnerHtml('56variable', '');
		}

		else if (previousChildId === 'codeContentCBR3') 
		{
			this.applyColorRed(previousChildId, 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR2);
			this.eraseString('outputText');
		}

		else if (previousChildId === 'codeContentCBR4') 
		{
			this.applyColorRed(previousChildId, 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR3);
			this.setString('outputText', this.outputCBR1);
		}

		else if (previousChildId === 'codeContentCBR5') 
		{
			this.applyColorRed(previousChildId, 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR4);
			this.setString('outputText', this.outputCBR2);
			this.setInnerHtml('60byte4', '5');
			this.setInnerHtml('56byte4', '9');
		}

		else if (previousChildId === 'codeContentCBR10') 
		{
			this.applyColorRed('codeContentCBR6', 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR5);
			this.setInnerHtml('40byte1', '');
			this.setInnerHtml('40byte2', '');
			this.setInnerHtml('40byte3', '');
			this.setInnerHtml('40byte4', '');
			this.setInnerHtml('40variable', '');
			this.setInnerHtml('36byte1', '');
			this.setInnerHtml('36byte2', '');
			this.setInnerHtml('36byte3', '');
			this.setInnerHtml('36byte4', '');
			this.setInnerHtml('36variable', '');
		}

		else if (previousChildId === 'codeContentCBR11') 
		{
			this.applyColorRed(previousChildId, 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR6);
			this.setInnerHtml('32byte1', '');
			this.setInnerHtml('32byte2', '');
			this.setInnerHtml('32byte3', '');
			this.setInnerHtml('32byte4', '');
			this.setInnerHtml('32variable', '');
		}

		else if (previousChildId === 'codeContentCBR12') 
		{
			this.applyColorRed(previousChildId, 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR7);
		}

		else if (previousChildId === 'codeContentCBR13') 
		{
			this.applyColorRed(previousChildId, 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR8);
		}

		else if (previousChildId === 'codeContentCBR14') 
		{
			this.applyColorRed(previousChildId, 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR9);
			this.setInnerHtml('40byte1', '0');
			this.setInnerHtml('40byte2', '0');
			this.setInnerHtml('40byte3', '0');
			this.setInnerHtml('40byte4', '60');
			this.setInnerHtml('40variable', 'Pa');
			this.setInnerHtml('36byte1', '0');
			this.setInnerHtml('36byte2', '0');
			this.setInnerHtml('36byte3', '0');
			this.setInnerHtml('36byte4', '56');
			this.setInnerHtml('36variable', 'Pb');
			this.setInnerHtml('32byte1', '0');
			this.setInnerHtml('32byte2', '0');
			this.setInnerHtml('32byte3', '0');
			this.setInnerHtml('32byte4', '5');
			this.setInnerHtml('32variable', 'temp');
		}

		else if (previousChildId === 'codeContentCBR6') 
		{
			this.applyColorRed('codeContentCBR15', 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR10);
			this.eraseString('outputText');
		}

		else if (previousChildId === 'codeContentCBR7') 
		{
			this.applyColorRed(previousChildId, 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR11);
			this.setString('outputText', this.outputCBR3);
		}

		else if (previousChildId === 'codeContentCBR8') 
		{
			this.applyColorRed(previousChildId, 'redClass');
			this.removeColorRed(currentChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR12);
			this.setString('outputText', this.outputCBR4);
		}
	},

	executionNextCBR: function () {
		var classId = this.getClassId('redClass');
		var currentChildId = this.getNextChildId(classId);
		var previousChildId = this.getPreviousChildId(currentChildId);

		if (currentChildId === 'codeContentCBR2') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.eraseString('explanationText');
		}

		else if (currentChildId === 'codeContentCBR3') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR2);
			this.setInnerHtml('60byte1', '0');
			this.setInnerHtml('60byte2', '0');
			this.setInnerHtml('60byte3', '0');
			this.setInnerHtml('60byte4', '5');
			this.setInnerHtml('60variable', 'A');
			this.setInnerHtml('56byte1', '0');
			this.setInnerHtml('56byte2', '0');
			this.setInnerHtml('56byte3', '0');
			this.setInnerHtml('56byte4', '9');
			this.setInnerHtml('56variable', 'B');
		}

		else if (currentChildId === 'codeContentCBR4') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR3);
			this.setString('outputText', this.outputCBR1);
		}

		else if (currentChildId === 'codeContentCBR5') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR4);
			this.setString('outputText', this.outputCBR2);
		}

		else if (currentChildId === 'codeContentCBR6') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR5);
			this.eraseString('outputText');
			this.setInnerHtml('60byte4', '9');
			this.setInnerHtml('56byte4', '5');		
		}

		else if (currentChildId === 'codeContentCBR7') 
		{
			this.applyColorRed('codeContentCBR11', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR6);
			this.setInnerHtml('40byte1', '0');
			this.setInnerHtml('40byte2', '0');
			this.setInnerHtml('40byte3', '0');
			this.setInnerHtml('40byte4', '60');
			this.setInnerHtml('40variable', 'Pa');
			this.setInnerHtml('36byte1', '0');
			this.setInnerHtml('36byte2', '0');
			this.setInnerHtml('36byte3', '0');
			this.setInnerHtml('36byte4', '56');
			this.setInnerHtml('36variable', 'Pb');
		}

		else if (currentChildId === 'codeContentCBR12') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR7);
			this.setInnerHtml('32byte1', '0');
			this.setInnerHtml('32byte2', '0');
			this.setInnerHtml('32byte3', '0');
			this.setInnerHtml('32byte4', '5');
			this.setInnerHtml('32variable', 'temp');
		}

		else if (currentChildId === 'codeContentCBR13') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR8);
		}

		else if (currentChildId === 'codeContentCBR14') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR9);
		}

		else if (currentChildId === 'codeContentCBR15') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR10);
			this.setInnerHtml('40byte1', '');
			this.setInnerHtml('40byte2', '');
			this.setInnerHtml('40byte3', '');
			this.setInnerHtml('40byte4', '');
			this.setInnerHtml('40variable', '');
			this.setInnerHtml('36byte1', '');
			this.setInnerHtml('36byte2', '');
			this.setInnerHtml('36byte3', '');
			this.setInnerHtml('36byte4', '');
			this.setInnerHtml('36variable', '');
			this.setInnerHtml('32byte1', '');
			this.setInnerHtml('32byte2', '');
			this.setInnerHtml('32byte3', '');
			this.setInnerHtml('32byte4', '');
			this.setInnerHtml('32variable', '');
		}

	 	else if (currentChildId === 'codeContentCBR16') 
		{
			this.applyColorRed('codeContentCBR7', 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR11);
			this.setString('outputText', this.outputCBR3);
		}

		else if (currentChildId === 'codeContentCBR8') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR12);
			this.setString('outputText', this.outputCBR4);
		}

		else if (currentChildId === 'codeContentCBR9') 
		{
			this.applyColorRed(currentChildId, 'redClass');
			this.removeColorRed(previousChildId, 'redClass');
			this.setString('explanationText', this.explanationCBR13);
			this.eraseString('outputText');
			alert('Code running is Over !');
		}
	},

	executionStartBP: function () {
		var firstChildId = this.getFirstChildId('basicPointerText');
		this.applyColorRed(firstChildId, 'redClass');
		this.replaceElement('startBtnBP', 'backBtnBP');
		this.setString('explanationText', this.explanationBP1);
		this.eraseString('outputText');	
	},

	executionBackBP: function () {
		var classId = this.getClassId('redClass');
		var previousChildId = this.getPreviousChildId(classId);
		var currentChildId = this.getNextChildId(previousChildId);
		this.applyColorRed(previousChildId, 'redClass');
		this.removeColorRed(currentChildId, 'redClass');

		if (previousChildId === 'codeContentBP1') 
		{
			this.setString('explanationText', this.explanationBP1);
		}

		else if (previousChildId === 'codeContentBP2') 
		{
			this.eraseString('explanationText');
			this.setInnerHtml('60byte1', '');
			this.setInnerHtml('60byte2', '');
			this.setInnerHtml('60byte3', '');
			this.setInnerHtml('60byte4', '');
			this.setInnerHtml('60variable', '');	
		}

		else if (previousChildId === 'codeContentBP3') 
		{
			this.setString('explanationText', this.explanationBP2);
			this.eraseString('outputText');
		}

		else if (previousChildId === 'codeContentBP4') 
		{
			this.setString('explanationText', this.explanationBP3);
			this.setString('outputText', this.outputBP1);
		}

		else if (previousChildId === 'codeContentBP5') 
		{
			this.setString('explanationText', this.explanationBP4);
			this.setString('outputText', this.outputBP2);
			this.setInnerHtml('56variable', '');
		}

		else if (previousChildId === 'codeContentBP6') 
		{
			
			this.setString('explanationText', this.explanationBP5);
			this.eraseString('outputText');
			this.setInnerHtml('56byte1', '');
			this.setInnerHtml('56byte2', '');
			this.setInnerHtml('56byte3', '');
			this.setInnerHtml('56byte4', '');
		}

		else if (previousChildId === 'codeContentBP7') 
		{
			this.setString('explanationText', this.explanationBP6);
			this.eraseString('outputText');
		}

		else if (previousChildId === 'codeContentBP8') 
		{
			this.setString('explanationText', this.explanationBP7);
			this.setString('outputText', this.outputBP3);
		}

		else if (previousChildId === 'codeContentBP9') 
		{	
			this.setString('outputText', this.outputBP4);
		}

		else if (previousChildId === 'codeContentBP10') 
		{
			this.eraseString('explanationText');
			this.setString('outputText', this.outputBP5);
			this.setInnerHtml('60byte4', '10');
		}

		else if (previousChildId === 'codeContentBP11') 
		{
			
			this.eraseString('outputText');
			this.setString('explanationText', this.explanationBP8);
		}

		else if (previousChildId === 'codeContentBP12') 
		{
			this.eraseString('explanationText');
			this.setString('outputText', this.outputBP6);
		}

		else if (previousChildId === 'codeContentBP13') 
		{
			this.eraseString('outputText');
			this.setString('explanationText', this.explanationBP9);
			alert('Code running is Over !');
		}
	},
		
	executionNextBP: function () {
		var classId = this.getClassId('redClass');
		var currentChildId = this.getNextChildId(classId);
		var previousChildId = this.getPreviousChildId(currentChildId);
		this.applyColorRed(currentChildId, 'redClass');
		this.removeColorRed(previousChildId, 'redClass');
		
		if (currentChildId === 'codeContentBP2') 
		{
			this.eraseString('explanationText');	
		}

		else if (currentChildId === 'codeContentBP3') 
		{
			this.setString('explanationText', this.explanationBP2);
			this.setInnerHtml('60byte1', '0');
			this.setInnerHtml('60byte2', '0');
			this.setInnerHtml('60byte3', '0');
			this.setInnerHtml('60byte4', '10');
			this.setInnerHtml('60variable', 'A');
		}

		else if (currentChildId === 'codeContentBP4') 
		{
			this.setString('explanationText', this.explanationBP3);
			this.setString('outputText', this.outputBP1);
		}

		else if (currentChildId === 'codeContentBP5') 
		{
			this.setString('explanationText', this.explanationBP4);
			this.setString('outputText', this.outputBP2);
		}

		else if (currentChildId === 'codeContentBP6') 
		{
			this.setInnerHtml('56variable', 'P');
			this.setString('explanationText', this.explanationBP5);
			this.eraseString('outputText');
		}

		else if (currentChildId === 'codeContentBP7') 
		{
			this.setString('explanationText', this.explanationBP6);
			this.setInnerHtml('56byte1', '0');
			this.setInnerHtml('56byte2', '0');
			this.setInnerHtml('56byte3', '0');
			this.setInnerHtml('56byte4', '60');
		}

		else if (currentChildId === 'codeContentBP8') 
		{
			this.setString('explanationText', this.explanationBP7);
			this.setString('outputText', this.outputBP3);
		}

		else if (currentChildId === 'codeContentBP9') 
		{
			this.eraseString('explanationText');
			this.setString('outputText', this.outputBP4);
		}

		else if (currentChildId === 'codeContentBP10') 
		{
			this.setString('outputText', this.outputBP5);
		}

		else if (currentChildId === 'codeContentBP11') 
		{
			this.setInnerHtml('60byte4', '20');
			this.eraseString('outputText');
			this.setString('explanationText', this.explanationBP8);
		}

		else if (currentChildId === 'codeContentBP12') 
		{
			this.eraseString('explanationText');
			this.setString('outputText', this.outputBP6);
		}

		else if (currentChildId === 'codeContentBP13') 
		{
			this.eraseString('outputText');
			this.setString('explanationText', this.explanationBP9);
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