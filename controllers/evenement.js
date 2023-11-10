import Evenement from "../models/evenement.js";
import categoryEvenement from "../models/categoryEvenement.js";

export function GetEvenement(req, res) {

  categoryEvenement.find({},  (err, CE)=> {
    var rest = {}
    CE.forEach(async (element,index) => {
      
      rest = CE
      rest[index]["event"] = {}
      var resFind = await Evenement.find({id_category : element.id})
      rest[index]["event"] = (resFind)
      console.log(rest)
    });

    res.status(200).json(rest);
 }); 

  
}
