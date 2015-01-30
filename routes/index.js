
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.userName; //pulls paramaters set in app.js routing 
  if (nameToShow == "OVERUSTLE"){
    nameToShow = "OVERUSTLE BASEDGOD NOTEARS";
  }
  res.render('index',{
    'notears': nameToShow,
    
  	 'projects': [
      { 'name': 'Gift-giving',
        'image': 'blm.png',
        'id': 'project1'
      },
      { 'name': 'Needfinding',
        'image': 'bard.png',
        'id': 'project2'
      },
      { 'name': 'Prototyping',
        'image': 'drg.png',
        'id': 'project3'
      },
      { 'name': 'Heuristic Evaluation',
        'image': 'pld.png',
        'id': 'project4'
      },
      { 'name': 'Visualization',
        'image': 'sch.png',
        'id': 'project5'
      },
      { 'name': 'Social design',
        'image': 'whm.png',
        'id': 'project6'
      },
      { 'name': 'Gestural interaction',
        'image': 'war.png',
        'id': 'project7'
      },
      { 'name': 'Design tools',
        'image': 'smn.png',
        'id': 'project8'
      }
    ]
  });
}
 

