(function(){
  
  $.expr[':'].youtube = function(obj, index, meta, stack){
      var toreturn = false;
      $(obj).children('param').each(function(i){
        if( ($(this).attr('name') == "movie") && ($(this).attr('value').indexOf('youtube.com') > -1) ){
          toreturn = true;
        }
      });
      
      return toreturn;
      
      // obj - is a current DOM element
      // index - the current loop index in stack
      // meta - meta data about your selector
      // stack - stack of all elements to loop

      // Return true to include current element
      // Return false to explude current element
  };
  
  
})();