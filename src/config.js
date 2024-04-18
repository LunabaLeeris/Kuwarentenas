import { getDatabase, ref, get} from "firebase/database"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // Input your database here
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
