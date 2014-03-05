window.view = {
	getInput: function() {
		 var input = Number(document.getElementById('input').value)
		 if ( input === 0 )
		 	alert('Enter number of disks first !')
		 else 
		 	return input
	},
	changeClass: function(id, className) {
		document.getElementById(id).className = className
	},
	getLastHighlightedDiv: function() {
		var findClass = document.getElementsByClassName('showDivInRed')
		return findClass[0]
	},
	getNextDivToHighlight: function(lastHighlightedDiv) {
		var next = lastHighlightedDiv.nextSibling
		next = next.nextSibling
		return next
	},
	jumpTo: function(targetDivId) {
		var element = document.createElement('div')
		element.id = targetDivId
		return element
	},
	disableElement: function(buttonId) {
		document.getElementById(buttonId).disabled = true
	},
	enableElement: function(buttonId) {
		document.getElementById(buttonId).disabled = false
	},
	addClickEvent: function(id, method) {
		var element = document.getElementById(id)
		element.addEventListener('click', method, false)
	},
	activateEvents: function() {
		this.addClickEvent('btnOk', function() { view.getInput() })
	},
	init: function() {
		this.activateEvents()
	}
}
window.onload = function() { view.init() }