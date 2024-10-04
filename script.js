//your code here!
const ol = document.querySelector("ol");

for(let i = 1; i<=10; i++){
	const li = document.createElement("li");
	li.innerText = `Item ${i}`
	ol.append(li)
}

let curr = 10;
function addTwoMore(curr){
	for(let i = 1; i<=2; i++){
		const li = document.createElement("li");
		li.innerText = `Item ${curr + 1}`;
		ol.append(li);
		curr++;
	}
}

ol.addEventListener('scroll', function(){
	if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
		addTwoMore(curr)
		curr = curr+2;
	}
})

