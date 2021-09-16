import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

const config = 
{
    apiKey: "AIzaSyDOQkEPlHRX8p34sNrHx_uM00LsFVLGZpo",
    authDomain: "medfinder-2a80f.firebaseapp.com",
    databaseURL: "https://medfinder-2a80f.firebaseio.com",
    projectId: "medfinder-2a80f",
    storageBucket: "medfinder-2a80f.appspot.com",
    messagingSenderId: "644596344486",
    appId: "1:644596344486:web:e9dd2dbbecca87c7c83667",
    measurementId: "G-VWKH24P69F",
  }
	// process.env.NODE_ENV === 'development'
	// 	? JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG)
	// 	: JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG_PUBLIC)

app.initializeApp(config)

export const firebase = app
export const db = app.firestore()
export const storageRef = app.storage().ref()

export const usersRef = db.collection('users')
export const roomsRef = db.collection('chatRooms')
export const messagesRef = roomId => roomsRef.doc(roomId).collection('messages')

export const filesRef = storageRef.child('files')

export const dbTimestamp = firebase.firestore.FieldValue.serverTimestamp()
export const deleteDbField = firebase.firestore.FieldValue.delete()
