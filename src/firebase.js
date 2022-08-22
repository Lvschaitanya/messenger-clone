import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const fireApp = firebase.initializeApp({
    // apiKey: "AIzaSyDyuwt2tNo0QFjhSIJshUq2e5kx-_4QTqA",
    // authDomain: "messenger-3651c.firebaseapp.com",
    // projectId: "messenger-3651c",
    // storageBucket: "messenger-3651c.appspot.com",
    // messagingSenderId: "45323029149",
    // appId: "1:45323029149:web:483d9e880cdab239fc6274",
    // measurementId: "G-NHJEP47PKY"
    apiKey: "AIzaSyBD9OGpJr2m15AK6B03SE01ZTAucKdjA2U",
    authDomain: "msngr-47dca.firebaseapp.com",
    projectId: "msngr-47dca",
    storageBucket: "msngr-47dca.appspot.com",
    messagingSenderId: "947884423482",
    appId: "1:947884423482:web:c4baa8bd6e235de40cf803",
    measurementId: "G-1PS306VNB1"
})

const db = fireApp.firestore();

export default db

/*
    <div className="msg">
      <Card className={`message ${isUser ? 'user' : ''}`}>
        <CardContent>
            <Typography variant='h5' component='h2'>
                {!isUser && `${message.userName}:`}{message.message}
            </Typography>
        </CardContent>
      </Card>
    </div>
*/