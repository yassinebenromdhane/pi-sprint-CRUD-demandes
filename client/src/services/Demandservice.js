import http from "../http-common";

const getAll = () => { return http.get("/demande");};

const get = id => { return http.get(`/demande/${id}`);};

const create = data => { return http.post("/demande", data);};



const remove = id => { return http.delete(`/demande/${id}`);};

export default { getAll, get, create, remove };