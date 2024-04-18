import { getDatabase, ref, get} from "firebase/database"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAI4XCCU8S2qwzniXb3K8v3zJts8ieKg9Q",
  authDomain: "kuwarentenas.firebaseapp.com",
  databaseURL: "https://kuwarentenas-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kuwarentenas",
  storageBucket: "kuwarentenas.appspot.com",
  messagingSenderId: "180140898789",
  appId: "1:180140898789:web:e2cdcfa585edd3fb47170c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let db = null;

async function fetchData() {
    try {
        const locationRef = ref(database, "/");
        const snapshot = await get(locationRef);
        db = snapshot.val(); 
        console.log("Data fetched:", db);
        return db;
    } catch (err) {
        console.error("Error getting JSON values:", err);
        return null;
    }
}

fetchData();

export { db };