exports.viewProject = function(req, res){
    var name = req.params.name;
    //console.log("The name: " + name); 
    //displays in git a string and the variable containing the parameter pass
     res.render('project',{
     	'projectName': name,
     });
  }