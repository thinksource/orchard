window.addEventListener("load",function(e){
  console.log(document.readyState);
  all = document.getElementsByTagName("*");
  for(var i=0, max=all.length; i < max; i++){
    console.log(all[i]);

    all[i].addEventListener("click", function(e){
      var event = new MouseEvent('click');
      // e.stopPropagation();
      console.log(e.target.nodeName+" object click");
      e.stopPropagation();
    });
  }
},false);
