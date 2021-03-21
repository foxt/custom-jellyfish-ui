

function showLogin(username,password) {
    try {
        document.querySelector("#loginUsername").value = username
    } catch(e) {
        console.error(e)
    }
    try {
        document.querySelector("#loginPassword").value = password
    } catch(e) {
        console.error(e)
    }
    document.querySelector("#loginBtn").disabled = undefined
    document.body.classList.add("loggingIn")
}
function login() {
    document.querySelector("#loginBtn").disabled = true
    if (document.querySelector("#loginUsername").value == "trial") {
        return alert("Trial login is no longer available.")
    }
    jellyfish.attemptLogin(document.querySelector("#loginUsername").value,document.querySelector("#loginPassword").value)
}
function loginSuccess() {document.body.classList.remove("loggingIn") }
