import FCC from './../../src/FCC'
import './../scss/index.scss'
import $ from 'jquery'
FCC.Html.jscode("root", `
<header><div class="head"><p>FCCの使い方</p></div></header>
<div class="top">
<p class="tag po">jQueryよりシンプルな記述で</p>
<p class="tag lo">複雑な処理が出来るライブラリです</p>
<div class="set"><p>準備</p></div>
<div id="a" class="jscode"><p>import FCC from './FCC'</p></div>
<p>FCCは全ての要素を継承してます</p>
<p>jQueryの$のような物です</p>
<p class="tag mi">基本</p>
<div class="he"><p>Htmlオブジェクト</p></div>
<div><p>dom操作が出来ます</p></div>
<a href="./Html.html"><p class="btn">Html</p></a>
<div class="he"><p>Mathオブジェクト</p></div>
<div><p>JavaScriptのMathでは出来ない処理が出来ます</p></div>
<a href="./Math.html"><p class="btn">Math</p></a>
</div>
</div>
`)