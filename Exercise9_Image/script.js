var place =0;
        function changeColor() {
            // your color list
            var colorList = ["coral","lightgreen","cornflowerblue", "yellow", "rebeccapurple","azure", "chartreuse", "burlywood", "cadetblue", "crimson", "darkblue", "darkgreen", "orange", "darksalmon", "darkturquoise", "deeppink", "deepskyblue"];
            // set the color
            document.body.style.backgroundColor = colorList[place]; 
            place++;
            // if place is greater than the list size, reset
            if (place ===colorList.length) place=0; 
        }