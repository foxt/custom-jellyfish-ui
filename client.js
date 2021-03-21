

const mainContainer = document.querySelector("#mainContainer")
const injectBtn = document.querySelector("#topBarInject")
const runFab = document.querySelector("#runFab")
const saveFab = document.querySelector("#saveFab")
const scriptsContainer = document.querySelector("#scriptsSidebar")
const searchBox = document.querySelector("#searchBox")



window.onhashchange = function(h) {
    var hash = location.hash
    if (hash == "#editor") { mainContainer.style.left = "0px" }
    if (hash == "#settings") { mainContainer.style.left = "-100vw" }
    if (hash == "#scripts") { mainContainer.style.left = "-200vw"; isLoading = false; scriptsContainer.innerHTML = ""; jellyfish.startCrawl() }
    if (hash == "#scripthub") { mainContainer.style.left = "-200vw";isLoading = false; scriptsContainer.innerHTML = ""; jellyfish.startRemoteCrawl() }
    document.querySelector("a.selected").classList.remove("selected")
    document.querySelector(`a[href="${hash}"]`).classList.add("selected")
}

if (location.hash.length > 1) { window.onhashchange()}



var isLoading = true


var lastPingInterval = 0/**
ipcRenderer.on('http-request',(e,data) => {
    if (data.messageType == "ping") {
        clearTimeout(lastPingInterval)
        if (data.gameName) {
            document.title = "Jellyfish for Calamari-M | Injected into " + data.gameName
        } else {
            document.title = "Jellyfish for Calamari-M | Injected"
        }
        lastPingInterval = setTimeout(function() {
            document.title = "Jellyfish"
        },2000)
    }
})*/

var v = "0.0.0"
function gotExploit() {
    document.title = "Jellyfish " + jellyfish.version + " for " + jellyfish.exploitName + " | JellyfishUI " + v
}
document.querySelector("#alternativeElevation").checked = localStorage.getItem("usesAlternativeElevation") == "true"

function apiConnected() {
    document.querySelector(`a[href="#scripthub"]`).style.display = "inline-block"
}
function apiDisconnected() {
    document.querySelector(`a[href="#scripthub"]`).style.display = "none"
}
fetch("package.json").then((f) => {f.json().then((j) => {v = j.version;gotExploit()})})

function gotSupportedExploits() {
    for (var e of jellyfish.supportedExploits) {
        document.querySelector("#exploits").innerHTML += `
        <button id="exploit-${e}" class="simpleButton" style="position: initial;width: auto;padding-left: 16px;padding-right: 16px;" onclick='jellyfish.setExploit(${JSON.stringify(e)})'>
            ${jellyfish.exploits[e] || e}
        </button>`
    }
}