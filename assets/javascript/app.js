document.addEventListener("DOMContentLoaded", function (event) {
// Initialize Firebase
    var config = {
        apiKey: "AIzaSyBOygkysiivNcgDy99n_gN_vwc79UYDpsc",
        authDomain: "colorsync-d51c0.firebaseapp.com",
        databaseURL: "https://colorsync-d51c0.firebaseio.com",
        projectId: "colorsync-d51c0",
        storageBucket: "",
        messagingSenderId: "245958944724"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    //Get Elements
    var colorPicker = document.getElementById("picker");
    var boxDiv = document.getElementById("color-box");
    var submitButton = document.getElementById("submit-change");

    database.ref('/pickedColor').on('value', function(snapshot){
        boxDiv.style.backgroundColor = snapshot.val().pickedColor;
    });

    submitButton.onclick = function(){
        let pickedColor = colorPicker.value;
        
        database.ref('/pickedColor').set({
            pickedColor: pickedColor
        });
    }
    
});


