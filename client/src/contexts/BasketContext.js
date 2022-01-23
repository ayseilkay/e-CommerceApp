import { createContext, useState,useContext,useEffect } from "react";


const BasketContext = createContext();
const defaultBasket = JSON.parse(localStorage.getItem('basket')) || []
const BasketProvider = ({children})=>{
    const [items,setItems] = useState(defaultBasket);// sepete atılan ürünler olarak dusunulebilir.

    useEffect(()=>{
        localStorage.setItem('basket',JSON.stringify(items));
    },[items])// basket(items) her degistiginde git local storage dan al veriyi
    const addToBasket= (data,findBasketItem)=>{
        if(!findBasketItem){// SEPETE İLK DEFA EKLENINCE BU KOD CALISIR
          return  setItems((items)=> [data,...items])// eger ürün sepette yoksa ekleme yapacak 
        }
        const filtered = items.filter((item)=> item.id !== findBasketItem.id) // ürün sepette varsa kaldırmak için bu kısım calısır
        setItems(filtered);
    }
    const removeFromBasket = (item_id)=>{
        const filtered = items.filter((item)=> item.id !== item_id);
        setItems(filtered);
    }
    //Tamamen sepeti boşaltmak istersek.
    const emptyBasket = ()=>{ setItems([])

    }
    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket,
        emptyBasket
    }
    

    return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
}

const useBasket = ()=>useContext(BasketContext)

export {useBasket,BasketProvider}