import {
    code
} from "../utf/UTF"

class html {
    constructor() {
        this.getid = (id) => {
            return document.getElementById(id)
        }
        this.html = (id = "", html = "") => {
            return document.getElementById(id).innerHTML = html
        }
        this.jscode = (id = "", html = "") => {
            let code = html
            code = code.replace(/from/g, 'fro%m')
            let test = ""
            for (let i = 0; i < html.length; i++) {
                if (code.indexOf('fro%m') != -1) {
                    test = code.slice(code.indexOf('fro%m'))
                    code = code.slice(0, code.indexOf('fro%m'))
                    code = code + "</span>" + test
                    code = code.replace('fro%m', 'from')
                }
            }
            html = code
            html = html.replace(/fro%m/g, 'from')
            html = html.replace(/import/g, '<span class="i">import</span><span class="l">')
            html = html.replace(/from/g, '<span class="i">from</span>')
            //html = html.replace(/from/g, '<span class="import">from</span>')
            return document.getElementById(id).innerHTML = html
        }
    }
}
const Html = new html()
export default Html;