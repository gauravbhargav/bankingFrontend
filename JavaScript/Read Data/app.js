// Initialize Firebase
var config = {
    apiKey: "AIzaSyDOQHjCANyj2jqDG18Ml4zNlzaLofpTE_8",
    authDomain: "banking-f6b66.firebaseapp.com",
    databaseURL: "https://banking-f6b66-default-rtdb.firebaseio.com",
    projectId: "banking-f6b66",
    storageBucket: "banking-f6b66.appspot.com",
    messagingSenderId: "451619303105",
    appId: "1:451619303105:web:9d926f559b978073eaae40"
};

firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}


