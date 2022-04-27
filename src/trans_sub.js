import store from "./store";
function trans_sub(prop) {

    return (
        <div className="productDisplay">
        
        {<ul ><li > {prop.productData.from}, {prop.productData.to} ,{prop.productData.amount} </li></ul>}
  
        </div>
    )
}

export default trans_sub;