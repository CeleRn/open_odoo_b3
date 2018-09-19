hexo.extend.helper.register('addClass', function (classElemment) {
   var textClass = '';
   if (classElemment != undefined && classElemment != '') {
      textClass = ' class="' + classElemment + '"';
   };
   return textClass;
});