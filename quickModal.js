function quickModal(message, showX = true, animate=true) {

	//Remove a previously created potentially still active modal
	if(document.getElementById('modalmodalmodal') !== null) { document.getElementById('modalmodalmodal').remove(); }

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

	//Create the inner modal window
	let modalContent = document.createElement("div");
	modalContent.style.padding = "10px";
	modalContent.style.background = "white";
	modalContent.style.transition = "all 2s";  
	modal.appendChild(modalContent); 
	
	//Create the X button
	if(showX) {
		let close = document.createElement("a");
		close.style.display = "block";
		close.style.float = "right";
		close.style.color = "red";
		close.style.textDecoration = "none";
		close.innerHTML = "&times;";
		close.onclick = function(){this.parentElement.parentElement.remove();}
		close.href = "javascript:void(0)";
		modalContent.appendChild(close);
	}

	//Create and populate inner modal content
	let content = document.createElement("div");
	content.innerHTML = message;
	content.style.padding = "24px";
	modalContent.appendChild(content);

	//Add to DOM
	document.body.appendChild(modal);
	
	//Show the modal either with a fadein or all at once
	if(animate) { setTimeout(d=>{modal.style.opacity = 1;},100); }
	else { modal.style.opacity = 1; }
}
