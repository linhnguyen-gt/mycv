function darkLightMode(){
    var body = document.getElementById('body')
    var current = body.className;
    body.className = current == 'dark-mode' ? 'light-mode' : 'dark-mode';


    var element = document.getElementsByClassName('inner');
    var click = element[0];
    click.classList.toggle('active');
}