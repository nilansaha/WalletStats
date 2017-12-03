function httpGet(theUrl)
{
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
xmlHttp.send( null );
return xmlHttp.responseText;
}
url = "https://blockchain.info/rawaddr/15QxEW1WQzx3BxSnixyqLHWKHSyhed5r3K";
parameters = "?limit=2";
url = url + parameters;

console.log(httpGet(url));
