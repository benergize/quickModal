function quickModal(message, showX = true, animate=true, closeAction = function() {}) {
	
	if(typeof message === "object") {
		
		if(typeof message.message != "undefined") {
		
			if(typeof message.showX !== "undefined") { showX = message.showX; }
			if(typeof message.animate !== "undefined") { animate = message.animate; }
			if(typeof message.closeAction !== "undefined") { closeAction = message.closeAction; } 
			message = message.message; 
		}
	}
	

	//Remove a previously created potentially still active modal
	if(document.getElementById('modalmodalmodal') !== null) { 

		document.getElementById('modalmodalmodal').remove(); 
	}
	
	if(message === false) { return true; } 

	//Create the container
	let modal = document.createElement("div");
	modal.style.position = 'fixed';
	modal.style.zIndex = 99999;
	modal.style.left = "0";
	modal.style.top = "0";
	modal.style.width="100%";
	modal.style.height="100%";
	modal.style.background="rgba(0,0,0,.55)";
	modal.style.display = "flex";
	modal.style.alignItems = "center";
	modal.style.justifyContent = "center";
	modal.id = "modalmodalmodal";
	modal.style.transition = "all .3s";
	modal.style.opacity = 0;
	modal.onmousedown = function(ev) {
		if(ev.path[0] === this) { closeAction(); document.querySelector("#modalmodalmodal").remove(); }
	}

	//Create the inner modal window
	let modalContent = document.createElement("div");
	modalContent.style.padding = "10px";
	modalContent.style.background = "white";
	modalContent.style.transition = "all 2s";
	modalContent.style.maxWidth = "90%";
	modalContent.style.maxHeight = "90vh";
	modal.appendChild(modalContent); 
	
	//Create the X button
	if(showX) {
		let close = document.createElement("a");
		close.style.display = "block";
		close.style.float = "right";
		close.style.color = "red";
		close.style.textDecoration = "none";
		close.innerHTML = "&times;";
		close.onclick = function(){ closeAction(); this.parentElement.parentElement.remove(); }
		close.href = "javascript:void(0)";
		modalContent.appendChild(close);
	}

	//Create and populate inner modal content
	let content = document.createElement("div");
	content.style.padding = "24px";
	
	if(typeof message === "string") { content.innerHTML = message; }
	else if(typeof message === "object") { content.appendChild(message); }
	modalContent.appendChild(content);

	//Add to DOM
	document.body.appendChild(modal);
	
	//Show the modal either with a fadein or all at once
	if(animate) { setTimeout(d=>{ modal.style.opacity = 1;}, 100); }
	else { modal.style.opacity = 1; }
}
