$('.show').on('click', () => {
    $('script[title="main.js"]').remove()
    axios.get('/show.html').then((response) => {
        $('.jienigui').html(response.data.trim())
    }, () => { })
})
const string1 = `我是一个前端新手
今天教大家怎么画一只可爱的杰尼龟吧
按下面按钮先看看成果
<style>button{display:block} </style>`
let n = 0
let string3 = ''
function step() {
    setTimeout(() => {
        if (string1[n] === '\n') {
            string3 += '<br>'
            n += 1
        }
        else if (string1[n] === ' ') {
            string3 += '&nbsp'
            n += 1
        }
        else if (string1[n] === '<') {
            string3 += string1.substring(n, string1.length - 1)
            n = string1.length
        }
        else {
            string3 += string1[n]
            n += 1
        }

        $('.word').html(string3)

        if (n < string1.length) {
            step()
        }
    }, 50)
}
step()