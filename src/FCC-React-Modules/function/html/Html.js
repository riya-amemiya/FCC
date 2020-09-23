class html {
    constructor() {
        this.getid = (id) => {
            return document.getElementById(id)
        }
        this.html = (id = "", html = "") => {
            return document.getElementById(id).innerHTML = html
        }
    }
}
const Html = new html()
export default Html;