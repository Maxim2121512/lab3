function callAjax(r,a,e,o,n){$.ajax({url:r,method:a,data:o,contentType:n,success:e,error:function(r){return console.error("Was an error:",r)}})}export{callAjax};