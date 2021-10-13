// <![CDATA[
    (function(){
        var docElement = document.documentElement,
            className = docElement.className;
        // Change `no-js` to `js`
        var reJS = new RegExp('(^|\\s)no-js( |\\s|$)');
        //space as literal in second capturing group cause there is strange situation when \s is not catched on load when other plugins add their own classes
        className = className.replace(reJS, '$1js$2');
        docElement.className = className;
    })();
    // ]]>