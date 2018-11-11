
function openAll()
{
	det = document.getElementsByTagName("details");
	for (var i=0;i<det.length;i++)
	{	
		det[i].setAttribute("open","true");
	}
}
function closeAll()
{
	det = document.getElementsByTagName("details");
	for (var i=0;i<det.length;i++)
	{	
		det[i].removeAttribute("open");
	}
}