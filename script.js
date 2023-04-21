//your JS code here. If required.
let btn = document.getElementsByTagName("input")[0];
let select = document.getElementById("colorSelect");
btn.addEventListener('click', ()=>{
	select.remove(select.selectedIndex);
})  