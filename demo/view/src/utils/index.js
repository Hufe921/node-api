function setCookie (cookieName, value, expireHour) {
  let exDate = new Date()
  exDate.setTime(exDate.getTime() + expireHour * 60 * 60 * 1000)
  document.cookie = cookieName + '=' + value + ((expireHour === null) ? '' : ';expires=' + exDate.toGMTString())
}

function getCookie (name) {
  let arr
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  return (arr = document.cookie.match(reg)) ? arr[2] : null
}

function delCookie (name) {
  let expires = new Date()
  expires.setTime(expires.getTime() - 1)
  let cookieValue = getCookie(name)
  if (cookieValue !== null) document.cookie = name + '=' + cookieValue + ';expires=' + expires.toGMTString()
}

export default{
  setCookie,
  getCookie,
  delCookie
}
