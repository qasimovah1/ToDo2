"use strict";
$(document).ready(function () {

     $("#me").click(function (e) { 
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($('#inputme').val()) == '') {
                let vall = $('#inputme').val()
                    , newH3 = $('<h3> </h3>')
                    , newdiv = $('<div class="minibox" > </div')
                    , bigdiv = $(`<div ${myclass} > </div`)
                $(newH3).append(vall)
                $(newdiv).append(newH3)
                $(bigdiv).append(newdiv)
                return bigdiv
            }
            else{
                return
            }
        }
        $("#messageyou").append(myel())
        $("#messageme").append(myel('class="end"'))
        $("#inpute").val("")
     });
});