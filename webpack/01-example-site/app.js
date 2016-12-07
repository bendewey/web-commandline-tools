require("./node_modules/bootstrap/dist/css/bootstrap.css");
require("./styles.css");
var $ = require('jquery');
var Calculator = require('./calculator.js');

var calculator = new Calculator();
$(document).ready(function(){

    $('#addButton').on('click', function() {
        var var1 = $('#var1').val();
        var var2 = $('#var2').val();
        var result = calculator.add(+var1, +var2);
        $('#result').val(result);
    });

});