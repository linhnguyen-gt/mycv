function darkLightMode(){
    var body = document.getElementById('body')
    var current = body.className;
    body.className = current == 'dark-mode' ? 'light-mode' : 'dark-mode';

    var element = document.getElementsByClassName('inner');
    var click = element[0];
    click.classList.toggle('active');
}
var get = document.querySelector('i');
function backHead(){
    var height = self.pageYOffset;
    var set = height;
    var run = setTimeout(function(){
        height = height - 0.05*set;
        window.scrollTo(0,height);
        if(height <= 0 ){
            clearInterval(run);
        }
    });
}
function load(){
    var get = document.getElementById('backHead')
    if(window.scrollY > 300){
        get.classList.add('actived');
    }else{
        get.classList.remove('actived');
    }
}
window.onscroll = function(){load()};

