(function() {
    var renderMermaid = function(code, index, list) {
        var text = code.textContent;
        var pre = code.parentElement;
        pre.style.display = 'none';
        var parent = pre.parentElement;
        var div = document.createElement('div');
        div.setAttribute('class', 'mermaid');
        div.textContent = text;
        parent.insertBefore(div, pre);
    };
    document.querySelectorAll("pre code.language-mermaid").forEach(renderMermaid);
    if (window.navigator.userAgent.match(/Firefox/)) {
        Reveal.addEventListener('slidechanged', function(event) {
            var slide = event.currentSlide;
            slide.querySelectorAll('div.mermaid').forEach(
                function(div, index, list) {
                    div.parentElement.removeChild(div);
                }
            );
            slide.querySelectorAll("pre code.language-mermaid").forEach(renderMermaid);
            mermaid.init({}, 'div.mermaid');
            slide.style.top = (slide.parentElement.clientHeight - slide.clientHeight)/2 + "px";
        });
    }
    mermaid.initialize({startOnLoad: true});
}());
