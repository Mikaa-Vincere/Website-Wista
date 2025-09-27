
(function(){
  var b64 = "4oOuiCDigJMgMjAyNSBWaXNhdGEgSm9namEuIERpYnVhdCBPZWxoIFByaW1hLg==";
  function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('')
      .map(function(c){
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  }
  var text;
  try { text = b64DecodeUnicode(b64); }
  catch(e) { text = "© 2025 Wisata Jogja. Dibuat Oleh Prima."; }

  var footer = document.getElementById('siteFooter');
  if (footer) {
    footer.textContent = text;
    // optional styling
    footer.style.padding = "12px";
    footer.style.textAlign = "center";
  }
})();
