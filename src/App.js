import './App.css';
import Container from '@mui/material/Container';
import Navebar from './component/Navebar';
import ImageGallery from './component/ImageGallery';
import Event from './component/Event'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Container fixed>
        <Navebar />
        <ImageGallery />
        <Event />
        <Footer />
      </Container>
    </>
  )
}

export default App;
