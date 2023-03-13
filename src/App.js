import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Contact from "./Pages/Contact/Contact";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Error from "./Pages/Error/Error";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Ethno',
      'Alien'
    ].join(','),
  }
});

function App() {

  const router = createBrowserRouter([{
    path: "/home",
    element: <HomePage />
  }, {
    path: "/contact",
    element: <Contact />
  }, {
    path: "/aboutMe",
    element: <AboutMe />
  }, {
    path: "/error",
    element: <Error />
  }
  ])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
