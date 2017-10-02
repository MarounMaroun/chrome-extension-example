// current URL (as it appears in the address bar in your browser)
var currentURL = window.location.href
// if the regex is matched, run the plugin
// here we match all URLs that begin with "file://"
var shouldRun = /^file:\/\//.test(currentURL)

if (shouldRun) {
    insertCount()
}

function insertCount() {
    var $textObj = $('#simple_text')

    // the element which will hold the count value
    var $countSpan = $('<span>', {id: 'count'}).css('padding-left', '5px').text('')

    $textObj.on('input', function() {
        var size = 0
        var value = $textObj.val()
        for (var i = 0; i < value.length; i++) {
            size += unescape(encodeURIComponent(value[i])).length
        }
        $textObj.after($countSpan)
        $('#count').text(size)
    });
}
