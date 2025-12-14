function run(){
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;
    let outPut = document.getElementById("output");

    outPut.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    outPut.contentWindow.eval(js);
    
}

// resizer
const container = document.querySelector('.container');
const leftPanel = document.querySelector('.left');
const rightPanel = document.querySelector('.right');
const splitter = document.querySelector('.splitter');

let isResizing = false;

// Start Resizing (mousedown)
splitter.addEventListener('mousedown', function(e) {
    isResizing = true;
    // Prevent text selection while dragging
    document.body.style.userSelect = 'none'; 
});

// Perform Resizing (mousemove)
document.addEventListener('mousemove', function(e) {
    if (!isResizing) return;

    const containerLeft = container.getBoundingClientRect().left;
    const newLeftWidth = e.clientX - containerLeft;

    const containerWidth = container.offsetWidth;
    const splitterWidth = splitter.offsetWidth;

    if (newLeftWidth > 100 && newLeftWidth < containerWidth - splitterWidth - 100) {
        leftPanel.style.width = newLeftWidth + 'px';
        rightPanel.style.width = (containerWidth - newLeftWidth - splitterWidth) + 'px';
    }
});

// Stop Resizing (mouseup)
document.addEventListener('mouseup', function(e) {
    isResizing = false;
    document.body.style.userSelect = 'auto';
});