var information=document.getElementById("info");
var b=document.getElementById("bt");
b.addEventListener("click",function(){
	var or=new XMLHttpRequest();
	or.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
	or.onload=function()
	{
		console.log(or.responseText);
		var data=JSON.parse(or.responseText);
		renderhtml(data);
	};
	or.send();

	function renderhtml(d)
	{
		htmls="";
		for(i=0;i<d.length;i++)
		{
			htmls+="<p>"+d[i].name+" is a "+d[i].species+" who likes ";
			for(j=0;j<d[i].foods.likes.length;j++)
			{
				if(j==0)
				{
					htmls+=d[i].foods.likes[j];
				}
				else
				{
					htmls+=" and "+d[i].foods.likes[j];
				}
			}
			htmls+=" and dislikes ";
			for(k=0;k<d[i].foods.dislikes.length;k++)
			{
				if(k==0)
				{
					htmls+=d[i].foods.dislikes[k];
				}
				else
				{
					htmls+=" and "+d[i].foods.dislikes[k]+"</p>";
				}
			}

		}
		document.write(htmls);
		information.insertAdjacentHTML(beforeend)

	}

})
