import React, { useState, useEffect } from "react";
import Demandservice from "../../services/Demandservice";
import { useHistory, useParams, Link } from "react-router-dom";

const Show = () => {
  const history = useHistory();

  const { id } = useParams();
  const [demande, setDemande] = useState({});

  useEffect(() => {
    getDemandeById();
  }, []);

  const getDemandeById = async () => {
    Demandservice.get(id).then((res) => {
      setDemande(res.data.response);
      console.log(demande)
    });
  };

  return (
    <div>
      <div className="container py-4">
        <Link className="btn btn-primary" to="/demands">
          back to Home
        </Link>
        <h1 className="display-4">demande id: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">nom du club: {demande.nomClub}</li>
          <li className="list-group-item">
            description: {demande.description}
          </li>
          <li className="list-group-item">etat: {demande.etat}</li>
        </ul>
      </div>
    </div>
  );
};

export default Show;
