/* 檢查E-Mail */
function chk_email(email){
  var rege = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9])+$/;
  if(rege.exec(email) == null) {
    return false;
  }else{
    return true;
  }
}

/* 檢查手機 */
function chk_mobile(mobile){
  var rege = /^09[0-9]{8}$/;
  if(rege.exec(mobile) == null) {
    return false;
  }else{
    return true;
  }
}

/* 檢查電話 */
function chk_phone(phone){
  var rege = /^[0-9]{6,10}$/;
  if(rege.exec(phone) == null) {
    return false;
  }else{
    return true;
  }
}

/*檢查數字*/
function chk_number(val){
  var reg = /^[0-9]+$/;
  return reg.test(val);
}

/* 檢查中文字元 */
function chk_cword(cname){
  var rege = /[^\u4e00-\u9fa5]/;
  if (rege.test(f.mb_na.value))
  {
    return false;
  }else{
    return true;
  }
}

/* select 設值 */
function select_set(s,v){
  var o = s.options;
  for(var k=0; k < o.length; k++){
    if(o[k].value ==  v ){
      o[k].selected = true ;
    }
  }
}


/* 檢查日期格式 */
function chk_date(text) {
	if (!text) return false;
	text = text.replace(/[\/-]0?/g, "/");
	if (!text.match(/^\d{4}\/\d{1,2}\/\d{1,2}$/)) {
    return false;
  }
	var d = new Date(text);
  if([d.getFullYear(), d.getMonth() + 1, d.getDate()].join("/") == text){
    return true;
  }else{
    return false
  }
}

/* 選取反轉 */
function re_chk(o){
  for(var k=0; k < o.length; k++){
    if(o[k].checked ==  true ){
      o[k].checked = false ;
    }else if(o[k].checked ==  false ){
      o[k].checked = true ;
    }
  }
}



/* 檢查選取 */
function chk_checked(o)
{
  var checked = false;
  for (var i = 0; i < o.length ; i++)
  {
    if (o[i].checked == true)
    {
      return true;
    }
  }
  return false;
}

/* 檢查身分證字號 */
function chk_ID(sID)
{
  if(sID.length != 10)
  {
    return false;
  }

  sID = sID.toUpperCase();
  var indexstring = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
  var firstcharacter = sID.substring(0,1);
  var secondcharacter = sID.substring(1,2);
  var alphanumber = 0;
  var checknumber,sum,firstnumber,secondnumber;
  var i;

  checknumber = sID.substring(9,10);
  alphanumber = indexstring.indexOf(firstcharacter)+10;
  firstnumber = parseInt(alphanumber/10);
  secondnumber = alphanumber % 10;
  sum = 0;
  for(i=1 ; i<sID.length ; i++)
    sum += sID.substring(i,i+1)*(9-i);
  sum += parseInt((firstnumber*1)) + parseInt((secondnumber*9)) + parseInt(checknumber);
  if((sum % 10) == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

/* AJAX GET */
function ajax_get(url,cmd){
  var dt = new Date();
  url = url + '?t=' + dt.getTime() + '&'+ cmd;
  var xmlhttp = false;
  xmlhttp = (window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
  xmlhttp.open("GET", url,false);
  xmlhttp.send(null);
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
    return xmlhttp.responseText;
  }else{
    alert('伺服器錯誤' + xmlhttp.status );
    return null;
  }
}

/* AJAX POST */
/* cmd="sn=1&na=abc";  */
function ajax_post(url,cmd){
  var dt = new Date();
  url = url + '?t=' + dt.getTime();
  var xmlhttp = false;
  xmlhttp = (window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
  xmlhttp.open("POST", url,false);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');//使用POST
  xmlhttp.send(cmd);
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
    return xmlhttp.responseText;
  }else{
    alert('伺服器錯誤' + xmlhttp.status );
    return null;
  }
}

function sp_random(min,max) {
  return Math.round(Math.random()*(max-min)+min);
}

