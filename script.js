//your code here!
let div1=document.getElementById('infi-list');
let ct=10;
div1.onscroll=function (ev) {
	// console.log(div1.scrollTop,div1.clientHeight,div1.scrollHeight)
	if (div1.scrollTop + div1.clientHeight >= div1.scrollHeight){
		let li1=document.createElement('li');
    ct++;
    li1.innerText=`Item ${ct}`;
    let li2=document.createElement('li');
    ct++;
    li2.innerText=`Item ${ct}`;
    div1.append(li1,li2);
	}
}