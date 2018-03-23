//创建cookie
function createCookie(key,value,expires){
	var cookieText = encodeURIComponent(key)+"="+encodeURIComponent(value)+";path=/";
	//console.log(cookieText);
	//判断是否试着有效期
	if (!isNaN(expires)) {
		var date = new Date();
		date.setDate(date.getDate()+expires);
		cookieText +=";expires="+date;
	}
	document.cookie = cookieText;
	console.log(decodeURIComponent(cookieText));
}
function $cookie(key){
	var cookieKey = encodeURIComponent(key);
	var start = document.cookie.indexOf(cookieKey);
	alert(start);
	if(start !== -1){
		var end = document.cookie.indexOf(";",start);
		if(end === -1){
			end = document.cookie.length;
		}
		var cookieValue =decodeURIComponent(document.cookie.substring(start+cookieKey.length,end));
	}
}

function getCookie(key){
	var arr =document.cookie.split("; ");
	for(var n=0;n<arr.length;n++){
		var list = arr[n].split("=");
		if(enccodeURIComponent(key)===list[0]){
			return decodeURIComponent(list[1]);
		}
	}
}
//删除cookie
function remove(key){
	document.cookie = enccodeURIComponent(key)+"="+";expires="+new Date(0);
}