
  var inputValue= document.querySelector("#top-container") ;
  var btn=document.querySelector("#btn-translate");
console.log(typeof inputValue);
console.log(inputValue);

var serverURL="https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(txt){
  return serverURL+"?"+"text="+txt;
}

function printOutput(num){
return document.querySelector('#bottom-container').innerText=num;
}

btn.addEventListener('click',clicked);

function clicked(){
   console.log("clicked");
   var output=inputValue.value;
   fetch(getTranslationURL(output))
   .then(response => response.json())
   .then(json => printOutput(json.contents.translated))


     
}

