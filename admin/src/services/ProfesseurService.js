import http from "../http-common";

const getAll = () => { return http.get("/professeur");};
const postProf = (data) => { return http.post("/professeur",data) }
const ProfesseurService ={getAll,postProf} 
export default ProfesseurService;