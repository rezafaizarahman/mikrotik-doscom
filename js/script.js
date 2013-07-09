function checkIfReady(fn) {
    /in/.test(document.readyState)?setTimeout(function(){checkIfReady(fn)}, 9):fn()
}

checkIfReady( function (){

function $(el) {
    return document.querySelector(el);
}

function tag(el) {
    return document.getElementsByTagName(el);
}

var pages = [$('.page1'), $('.page2'), $('.page3'), $('.page4')],
    pageContainer = $('.pages-container'),
    pageWidth = (100/pages.length) + '%',
    anchors = tag('a'), n = 0, isSmooth = false,
    titles = ["Hotspot DOSCOM - login", "Hotspot DOSCOM - register", "Hotspot DOSCOM - about", "Hotspot DOSCOM - event"];

(function() {
    pageContainer.style.width = pages.length + '00%';
    for (var i = 0, page; page = pages[i]; i++) {
        page.style.width = pageWidth;
        page.style.float = "left";
    }
}());

function controlAnchorMovement(x) {
    pageContainer.style.marginLeft = "-" + x + "00%";
    document.title = titles[x];
    n = x;
}

function setNavigation(e) {
     var anchor = this,
        href = anchor.href;

        if (href.indexOf('#') !== -1) {
            href = href.split("#")[1];

            if(href === "login" || href === "register" || href === "about" || href === "event") { e.preventDefault(); checkIfSmooth(); }

            if (href === "login") { controlAnchorMovement(0); }
            if (href === "register") { controlAnchorMovement(1); }
            if (href === "about") { controlAnchorMovement(2); }
            if (href === "event") { controlAnchorMovement(3); }

        }
}

function checkIfSmooth() {
if (!isSmooth) {
        pageContainer.className += " smooth";
        isSmooth = true;
}
}

function checkAndMove(n) {
pageContainer.style.marginLeft = '-'+n+'00%';
        checkIfSmooth();
        document.title = titles[n];
}


for (var i = 0, anchor; anchor = anchors[i]; i++) {
anchor.addEventListener("click", setNavigation, false);
}

window.addEventListener("keydown", function(evt) {
    evt = evt.keyCode || window.event.keyCode;

    if (evt == 37) {
       (n === 0) ? n = 2 : n--;
       checkAndMove(n);
    }

    if (evt == 39) {
       (n === 2) ? n = 0 : n++;
        checkAndMove(n);
    }
}, false)

});
