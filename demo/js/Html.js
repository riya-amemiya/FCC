import FCC from './../../src/FCC'
import './../scss/index.scss'
import $ from 'jquery'
FCC.Html.jscode(
    "root",
    '<input type="text" id="html"/><div id="code"></div>'
)
$('#html').keyup(function ()
{
    FCC.Html.jscode(
        "code",
        `<div class="jscode">${$('#html').val()}</div>`
    )
})