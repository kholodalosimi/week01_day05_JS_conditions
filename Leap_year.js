
 
    function checkYear( year) {
        
        if (year % 400 == 0)
            return true;
 
        
        if (year % 100 == 0)
            return false;
 
       
        if (year % 4 == 0)
            return true;
        return false;
    }
 
    let year = 9;
        document.write(checkYear(9) ? 
        "Leap Year" : "Not a Leap Year");
 
 

 
