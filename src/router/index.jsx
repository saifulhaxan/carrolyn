import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AboutPage } from "../views/About";
import { BuyNow } from "../views/BuyNow";
import { ContactUs } from "../views/Contact";
import { GalleryPage } from "../views/Gallery";
import { Home } from "../views/Home";
import { BookDetailPage } from "../views/BuyNow/BookDetailPage";

function AppRouter() {
    return (
        <BrowserRouter basename="carrolynn">
            <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/buynow" element={<BuyNow />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/book-detail/:id" element={<BookDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;