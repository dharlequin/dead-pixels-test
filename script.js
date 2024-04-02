window.onload = function() {
    var element = document.getElementById('filled');
    var colorClasses = ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta', 'black', 'white'];
    var counter = 0;

    element.onclick = function() {
        console.log('clicked ' + colorClasses[counter]);
        this.className = colorClasses[counter];
        counter++;
        if (counter > colorClasses.length - 1) {
            counter = 0;
        }
    }
}