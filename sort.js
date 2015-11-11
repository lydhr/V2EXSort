v2exSort();
//bubble sort
function v2exSort(){
	var len=$("#Main .box .item").length;
	if(len>0){
		var box=$("#Main .box:first");
		var a,b;
		for(var i=len-1;i>0;i--){
			for(var j=0;j<i;j++){
				a=box.find(".item:eq("+j+")");
				b=box.find(".item:eq("+(j+1)+")");
				an=a.find(".count_livid").text()-"0";
				bn=b.find(".count_livid").text()-"0";
	    		if(an<bn)a.insertAfter(b);
	    	}	
	    }
	    alert(len+" articles sorted");
	}else{
		alert("Only can sort in V2EX.come pages with articles");
	}
}
