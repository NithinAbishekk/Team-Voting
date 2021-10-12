import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCxKG-Q969k6oetW2LHbdjriQa4ZljXwDE",
        authDomain: "class-67-project.firebaseapp.com",
        projectId: "class-67-project",
        storageBucket: "class-67-project.appspot.com",
        messagingSenderId: "200318604276",
        appId: "1:200318604276:web:8d6a74e650383929695fa1"
      };
      
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();