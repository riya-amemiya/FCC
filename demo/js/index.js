import FCC from './../../src/FCC'
import './../scss/index.scss'
import $ from 'jquery'
FCC.Html.jscode("root", `
<div>
<h1>FCCの使い方</h1>
<p>FCCとは</p>
<p>jQueryよりシンプルな記述で</p>
<p>複雑な処理が出来るライブラリです</p>
<p>準備</p>
<div id="a" class="jscode"><p>import FCC from './FCC'</p></div>
<p>FCCは全ての要素を継承してます</p>
<p>jQueryの$のような物です</p>
<p>基本</p>
<div><p>Htmlオブジェクト</p></div>
<div><p>dom操作が出来ます</p></div>
<a href="./Html.html"><button>Html</button></a>
</div>
<div><p>Mathオブジェクト</p></div>
<div><p>JavaScriptのMathでは出来ない処理が出来ます</p></div>
<a href="./Math.html"><button>Math</button></a>
</div>
`)