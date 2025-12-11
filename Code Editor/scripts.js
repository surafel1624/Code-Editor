function run(){
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;
    let outPut = document.getElementById("output");

    outPut.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    outPut.contentWindow.eval(js);
    
}