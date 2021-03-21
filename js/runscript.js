function inject() {
    injectBtn.disabled = true
    injectBtn.innerText = "Loading"
    jellyfish.inject(localStorage.getItem("usesAlternativeElevation") == "true")
}
function injectionStatusChange(text) {
    injectBtn.innerText = text
    injectBtn.disabled = true
}

function enableInjectBtn() {
    injectBtn.innerText = "Inject"
    injectBtn.disabled = undefined
}
function onScriptRun() {
    console.log("hahaha icon goes spinspinspin")
    runFab.classList.remove("spin")
    void runFab.offsetWidth; // forces it to be re-rendered? idk js is weird sometimes
    runFab.classList.add("spin")
}
runFab.onclick = function() {
    jellyfish.runScript(mainEditor.getValue())
}

saveFab.onclick = function() {
    jellyfish.saveScript(mainEditor.getValue())
}

function editScript(script) {
    mainEditor.setValue(script)
    location.hash = "#editor"
}

