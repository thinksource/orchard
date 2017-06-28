window.addEventListener("load", function load(event){
  console.log(document.readyState);
  container = document.getElementById("container");
  addClickEvent(container);
  },false);


function addClickEvent(ele){
  if(ele && typeof ele != 'object' && ele.hasChildNodes() && ele.childNodes.length>0){
    all=ele.childNodes;
    for(var i=0, max=all.length; i < max; i++){
        addClickEvent(all[i]);
    }
  }else{
    if(typeof ele == 'object'){
      
      ele.addEventListener("click", function(e){

      console.log(e.target.nodeName+" object click");
      //e.stopPropagation();
    });
  }
  }
}
