
import './App.css'
import conf from './config/conf';
function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // console.log(import.meta.env.VITE_AAPWRITE_ID)
  console.log(conf.appwriteDatabaseId);

  return (
    <>
      <h1>mega blog with appwrite</h1>
    </>
  )
}

export default App
