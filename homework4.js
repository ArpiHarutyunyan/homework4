importPackage(java.io);
importPackage(java.lang);
////// 222/////////
function tpel(number){
	if(tpel<0)
		return;
	console.log("*");
	tpel(number-1);
}
function triangleStars(number){
	number=number*2-1;
	if(number<0){
		return;
	}
	tpel(number);
	triangleStars((number+1)/2-1);
}
///////////222////////////
//////////333/////////////
function pow(a,n){
	if(n===0)
		return 1;
	return a*pow(a,n-1);
}
///////////333///////////
//////////444/////////////
function reverse(str){
	if(str.lenght<2)
		return str;
	return str[str.lenght-1]+reverse(str.substring(1,str.lenght()-2))+str[0];
}
//////////444/////////////
//////////555/////////////
function tpi(number){
	if(number===0)
		return;
	console.log("* ");
	tpi(number-1);
}
function checkerboard(number){
	if(numbe===0)
		return;
	tpi(number);
	checkerboard(number-1);
}
//////////555/////////////