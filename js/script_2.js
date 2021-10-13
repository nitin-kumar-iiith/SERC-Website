// <![CDATA[
WebFontConfig = {
    google: {"families":["Poppins","Poppins","Poppins","Poppins"]},
    active: function () {
        //tell listeners that fonts are loaded
        if (window.jQuery) {
            jQuery(document.body).trigger('webfontsloaded');
        }
    }
};
(function (d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://wp-themes.com/wp-content/themes/posterity/js/webfontloader.min.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    s.parentNode.insertBefore(wf, s);
})(document);
// ]]>