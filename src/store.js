import { createStore } from "redux"
import uuid from "uuid"

const initialState = {
  genders:[
    {id: uuid.v4(), name:"Mujer", image:"images/woman.jpg"},
    {id: uuid.v4(), name:"Hombre", image:"images/man.jpg"},
    {id: uuid.v4(), name:"Niños", image:"images/boy.jpg"}
  ],
  typePublish: "",
  typeProduct: "",
  typeProductItem: "",
  typeProducts:[
    {id: uuid.v4(), name:"Ropa", items:[
      {id: uuid.v4(), name:"Blusas"},
      {id: uuid.v4(), name:"Buzos"},
      {id: uuid.v4(), name:"Camisas"},
      {id: uuid.v4(), name:"Camisetas"},
      {id: uuid.v4(), name:"Chalecos"},
      {id: uuid.v4(), name:"Chaquetas"},
      {id: uuid.v4(), name:"Faldas"},
      {id: uuid.v4(), name:"Jeans"},
      {id: uuid.v4(), name:"Leggins"},
      {id: uuid.v4(), name:"Pantalones"},
      {id: uuid.v4(), name:"Pijamas"},
      {id: uuid.v4(), name:"Sacos"},
      {id: uuid.v4(), name:"Shorts"},
      {id: uuid.v4(), name:"Traje de baño"},
      {id: uuid.v4(), name:"Vestidos"}
    ]},
    {id: uuid.v4(), name:"Calzado", items:[
      {id: uuid.v4(), name:"Alpargatas"},
      {id: uuid.v4(), name:"Chanclas"},
      {id: uuid.v4(), name:"Botas"},
      {id: uuid.v4(), name:"Huaraches"},
      {id: uuid.v4(), name:"Sandalia"},
      {id: uuid.v4(), name:"Zapatos de plataforma"},
      {id: uuid.v4(), name:"Zapatillas running"},
      {id: uuid.v4(), name:"Zapatillas Urbanas"},
      {id: uuid.v4(), name:"Zapatos deportivos"},
      {id: uuid.v4(), name:"Zapatos con alzas"},
      {id: uuid.v4(), name:"Zapatos de tacón"},
      {id: uuid.v4(), name:"Zapatillas indoor"}
    ]},
    {id: uuid.v4(), name:"Alta Costura", items:[
      {id: uuid.v4(), name:"Vestidos"},
      {id: uuid.v4(), name:"Trajes"}
    ]},
    {id: uuid.v4(), name:"Ropa deportiva", items:[
      {id: uuid.v4(), name:"Camisetas"},
      {id: uuid.v4(), name:"Sudaderas"},
      {id: uuid.v4(), name:"Pantalones deportivos"},
      {id: uuid.v4(), name:"Mallas"},
      {id: uuid.v4(), name:"Ropa interior"},
      {id: uuid.v4(), name:"Chandal"},
      {id: uuid.v4(), name:"Faldas"},
      {id: uuid.v4(), name:"Calcetines o medias"},
      {id: uuid.v4(), name:"Bañadores de natación"},
      {id: uuid.v4(), name:"Guayos"}
    ]},
    {id: uuid.v4(), name:"Belleza", items:[
      {id: uuid.v4(), name:"Cosmeticos"},
      {id: uuid.v4(), name:"Cremas humectantes"},
      {id: uuid.v4(), name:"Cuidado Capilar"},
      {id: uuid.v4(), name:"Cuidado corporal"},
      {id: uuid.v4(), name:"Dermocosmetica"},
      {id: uuid.v4(), name:"Tratamientos"},
      {id: uuid.v4(), name:"Higiene"}
    ]},
    {id: uuid.v4(), name:"Accesorios", items:[
      {id: uuid.v4(), name:"Carteras y Bolsos"},
      {id: uuid.v4(), name:"Relojes"},
      {id: uuid.v4(), name:"Cinturones"},
      {id: uuid.v4(), name:"Maletas"},
      {id: uuid.v4(), name:"Morrales"},
      {id: uuid.v4(), name:"Sombreros"},
      {id: uuid.v4(), name:"Bufandas"},
      {id: uuid.v4(), name:"Joyeria"},
      {id: uuid.v4(), name:"Gafas"}
    ]}
  ],
  sizeProduct:[
    {id: uuid.v4(), name:"XXS"},
    {id: uuid.v4(), name:"XS"},
    {id: uuid.v4(), name:"S"},
    {id: uuid.v4(), name:"M"},
    {id: uuid.v4(), name:"L"},
    {id: uuid.v4(), name:"XL"},
    {id: uuid.v4(), name:"XXL"},
    {id: uuid.v4(), name:"XXXL"},
    {id: uuid.v4(), name:"ÚNICA"}
  ],
  brandProduct:[
    {id: uuid.v4(), name:"Otra"},
    {id: uuid.v4(), name:"Abercrombie"},
    {id: uuid.v4(), name:"Adidas"},
    {id: uuid.v4(), name:"Amelia Toro"},
    {id: uuid.v4(), name:"Apology"},
    {id: uuid.v4(), name:"Banana Republic"},
    {id: uuid.v4(), name:"Nike"}
  ],
  stateProduct:[
    {id: uuid.v4(), name:"Nuevo con etiqueta"},
    {id: uuid.v4(), name:"Nuevo sin etiqueta"},
    {id: uuid.v4(), name:"Como nuevo"},
    {id: uuid.v4(), name:"Usado"}
  ],
  products: []
}

const reducerShop = (state = initialState, action) => {
  switch (action.type) {
    case "stablishGender":
      return {
        ...state,
        typePublish: action.gender
      }
    case "stablishProduct":      
      return {
        ...state,
        typeProduct: action.product,
        typeProductItem: action.item
      }
    case "addProduct":
      action.product["id"] = uuid.v4()
      return {
        ...state,
        products: state.products.concat(action.product)
      }    
    default:
      console.log(action.type + ", esta acción no existe")
      break;
  }
  return state
}


export default createStore(reducerShop)