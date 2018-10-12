const stampToHuman = (t,t2)=> {
	let diff = t - t2;
	let secs = new Date(diff).getSeconds();
	let min = new Date(diff).getMinutes();
	let hor = new Date(diff).getUTCHours();
	console.log(hor)
	if(secs < 9){
		secs = `0${secs}`
	}
	if(min < 9){
		min = `0${min}`
	}
	if(hor < 9){
		hor = `0${hor}`
	}
	if(!min){
		min = '00';
		hor = '00';
	}
	return `${hor}:${min}:${secs}`
}
export default stampToHuman;