import react, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import {GetStaticProps} from "next"
import style from "./id.module.css";

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

export const getStaticPaths = async ()=>{
  const peticion = await fetch("https://avo-store-theta.vercel.app/api/avo");
  const response = await peticion.json();
  const { data, length }: TAPIAvoResponse = response;

  const paths = data.map(avo=>({
    params: {
      id: avo.id
    }
  }))

  return{
    paths,
    //incremental static generation
    //404 for everything else
    fallback: false
  }
}

export const getStaticProps : GetStaticProps = async ({params}) => {
  const id = params?.id as string
  const peticion = await fetch(`https://avo-store-theta.vercel.app/api/avo/${id}` );
  const response: TProduct = await peticion.json();
  

  return {
    props: {
      product: response,
    },
  };
};

type Loquesea = {
  onDataUpdate: any,
  product: TProduct
}

const ProductItem = ({onDataUpdate, product}:Loquesea ) => {
  // const [productItem, setProductItem] = useState<TProduct>(initial);
  // const router = useRouter();
  // const {
  //   query: { id },
  // } = router;
  
  // useEffect(() => {
  //   const getProductItem = async () => {
  //     const url = `/api/avo/${id}`;
  //     const peticion = await fetch(url);
  //     const result = await peticion.json();
  //     console.log(result);
  //     setProductItem(result);
  //   };

  //   getProductItem();
  // }, [id]);
  const [inputValue, setInputValue] = useState("")

  const handleOnchange = (e:ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value;
    setInputValue(value);
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    onDataUpdate(inputValue);
    setInputValue("");
  }


  if (product === null) {
    return;
  }

  return (
    <div className={style.bigContainer}>
      <div className={style.gridContainer}>
        <div className={style.containerImg}>
          <img src={product.image} alt="" />
        </div>
        <div className={style.containerBuy}>
          <h3 className={style.title}>{product.name}</h3>
          <p className={style.precio}>${product.price}</p>
          <p className={style.sku}>sku: {product.sku}</p>

          <form className={style.form} onSubmit={handleSubmit}>
            <input type="number" name="" className={style.input} onChange={handleOnchange} value={inputValue}/>
            <input type="submit" value="Add to cart" className={style.buttonAdd} />
          </form>
        </div>
        <div className={style.containerInfo}>
          <div className={style.info}>
            <h4>About this Avocado</h4>
            <p>{product.attributes.description}</p>
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
          <p className={style.resultAtributes}>{product.attributes.shape}</p>
        </div>
        <div className={style.gridField}>
          <p className={style.fieldAtributes}>Hardiness:</p>
        </div>
        <div className={style.gridField}>
          <p className={style.resultAtributes}>{product.attributes.hardiness}</p>
        </div>
        <div className={style.gridField}>
          <p className={style.fieldAtributes}>Taste:</p>
        </div>
        <div className={style.gridField}>
          <p className={style.resultAtributes}>{product.attributes.taste}</p>
        </div>
      </div>
   
    </div>
  );
};

export default ProductItem;
