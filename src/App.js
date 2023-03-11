import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />
  }, {
    path: "/Form",
    element: <Form />
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
