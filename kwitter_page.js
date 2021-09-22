const firebaseConfig = {
      apiKey: "AIzaSyBW-oThBjyGnKfp6a_d3vWc3XUqac0H_JE",
      authDomain: "kwitter-2501.firebaseapp.com",
      databaseURL: "https://kwitter-2501-default-rtdb.firebaseio.com",
      projectId: "kwitter-2501",
      storageBucket: "kwitter-2501.appspot.com",
      messagingSenderId: "660957298593",
      appId: "1:660957298593:web:03dfebd502219256a155e0"
    };
  
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            like:0,
            message:msg,
            name:user_name
      });

      document.getElementById("msg").value="";
}
