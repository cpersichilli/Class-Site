$(document).ready(function() {
               function changeText(text)
               {
                   var display = document.getElementById('text-display');
                   display.innerHTML = "";
                   display.innerHTML = text;
               }
               
               function defaultText()
               {
                   var display = document.getElementById('text-display');
                   display.innerHTML = "";
                   display.innerHTML = "<span class='orig'><\/span>";
               } 
            });