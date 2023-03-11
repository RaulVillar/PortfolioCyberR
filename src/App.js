import { RouterProvider, createBrowserRouter } from "react-router-dom";
import  HomePage  from "./Pages/HomePage/HomePage";
import Contact from "./Pages/Contact/Contact";
import AboutMe from "./Pages/AboutMe/AboutMe";

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <HomePage/> 
  }, {
    path: "/Contact",
    element: <Contact />
  }, {
    path: "/AboutMe",
    element: <AboutMe />
  }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
