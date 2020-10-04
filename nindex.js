window.onload = function(){
	
	
	
	personInfo = function(){
		show(1)
	}
	
	
	
	newpro = function(){
		show()
	}
	
	show = function(num=0){
		let elements = document.getElementsByTagName('iframe')
		for(let i=0;i<elements.length;i++){		
			if(num === i+1){
				document.getElementsByTagName('iframe')[i].style.display = 'block'
			}else{
				document.getElementsByTagName('iframe')[i].style.display = 'none'
			}
		}
	}
}
	
