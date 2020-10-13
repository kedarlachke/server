'use strict';

const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.json());
var url = require('url');
// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.


const candidates=[{
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "John Coder",
    "skills": [ "javascript", "es6", "nodejs", "express" ]
  },{
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f541",
    "name": "Kedar Lachke",
    "skills": [ "javascript", "es6", "express","java","sevelet" ]
  }]


app.post('/candidates', function(req, res) {
  // ...

  //console.log(req.body)
  candidates.push(req.body)
  console.log(candidates.length)
  res.status(200)
res.status("200")
res.contentType("json")
res.type("json")
res.send("World is not enought")
});

app.get('/candidates/search', function(req, res) {
  // ...
  const a= url.parse(req.url, true)
   let skill=a.query.skills
   let selcandidates=checkForSuitableCandidate(skill)
   if(selcandidates.length==0){
    res.status(404)
    res.send("No candidates font")
   }else{
   res.status(200)
   res.send(selcandidates)}
});

function checkForSuitableCandidate(skill){
    const reqskill_arr=skill.split(',')
   
    let selectedcandidates=[]
   console.log(reqskill_arr.length)
    for(var i=0;i<candidates.length;i++){
        let condidate=candidates[i]
        for(var j=0;j<condidate.skills.length;j++){
            let canmatchkill=0
            
            for(var k=0;k<reqskill_arr.length;k++){
                console.log(reqskill_arr[k],reqskill_arr[k])
            console.log(reqskill_arr[k]== condidate.skills[j])
               if( reqskill_arr[k]== condidate.skills[j]){
                    canmatchkill++
                    console.log(canmatchkill)
               }

            }

            if(canmatchkill>0){
                selectedcandidates[canmatchkill]
            }

        }
    }

    return selectedcandidates
    
}

app.listen(process.env.HTTP_PORT || 3000);
