function quickModal(message, showX = true) {
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

	let modalContent = document.createElement("div");
	modalContent.style.padding = "10px";
	modalContent.style.background = "white";
	modal.appendChild(modalContent); 
	
	if(showX) {
		let close = document.createElement("a");
		close.style.display = "block";
		close.style.float = "right";
		close.style.color = "red";
		close.innerHTML = "&times;";
		close.onclick = function(){this.parentElement.parentElement.remove();}
		close.href = "javascript:void(0)";
		modalContent.appendChild(close);
	}

	let content = document.createElement("div");
	content.innerHTML = message;
	content.style.padding = "24px";
	modalContent.appendChild(content);

	document.body.appendChild(modal);
	modal.style.opacity = 1;
}
