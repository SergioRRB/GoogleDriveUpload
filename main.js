
$(document).ready(function(){

   var ClientId = "144645927242-fksm05t7mk9of5vm36ds1h3eu6670ti6.apps.googleusercontent.com";

   var redirect_uri = "http://localhost/GoogleDriveUpload/upload.html";

   var scope = "https://www.googleapis.com/auth/drive";

   var url = "";

   $("#login").click(function(){

      singIn(ClientId,redirect_uri,scope,url)

   });

   function singIn(clientId,redirect_uri,scope,url){

      url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
      +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
      +"&access_type=offline";

      window.location = url;

   }

})