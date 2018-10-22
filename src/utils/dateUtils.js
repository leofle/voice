const stampToHuman = (t,t2)=> {
	let diff = Number(t) - Number(t2),
	secs = new Date(diff).getSeconds(),
	min = new Date(diff).getMinutes(),
	hor = new Date(diff).getUTCHours();

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