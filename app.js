"use strict";
$(document).ready(function () {

     $("#me").click(function (e) { 
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($('#inputme').val()) == '') {
                let vall = $('#inputme').val()
                
            }
            else{
                return
            }
        }
        $("#messageme").append(myel('class="end"'))
        $("#inpute").val("")
     });
});