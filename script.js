function vanishAll() {
    var app = document.getElementById('app');
    var vm = document.getElementById('vanishMessage');
    if (app) {
       
        app.style.opacity="0";
    } else {
       
        document.body.innerHTML = '';
    }
    if (vm) {
        vm.style.display = 'flex';
        vm.style.opacity = '0';
        
        setTimeout(function(){ vm.style.opacity = '1'; }, 20);
    } else {
        var msg = document.createElement('div');
        msg.textContent = 'All content has vanished!';
        msg.style.fontSize = '24px';
        msg.style.textAlign = 'center';
        msg.style.marginTop = '20%';
        document.body.appendChild(msg);
    }
}