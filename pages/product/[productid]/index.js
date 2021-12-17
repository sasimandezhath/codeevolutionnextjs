import { useRouter } from "next/router";

function ProductionDetail(){
    const router = useRouter();
    const productId = router.query.productid;
    return <h1>Details about product {productId}</h1>
}

export default ProductionDetail;