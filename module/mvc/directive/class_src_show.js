/**
 * Created by 柏子 on 2015/3/15.
 */
bracket.define(['mvc.register'],function(require){
  require('mvc.register').addCompiler({
    name:'br-class',
    link:function(ctrl,element,attr){
      ctrl.$bind(attr['brClass'].value,function(newClass,oldClass){
        if(oldClass)
          element.classList.remove(oldClass);
        if(newClass)
          element.classList.add(newClass);
      })
    }
  });
  require('mvc.register').addCompiler({
    name:'br-src',
    link:function(ctrl,element,attr){
      ctrl.$bind(attr['brSrc'].value,function(newClass){
        if(newClass) element.setAttribute('src',newClass)
      })
    }
  });
  var showExp=/display\:none/g;
  require('mvc.register').addCompiler({
    name:'br-show',
    link:function(ctrl,element,attr){
      ctrl.$bind(attr['brShow'].value,function(show){
        var style=element.getAttribute('style')||'';
        if(show)
          style=style.replace(showExp,'');
        else if(!showExp.test(style))
          style+=';display:none';
        else return;
        element.setAttribute('style',style)
      })
    }
  })
});