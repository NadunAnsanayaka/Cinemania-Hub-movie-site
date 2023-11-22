import React from 'react';
import logoPng from '../movie icon.png';

const styles ={
  width: "80px",
    height: "80px",
}

const Logo = () => {
  const logo =  <img  style={styles} src ={logoPng} alt='logo'/>
  return  logo ;
   
}

export default Logo;