import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Contact from "./Pages/Contact/Contact";
import AboutMe from "./Pages/AboutMe/AboutMe";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import Header from "./Components/Header/Header";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Ethno',
      'Alien'
    ].join(','),
  }
});

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

function App() {

  const router = createBrowserRouter([{
    path: "/home",
    element: <Layout><HomePage /></Layout>
  }, {
    path: "/",
    element: <Layout><HomePage /></Layout>
  }, {
    path: "/contact",
    element: <Layout><Contact /></Layout>
  }, {
    path: "/aboutme",
    element: <Layout><AboutMe /></Layout>
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
