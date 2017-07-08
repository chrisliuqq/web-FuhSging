var app = null;
var clang = getParameterByName('lang') || 'tw';

app = new Vue({
    el: '#app',
    data: {
        clang: clang,
        lang: LANG
    },
    methods: {
    },
});

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
$("#nav a").each(function(i, e) {
    var href = $(e).attr("href");
    href += "?lang=" + clang;
    $(e).attr("href", href);
})
