export interface AllFarmsInterface {
  data: {
    data: {
      data: [
        {
          name: string,
          description: string,
          summery: string,
          imageCover: string,
          images: string,
          meat: boolean,
          produce: boolean,
          ratingsAverage: number,
          ratingsQuantity: number,
          _id: string
        }
      ]
    }
  }
}

export interface FarmDetailsInterface {
  name: string,
  description: string,
  summery: string,
  imageCover: string,
  images: string,
  location: {
    address: string
  },
  meat: boolean,
  produce: boolean,
  ratingsAverage: number,
  ratingsQuantity: number,
  _id: string,
  id: string
}

export interface FarmCardInterface {
  name: string,
  id: string,
  images: string,
  location: {
    address: string
  },
  meat: boolean,
  produce: boolean,
  ratingsAverage: number
}

export interface ItemInterface {
  _id: string,
  amount: number,
  available: boolean,
  description: string,
  farm: {
    id: string,
    name: string,
  },
  image: [string],
  listedAt: string,
  name: string,
  price: number,
  productReviews: [object],
  ratingsAverage: number,
  ratingsQuantity: number,
  summery: string,
  weight: string
}

export interface RouterQueryInterface {
  data: string,
  [key: string]: string | string[]
}

export interface SignupFormInterface {
  role: string,
  name: string,
  email: string,
  password: string,
  passwordConfirm: string
}

export interface LoginFormInterface {
  email: string,
  password: string
}

export interface CommentInterface {
  createAt: string,
  product: string,
  id: string,
  rating: string,
  review: string,
  user: {
    name: string,
    photo: string,
  },
  Prototype: Function
}


// export interface ImageTypeInterface {
//   image: string,
//   // type: "farms" | "users" | "ondemandProduct" | "stockProducts"
// }

export interface WriteCommentInterface {
  comment: boolean,
  setComment: Function,
  value: number,
  setValue: Function,
  title: string,
  setTitle: Function,
  review: string,
  setReview: Function,
  commentFunction: Function
}

export interface CartItemsInterface {
  quantity: number, 
  price: number, 
  name: string, 
  summary: string, 
  weight: string, 
  image: string,
  id: string,
  loadFunc: Function
}

export interface BusinessProfileDetailsUpdateInterface {
  shippingCostStandard: number,
  shippingTimeStandard: string,
  shippingCostExpress: number,
  shippingTimeExpress: string,
  shippingRadius: number,
  shippingOndemandTime: string,
  shippingOndemandCost: number
}
