// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create section for Password Criteria in class .card-criteria
var divCiteria = document.querySelector("div.card-criteria");
//Create div for criteria
var divCiteriaQuestions1 = document.createElement("div");
var divCiteriaQuestions2 = document.createElement("div");
var divCiteriaQuestions3 = document.createElement("div");
var divCiteriaQuestions4 = document.createElement("div");
var divCiteriaQuestions5 = document.createElement("div");
var divCiteriaQuestions6 = document.createElement("div");
var divCiteriaQuestions7 = document.createElement("div");
var divCiteriaAnswers1 = document.createElement("div");
var divCiteriaAnswers2 = document.createElement("div");
var divCiteriaAnswers3 = document.createElement("div");
var divCiteriaAnswers4 = document.createElement("div");
var divCiteriaAnswers5 = document.createElement("div");
var divCiteriaAnswers6 = document.createElement("div");
var divCiteriaAnswers7 = document.createElement("div");
// Create ordered list element
var listCiteria = document.createElement("ul");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li5 = document.createElement("li");
var li6 = document.createElement("li");
var li7 = document.createElement("li");
// Add text for list items
divCiteriaQuestions1.textContent = "Exclude Ambiguous Characters:";
divCiteriaQuestions2.textContent = "Include Symbols:";
divCiteriaQuestions3.textContent = "Include Numbers:";
divCiteriaQuestions4.textContent = "Include Lowercase Characters:";
divCiteriaQuestions5.textContent = "Include Uppercase Characters:";
divCiteriaQuestions6.textContent = "Exclude Similar Characters:";
divCiteriaQuestions7.textContent = "Exclude Ambiguous Characters:";
//Append Criteria list
divCiteria.appendChild(listCiteria);
// Append list items to ordered list element 
listCiteria.appendChild(li1);
listCiteria.appendChild(li2);
listCiteria.appendChild(li3);
listCiteria.appendChild(li4);
listCiteria.appendChild(li5);
listCiteria.appendChild(li6);
listCiteria.appendChild(li7);
// Append Textbox to div
var Answer1txt= document.createElement('INPUT'); 
Answer1txt.type = "text";
Answer1txt.id = "Answer1";
Answer1txt.size = "20";
divCiteriaAnswers1.appendChild(Answer1txt );
// Append Checkbox to div
var Answer2chk = document.createElement("INPUT");
var Answer3chk = document.createElement("INPUT");
var Answer4chk = document.createElement("INPUT");
var Answer5chk = document.createElement("INPUT");
var Answer6chk = document.createElement("INPUT");
var Answer7chk = document.createElement("INPUT");
Answer2chk.setAttribute("type", "checkbox");
Answer3chk.setAttribute("type", "checkbox");
Answer4chk.setAttribute("type", "checkbox");
Answer5chk.setAttribute("type", "checkbox");
Answer6chk.setAttribute("type", "checkbox");
Answer7chk.setAttribute("type", "checkbox");
Answer2chk.id="Answer2"
Answer3chk.id="Answer3"
Answer4chk.id="Answer4"
Answer5chk.id="Answer5"
Answer6chk.id="Answer6"
Answer7chk.id="Answer7"
divCiteriaAnswers2.appendChild(Answer2chk);
divCiteriaAnswers3.appendChild(Answer3chk);
divCiteriaAnswers4.appendChild(Answer4chk);
divCiteriaAnswers5.appendChild(Answer5chk);
divCiteriaAnswers6.appendChild(Answer6chk);
divCiteriaAnswers7.appendChild(Answer7chk);
//div add remark
divCiteriaAnswers1.innerHTML+= "Must be 8 - 128 characters";
divCiteriaAnswers2.innerHTML+= "(e.g. @#$% )";
divCiteriaAnswers3.innerHTML+= "(e.g. 123456)";
divCiteriaAnswers4.innerHTML+= "(e.g. abcdefgh)";
divCiteriaAnswers5.innerHTML+= "(e.g. ABCDEFGH)";
divCiteriaAnswers6.innerHTML+= "(e.g. i, l, 1, L, o, 0, O )";
divCiteriaAnswers7.innerHTML+= "(e.g. { } [ ] ( ) / \ ' &ldquo; ` ~ , ; : . < > )";
// Append div to ordered list list 
li1.appendChild(divCiteriaQuestions1)
li2.appendChild(divCiteriaQuestions2)
li3.appendChild(divCiteriaQuestions3)
li4.appendChild(divCiteriaQuestions4)
li5.appendChild(divCiteriaQuestions5)
li6.appendChild(divCiteriaQuestions6)
li7.appendChild(divCiteriaQuestions7)
li1.appendChild(divCiteriaAnswers1)
li2.appendChild(divCiteriaAnswers2)
li3.appendChild(divCiteriaAnswers3)
li4.appendChild(divCiteriaAnswers4)
li5.appendChild(divCiteriaAnswers5)
li6.appendChild(divCiteriaAnswers6)
li7.appendChild(divCiteriaAnswers7)
//Set Style
divCiteria.setAttribute("style", "font-size:14px;");
li1.setAttribute("style", "display: flex;  flex-direction: row ;");
li2.setAttribute("style", "display: flex;  flex-direction: row ;");
li3.setAttribute("style", "display: flex;  flex-direction: row ;");
li4.setAttribute("style", "display: flex;  flex-direction: row ;");
li5.setAttribute("style", "display: flex;  flex-direction: row ;");
li6.setAttribute("style", "display: flex;  flex-direction: row ;");
li7.setAttribute("style", "display: flex;  flex-direction: row ;");
divCiteriaQuestions1.setAttribute("style", "width: 30%;");
divCiteriaQuestions2.setAttribute("style", "width: 30%;");
divCiteriaQuestions3.setAttribute("style", "width: 30%;");
divCiteriaQuestions4.setAttribute("style", "width: 30%;");
divCiteriaQuestions5.setAttribute("style", "width: 30%;");
divCiteriaQuestions6.setAttribute("style", "width: 30%;");
divCiteriaQuestions7.setAttribute("style", "width: 30%;");
divCiteriaAnswers1.setAttribute("style", "padding-left: 10%;");
divCiteriaAnswers2.setAttribute("style", "padding-left: 10%;");
divCiteriaAnswers3.setAttribute("style", "padding-left: 10%;");
divCiteriaAnswers4.setAttribute("style", "padding-left: 10%;");
divCiteriaAnswers5.setAttribute("style", "padding-left: 10%;");
divCiteriaAnswers6.setAttribute("style", "padding-left: 10%;");
divCiteriaAnswers7.setAttribute("style", "padding-left: 10%;");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerater();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate Passowrd
function passwordGenerater(){
  var PasswordLength=document.getElementById("Answer1").value;
  if (chkPasswordLength( PasswordLength)){
    var PasswordCriteria=setPasswordCriteria();
    var Password ="";
    for ( var y = 0; y < PasswordLength; y++ ) {
      Password += PasswordCriteria.charAt(Math.floor(Math.random() * PasswordCriteria.length));
    }
    return Password;
  }
  else
  {return "";}
}

//Generatechar list for generate password
function setPasswordCriteria(){
  var PasswordCriteria="";
  var IncludeSymbols= document.getElementById("Answer2").checked;
  var IncludeNumbers=document.getElementById("Answer3").checked;
  var IncludeLowercase= document.getElementById("Answer4").checked;
  var IncludeUppercase= document.getElementById("Answer5").checked;
  var ExcludeSimilar= document.getElementById("Answer6").checked;
  var ExcludeAmbiguous= document.getElementById("Answer7").checked;
  var IncludeUppercase= document.getElementById("Answer5").checked;
  if (!IncludeSymbols && !IncludeNumbers && !IncludeLowercase && !IncludeUppercase)
  {
    window.alert("At least one character type should be selected!");
  return "";}
  else
  {
  if (IncludeSymbols){PasswordCriteria+="~`!@#$%^&*()_-+={[}]|\:;&ldquo;'<,>.?/"};
  if (IncludeNumbers){PasswordCriteria+="0123456789"};
  if (IncludeLowercase){ PasswordCriteria+="abcdefghijklmnopqrstuvwxyz"};
  if (IncludeUppercase){ PasswordCriteria+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"};
  if (ExcludeSimilar){ PasswordCriteria=excludeCharacter(PasswordCriteria,"il1Lo0O")};
  if (ExcludeAmbiguous){ PasswordCriteria=excludeCharacter(PasswordCriteria,"{ } [ ] ( ) / \ ' &ldquo; ` ~ , ; : . < >")};
  return PasswordCriteria;  
  }
}

//remove unwant char
function excludeCharacter(words, exludeWords){
  for (let x =0;  x<exludeWords.length; x++)
  { 
    words= words.replace(exludeWords.charAt(x),"");
  }
  return words;
  }
  
//Check Password Length
function chkPasswordLength(PasswordLength){
  if (PasswordLength>=8 && PasswordLength<=128) {return (true);}
  else
  {
    window.alert("Password Length:\n(e.g. at least 8 characters and no more than 128 characters)");}
    return (false);
  ;
}