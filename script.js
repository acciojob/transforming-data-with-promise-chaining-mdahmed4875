let number=document.getElementById('ip');
let btn=document.getElementById('btn');
let output=document.getElementById('output');
btn.addEventListener('click',()=>{
	new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(number.value)
		},2000)
	}).then((number)=>{
	     output.textContent=number;
		return new Promise((resolve)=>{
			setTimeout(()=>{
				output.textContent=number*2;
				resolve(number*2);
			},2000)
		})
	}).then((number)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				output.textContent=number-3;
				resolve(number-3);
			},1000)
		})
	}).then((number)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				output.textContent=number/2;
				resolve(number/2);
			},1000)
		})
	}).then((number)=>{
		setTimeout(()=>{
			output.textContent=number+10;
		},1000)
	})
})