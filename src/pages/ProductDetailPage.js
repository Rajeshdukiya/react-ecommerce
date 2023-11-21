import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail.js";
function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
        </div>
     );
}

export default ProductDetailPage;