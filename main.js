document.querySelector("#forme").addEventListener("submit",function(e){
  e.preventDefault()
  submitProduct()
})

//   1/ import firebase libraries and api key
var firebaseConfig = {
  apiKey: "AIzaSyBLnO_vTfSefq2ghnAip0vIY3YOssbpcJg",
  authDomain: "facts2-2db14.firebaseapp.com",
  databaseURL: "https://facts2-2db14.firebaseio.com",
  projectId: "facts2-2db14",
  storageBucket: "facts2-2db14.appspot.com",
  messagingSenderId: "198515689021",
  appId: "1:198515689021:web:18c5fa91d262bf70"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//  2/ create database variable
let database = firebase.database()
//  3/ create ref
let ref = database.ref("product") 
function submitProduct(){
// 4/ prepare data 
let data = {
    // name : document.querySelector("#name").value,
    email : document.querySelector("#Email").value,
    // number: document.querySelector("#number").value,
    // link : document.querySelector("#link").value,
    message : document.querySelector("#message").value

}
ref.push(data)
}
//  5/ upload data (pusch/set)

