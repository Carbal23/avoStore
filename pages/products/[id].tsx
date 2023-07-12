import react, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import style from "./[id].module.css";

const initial: TProduct = {
  id: "",
  name: "",
  sku: "",
  price: 0,
  image: "",
  attributes: {
    description: "",
    shape: "",
    hardiness: "",
    taste: "",
  },
};

const ProductItem = ({onDataUpdate}:any) => {
  const [productItem, setProductItem] = useState<TProduct>(initial);
  const [inputValue, setInputValue] = useState("")
  const router = useRouter();
  const {
    query: { id },
  } = router;
  
  useEffect(() => {
    const getProductItem = async () => {
      const url = `/api/avo/${id}`;
      const peticion = await fetch(url);
      const result = await peticion.json();
      console.log(result);
      setProductItem(result);
    };

    getProductItem();
  }, [id]);

  const handleOnchange = (e:ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value;
    setInputValue(value);
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    onDataUpdate(inputValue);
    setInputValue("");
  }


  if (productItem === null) {
    return;
  }

  return (
    <div className={style.bigContainer}>
      <div className={style.gridContainer}>
        <div className={style.containerImg}>
          <img src={productItem.image} alt="" />
        </div>
        <div className={style.containerBuy}>
          <h3 className={style.title}>{productItem.name}</h3>
          <p className={style.precio}>${productItem.price}</p>
          <p className={style.sku}>sku: {productItem.sku}</p>

          <form className={style.form} onSubmit={handleSubmit}>
            <input type="number" name="" className={style.input} onChange={handleOnchange} value={inputValue}/>
            <input type="submit" value="Add to cart" className={style.buttonAdd} />
          </form>
        </div>
        <div className={style.containerInfo}>
          <div className={style.info}>
            <h4>About this Avocado</h4>
            <p>{productItem.attributes.description}</p>
          </div>
        </div>
      </div>
      <div className={style.gridAtributes}>
        <div className={style.atributes}>
          <h4 className={style.title2}>Attributes</h4>
        </div>
        <div className={style.gridField}>
          <p className={style.fieldAtributes}>Shape:</p>
        </div>
        <div className={style.gridField}>
          <p className={style.resultAtributes}>{productItem.attributes.shape}</p>
        </div>
        <div className={style.gridField}>
          <p className={style.fieldAtributes}>Hardiness:</p>
        </div>
        <div className={style.gridField}>
          <p className={style.resultAtributes}>{productItem.attributes.hardiness}</p>
        </div>
        <div className={style.gridField}>
          <p className={style.fieldAtributes}>Taste:</p>
        </div>
        <div className={style.gridField}>
          <p className={style.resultAtributes}>{productItem.attributes.taste}</p>
        </div>
      </div>
   
    </div>
  );
};

export default ProductItem;
