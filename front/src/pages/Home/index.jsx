
import React from 'react'
import Crudd from './crudd'
import Main from './Main'
import Bitcoin from './Bitcoin'
import Latests from './Latests'
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <>
    <Main/>
    <Bitcoin/>
    
    <Crudd/>
<Latests/>
    </>
</div>
    
  )
}

export default Home