import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCy-eDf9v-P59nrIvzVzopodE-7AnqH7ak",
    authDomain: "portfolio-59c4d.firebaseapp.com",
    projectId: "portfolio-59c4d",
    storageBucket: "portfolio-59c4d.appspot.com",
    messagingSenderId: "344686017909",
    appId: "1:344686017909:web:d8c25daeb1fd5e283e273c",
    measurementId: "G-6KN45V1REM"
};

let firebaseInstance: FirebaseApp;

const getAppInstance = () => {
    if (!firebaseInstance) firebaseInstance = initializeApp(firebaseConfig);
    return firebaseInstance;
}

const GetFirestoreInstance = () =>{
    const appInstance = getAppInstance();
    return getFirestore(appInstance);
}

const GetAnalyticsInstance = () =>{
    const appInstance = getAppInstance();
    return getAnalytics(appInstance);
}

const FirebaseServices = {
    getFirestoreInstance: GetFirestoreInstance,
    getAnalyticsInstance: GetAnalyticsInstance,
}

export default FirebaseServices;
