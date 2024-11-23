import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from "./pages/weatherDashboard";
import CityPage from "./pages/cityPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
