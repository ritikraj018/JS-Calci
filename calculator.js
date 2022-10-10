function display(value)
{
	document.getElementById('textArea').value += value
}

function calculate()
{
	var value = document.getElementById('textArea').value
	var answer = eval(value)
	document.getElementById('textArea').value = answer
}

function clr()
{
	document.getElementById('textArea').value =''
}