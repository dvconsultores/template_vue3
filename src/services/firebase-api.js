import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
import { getDatabase, ref } from 'firebase/database'

// ... other firebase imports
import { VueFire, VueFireAuth } from 'vuefire'

export const firebaseApp = initializeApp({
  // project configuration
  apiKey: "AIzaSyAV8jmG0qmFlCO7lYoyaONHR9-Xnf9a1hA",
  authDomain: "apolotesnet.firebaseapp.com",
  projectId: "apolotesnet",
  storageBucket: "apolotesnet.appspot.com",
  messagingSenderId: "673175469064",
  appId: "1:673175469064:web:1c9c87db32853b12cfa5bd"
})

// used for the databas refs
const db = getDatabase(firebaseApp)

// here we can export reusable database references
export const todosRef = ref(db, 'todos')

export default (app) => {
  app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
}
