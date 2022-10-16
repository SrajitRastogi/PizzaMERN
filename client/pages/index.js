import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import axios from 'axios'
export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
     
      <Head>
        <title>Pizza Restaurant in Delhi</title>
        <meta name='description' content="best shop in town" />
        <link rel="stylesheet" href="/favicon.ico" />
        </Head>
       <Featured/>
       <PizzaList pizzaList={pizzaList}/>
    </div>
  );
}

export const getServerSideProps=async ()=>{
  const res=await axios.get("http://localhost:3000/api/products");
  return{
      props:{
        pizzaList:res.data
      },
  }
}
