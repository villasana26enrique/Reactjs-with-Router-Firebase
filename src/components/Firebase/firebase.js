import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		/*Luego de activar el metodo de autenticacion en el
		panel de Firebase, debemos importar el paquete (esta arriba)
		y luego se instancia de esta manera*/

		this.auth = app.auth();
	}

	// AUTH API of Firebase, here the functions with his endpoints

	//SignUp Function
	doCreateUserWithEmailAndPassword = (email, password) => 
		this.auth.createUserWithEmailAndPassword(email, password);

	//LogIn Function
	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	//SignOut Function
	doSignOut = () => this.auth.SignOut();

	//Passwrod Reset Function
	doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

	//Password update function
	doPasswordUpdate = password =>
		this.auth.currentUser.updatePassword(password);
}

export default Firebase;