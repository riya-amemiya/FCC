function sleep(waitSec, callbackFunc) {

    var spanedSec = 0;

    var waitFunc = function () {

        spanedSec++;

        if (spanedSec >= waitSec) {
            if (callbackFunc) callbackFunc();
            return;
        }

        clearTimeout(id);
        id = setTimeout(waitFunc, 1000);

    };

    var id = setTimeout(waitFunc, 1000);

}
class html {
    constructor() {}
    getid(id = "") {
        if (id.indexOf('.') != -1) {
            id = id.replace('.', '')
            return document.getElementsByClassName(id)
        } else if (id.indexOf('#') != -1) {
            id = id.replace('#', '')
            return document.getElementById(id)
        } else {
            return document.getElementsByTagName(id)
        }
    }
    html(id = "", html = "") {
        let getid = this.getid(id)
        return getid.innerHTML = html
    }
    fadeIn(id = "") {
        let getid = this.getid(id)
        getid.classList.add(`fadeIn`)

    }
    fadeOut(id = "") {
        let getid = this.getid(id)
        getid.classList.add(`fadeOut`)

    }
    addClass(id = "", Class = "") {
        let getid = this.getid(id)
        getid.classList.add(Class)
    }
    removeClass(id = "", Class = "") {
        let getid = this.getid(id)
        getid.classList.remove(Class)
    }
    jscode(id = "", html = "") {
        let code = html
        code = code.replace(/from/g, 'fro%m')
        code = code.replace(/class\=/g, 'cla%ss=')
        code = code.replace(/class \=/g, 'cla%ss=')
        let code2 = "";
        let code3 = "";
        for (let i = 0; i < html.length; i++) {
            if (code.indexOf('fro%m') != -1) {
                code2 = code.slice(code.indexOf('fro%m'))
                code = code.slice(0, code.indexOf('fro%m'))
                code = code + "</span>" + code2
                code = code.replace('fro%m', 'from')
            }
        }
        code = code.replace(/jscode/g, 'j%scode')
        code = code.replace(/const/g, 'cons%t')
        for (let i = 0; i < html.length; i++) {
            if (code.indexOf('j%scode') != -1) {
                code2 = code.slice(code.indexOf('j%scode'))
                code = code.slice(0, code.indexOf('j%scode'))
                code3 = code2.slice(code2.indexOf('div'))
                code2 = code2.slice(0, code2.indexOf('div'))
                code2 = code2.replace(/=/g, '<span cla%ss="i">=</span>')
                code2 = code2.replace(/;/g, '<span cla%ss="i">;</span>')
                code2 = code2.replace(/if\(/g, '<span cla%ss="i">if</span>(')
                code2 = code2.replace(/\(/g, '<span cla%ss="d">(</span>')
                code2 = code2.replace(/\)/g, '<span cla%ss="d">)</span>')
                code2 = code2.replace(/\{/g, '<span cla%ss="d">{</span><p></p>')
                code2 = code2.replace(/\}/g, '<p></p><span cla%ss="d">}</span>')
                code = code + code2 + code3
                code = code.replace('j%scode', 'jscode')
            }
        }
        for (let i = 0; i < html.length; i++) {
            if (code.indexOf('cons%t') != -1) {
                code2 = code.slice(code.indexOf('cons%t'))
                code = code.slice(0, code.indexOf('cons%t'))
                code = code + "</span>" + code2
                code = code.replace('cons%t', 'const')
            }
        }
        html = code
        html = html.replace(/fro%m/g, 'from')
        html = html.replace(/class/g, '<span cla%ss="i">class</span>')
        html = html.replace(/j%scode/g, 'jscode')
        html = html.replace(/cla%ss\=/g, 'class=')
        html = html.replace(/return/g, '<p></p><span class="i">return</span>')
        html = html.replace(/import/g, '<span class="i">import</span><span class="l">')
        html = html.replace(/from/g, '<span class="i">from</span><span class="f">')
        html = html.replace(/var/g, '<span class="vc">var</span><span class="l">')
        html = html.replace(/let/g, '<span class="vc">let</span><span class="l">')
        console.log(html);
        html = html.replace(/const/g, '<span class="vc">const</span><span class="l">')
        return document.getElementById(id).innerHTML = html
    }
    hasclass(id = "", get = "") {
        let getid = this.getid(id)
        return getid.className === get
    }
    youtube(key = "", url = "", type = "video", part = "snippet", q = "music", videoEmbeddable = "true", videoSyndicated = "true", maxResults = 0) {
        url = `${url}type=${type}&part=${part}t&q=${q}&videoEmbeddable=${videoEmbeddable}&videoSyndicated=${videoSyndicated}&maxResults=${maxResults}&key=${key}`
    }
}
const Html = new html()
export default Html