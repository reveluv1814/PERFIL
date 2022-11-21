
	function mOvr(src,clrOver){ 
		if (!src.contains(event.fromElement)){ 
			src.style.cursor = 'hand'; 
			src.bgColor = clrOver; 
			} 
		} 
	function mOut(src,clrIn){ 
		if (!src.contains(event.toElement)){ 
			src.style.cursor = 'default'; 
			src.bgColor = clrIn; 
			} 
		}
