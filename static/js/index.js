$(function(){
    var test1 = $('#test1')
    test1.on('click', function(){
        var top = Math.round(Math.random()*100)+'%'
        var right = Math.round(Math.random()*100)+'%'
        test1.animate({'top': top, 'right': right}, 300)
    })
})