import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AiFillEye , AiTwotoneEdit } from 'react-icons/ai';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import './demand.css'
import Demandservice from '../../services/Demandservice';
import Img from "../../assets/img.png";




export const ListDemand = () => {
  const [demandes, setDemandes] = useState([]);
  const [etat, setEtat] = useState("en cours");

  useEffect(() => {
    getDemandes();
  }, []);

  useEffect(() => {
   console.log(demandes);
  }, [demandes])

  const getDemandes = async () => {
    Demandservice.getAll()
      .then((res) => {
        setDemandes(res.data.response);
        console.log(demandes);

      })
      .catch(e => { console.log(e); });
  }

  const deleteDemande = async (id) => {
    Demandservice.remove(id)
      .then(() => { getDemandes(); })
      .catch(e => { console.log(e); });
  }

 

    return (
        <div className="container">
      <div className="row">
        
        {demandes.map((dem) => (
          <div className=" col-md-3 col-sm-6 my-3" key={dem._id} >
            <div className=" event card" style={{ width: '18rem' }}>
            <Link to={`/demands/${dem._id}`}>
                <img className="card-img-top" src={Img}/>
              </Link>
              <div className="card-body">
                <Link to={`/${dem._id}`} style={{ textDecoration: 'none', color: "black" }} >
                  <h5 className="card-title">{dem.nomClub}</h5>
                  <p className="card-text"><BsFillCalendar2DateFill />  {dem.description}</p>
                </Link>
                <div className="center-block my-2">
                  <Link to={`/edit/${dem._id}`} className="btn btn-success mx-2" > <AiTwotoneEdit /> </Link>
                  <Link to={`/demands/${dem._id}`} className="btn btn-primary mx-2" > <AiFillEye /> </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteDemande(dem._id)}> <FaTrash /> </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}
