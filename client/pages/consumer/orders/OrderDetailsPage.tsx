import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSingleBuy } from '../../../components/marketplace/API'
import { fetchToken } from '../../../components/marketplace/token'
import Navbar from '../../../components/marketplace/navBar/Navbar'
import ImageCard from '../../../components/marketplace/Img/ImageCard'
import LocationCard from '../../../components/marketplace/location/LocationCard'


function OrderDetailsPage() {
  const router = useRouter()
  const data = router.query

  const [orderDetails, setOrderDetails] = useState<any>({})

  const fetch = async () => {
    try {
      const token = fetchToken()
      const res = await getSingleBuy(token, data.id as string)
      const details = res.data.data.data
      setOrderDetails(details)
      console.log(details)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const styles = {
    page: `w-screen flex flex-col justify-center items-center`,
    container: `w-screen max-w-md flex flex-col justify-center items-center`,
    navBox: `w-full px-4 z-50`,
    headerBox: `w-11/12 h-9 mt-20 flex justify-between items-center`,
    headerBar: `w-9/12 h-full border-1 border-light-gray rounded-3xl flex justify-start items-center`,
    imgBox: `ml-3 w-8 h-8 rounded-full`,
    darkBarBox: `w-full flex justify-center items-center mt-3`,
    darkBar: `w-40 h-9 bg-dark-gray rounded-3xl flex justify-center items-center`,
    detailsContainer: `w-11/12 border-1 rounded-2xl border-light-gray flex flex-col justify-start items-center mt-5`,
    smallTxt: `text-2sm font-semibold`,
    smallTxt1: `text-2sm font-semibold ml-3`,
    container1: `w-11/12 border-1 rounded-2xl border-light-gray flex flex-col justify-start items-center mt-5 h-36 mb-5`
  }

  return (
    <Box className={styles.page}>
      <Box className={styles.container}>
        <Box className={styles.navBox}>
          <Navbar 
            arrow={true} 
            orderDetails={true}
            ids={data.id}
            noCart={true}
          />
        </Box>

        <Box className={styles.headerBox}>
          <span className='text-2sm'>Ordered by</span>
          <Box className={styles.headerBar}>
            <Box className={styles.imgBox}>
              <ImageCard 
                image={orderDetails?.consumerProfile?.user?.photo}
                rounded={true}
              />
            </Box>
            <span className='text-2sm ml-3'>{orderDetails?.consumerProfile?.user?.name}</span>
          </Box>
        </Box>

        <Box className="w-full flex justify-center items-center mt-5">
          <span className='text-2sm font-bold'>Status</span>
        </Box>

        <Box className={styles.darkBarBox}>
          <Box className={styles.darkBar}>
            <span className='text-3sm text-white'>{orderDetails?.delivered ? "2. Delivered" : "1. New"}</span>
          </Box>
        </Box>

        <Box className={styles.detailsContainer}>
          <Box className="w-10/12 mt-2">
            <span className='text-2sm font-bold'>{orderDetails?.cart?.items.length} Products</span>
          </Box>
          <Box className="w-10/12 h-10 flex flex-col justify-center items-center mt-3">
            {
              orderDetails?.cart?.items.map((item: any) => {
                return (
                  <Box key={item._id} className='w-full flex justify-between items-center'>
                    <Box className="">
                      <span className={styles.smallTxt}>{item?.orderQuantity} {item?.orderUnit}</span>
                      <span className={styles.smallTxt1}>{item?.ondemandProduct?.name || item?.stockProduct?.name}</span>
                    </Box>
                    <span className={styles.smallTxt}>$ {Number(item?.orderTotal).toFixed(3)}</span>
                  </Box>
                )
              })
            }
          </Box>

          <Box className="w-11/12 border-1 mt-5 mb-5 border-light-gray"></Box>
    
          <Box className="w-10/12 flex justify-between items-center">
            <span className={styles.smallTxt}>Subtotal</span>
            <span className={styles.smallTxt}>$ {Number(orderDetails?.cart?.subTotal).toFixed(3)}</span>
          </Box>
  
          <Box className="w-10/12 flex justify-between items-center">
            <span className={styles.smallTxt}>Shipping</span>
            <span className={styles.smallTxt}>$ {Number(orderDetails?.totalAmount) - Number(orderDetails?.cart?.subTotal)}</span>
          </Box>
  
          <Box className="w-11/12 border-1 mt-5 mb-5 border-light-gray"></Box>
  
          <Box className="w-10/12 flex justify-between items-center mb-5">
            <span className={styles.smallTxt}>Total</span>
            <span className='text-2sm font-bold'>$ {Number(orderDetails?.totalAmount).toFixed(3)}</span>
          </Box>

        </Box>

        <Box className={styles.container1}>
          <LocationCard 
            lat={orderDetails?.consumerProfile?.location?.coordinates[1]}
            lng={orderDetails?.consumerProfile?.location?.coordinates[0]}
          />
        </Box>

      </Box>
    </Box>
  )
}

export default OrderDetailsPage