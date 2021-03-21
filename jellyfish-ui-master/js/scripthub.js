function selectScript(filename,strings) {
    return function() {
        var detailsHeader = document.querySelector("#scriptsDetails > h1")
        var detailsSubheader = document.querySelector("#scriptsDetails > h3")
        detailsHeader.innerText = ""
        detailsSubheader.innerText = ""
        previewEditor.setValue("")
        try {
            if (isLoading) return;
            isLoading = true
            
            jellyfish.getScript(filename,(err,data) => {
                if (err) return console.error(err);
                while (document.querySelector(".script.scriptSelected")) {document.querySelector(".script.scriptSelected").classList.remove("scriptSelected")}
                this.classList.add("scriptSelected")
                previewEditor.setValue(data.toString())
                detailsHeader.innerText = strings[0]
                detailsSubheader.innerText = strings[1]
                isLoading = false
            })
            
            
        } catch(e) {
            isLoading = false
            console.error(e)
            this.remove()
            if (document.querySelector(".script")) {
                document.querySelector(".script").click()
            }
        }
    }
}

function createScript(p,filename) {
    var div = document.createElement("div")
    div.classList = "script"
    div.dataset.filename = filename
    div.dataset.relative = p.dir + "/" + p.base
    div.onclick = selectScript(filename,[p.base,p.dir])
    var title = document.createElement("h1")
    title.innerText = p.base
    div.appendChild(title)
    var subtitle = document.createElement("h3")
    subtitle.innerText = p.dir
    div.appendChild(subtitle)
    scriptsContainer.appendChild(div)
}


searchBox.onchange = () => {
    var val = searchBox.value.toLocaleLowerCase()
    for (var s of document.querySelectorAll(".script"))  {
        var t = String(s.dataset.relative)
        s.style.display = t.toLocaleLowerCase().includes(val) ? "block" : "none"
    }
}