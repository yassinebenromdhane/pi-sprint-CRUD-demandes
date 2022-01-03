import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoAddCircle } from "react-icons/io5";
import { AiTwotoneEdit, AiFillEye } from 'react-icons/ai';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import './demand.css'
import Demandservice from '../../services/Demandservice';
import Img from "../../assets/img.png";




export const ListDemand = () => {
  const [demandes, setDemandes] = useState([]);
  const [value, setValue] = useState("");

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
  const filterInput = demandes.filter((dem) => {
    return (dem.nomClub.toLowerCase().includes(value.toLowerCase()) )
  })

    return (
        <div className="container">
          {/*search*/}
      <div class="row" style={{ marginLeft: "150px" }}>
      <div class="col-sm-12">
        <div class="form-group">
          <div class="input-group">
            {" "}
            <input value={value} class="form-control" type="email" placeholder="email" onChange={(e) => setValue(e.target.value)} />{" "}
            <button type="submit" className="btn btn-info">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*search*/}
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <Link to="/add_demand" >
            <div className="card event add-event">
              <div className="icon-add"> <IoAddCircle size={60} color='rgba(209, 209, 209, 0.609)' />   </div>
            </div>
          </Link>
        </div>
        {filterInput ?
        filterInput.map((dem) => (
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
                  <Link to={`/demands/${dem._id}`} className="btn btn-primary mx-2" > <AiFillEye /> </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteDemande(dem._id)}> <FaTrash /> </button>
                </div>
              </div>
            </div>
          </div>
        ))
        : demandes.map((dem) => (
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
