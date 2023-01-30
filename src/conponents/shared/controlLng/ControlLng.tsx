import  {    useContext, useEffect, useState } from 'react' 
import { LinguaContext1 } from '../../../App';

const ControlLng = (text?:string) => {
     
    const  {lingua}  = useContext(LinguaContext1);
  const [isTrue, setisTrue] = useState(false)
  useEffect(() => {    
    if (lingua === 'it') setisTrue(true);
    else setisTrue(false);
  }, [lingua]) 
      
      
  return  isTrue
}

export default ControlLng