document.querySelectorAll('.add-score-btn').forEach((element, index) => {
	element.addEventListener("click",() => {
		addScore(element.dataset.parent,parseInt(element.dataset.value));
	});
});

const scores = localStorage.getItem("scores") || {};
function addScore(parent, inc) {
	if(scores.hasOwnProperty(parent)) {
		scores[parent] += inc;
	} else {
		scores[parent] = inc;
	}
	try {
		document.querySelector("#" + parent + " > .score").innerText = scores[parent]
	} catch(e) {
		//parent doesn't exist or doesn't have
		console.log(e);
	}
}