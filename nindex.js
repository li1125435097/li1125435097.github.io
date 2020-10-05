window.onload = function(){
	
	
	
	personInfo = function(){show(1,event)}
	resourceLs = function(){show(2,event)}
	
	
	
	newpro = function(){show()}
	show = function(num=0,_this){
		
		// 刷新内容区域信息
		let contentEMTs = document.getElementsByTagName('iframe')
		for(let i=0;i<contentEMTs.length;i++){		
			if(num === i+1){
				document.getElementsByTagName('iframe')[i].style.display = 'block'
			}else{
				document.getElementsByTagName('iframe')[i].style.display = 'none'
			}
		}
		
		// 高亮选中菜单
		let navEMT  = document.getElementsByClassName('aside')[0]
		let navEMTs = navEMT.getElementsByTagName('div')
		for(let i=0;i<navEMTs.length;i++){		
			navEMTs[i].style.backgroundColor = 'rgba(230,120,0,0.3)'
		}
		_this ? _this.target.style.backgroundColor = 'rgba(230,120,0,0.8)' : null
		// console.log(_this.target)
	}
}
	
