import React , {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Demandservice from '../../services/Demandservice';



const Edit = () => {


const { id } = useParams();
const [etat, setEtat] = useState("valider");




  const updateDem = async (e) => {
    e.preventDefault();
    
    console.log(etat);
    const demande = { etat }
    Demandservice.update(id,demande)
      .then(() => { console.log('success')})
      .catch(e => { console.log(e); });
  };

  
  /*  const updateDem = async (id) => {
        setEtat("valider");
        Demandservice.update(id,etat)
          .then(() => { console.log("updated");})
          .catch(e => { console.log(e); });
      };*/



    return (
        <div className='row'>
            <Link to="/demands" className='btn btn-dark' onClick={updateDem}>
                retourner
            </Link>
        </div>
    )
}

export default Edit
