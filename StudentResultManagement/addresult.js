function formvalidate() {
  
   
        var name = document.forms["myform"]["first"].value;
        var rollno = document.forms["myform"]["rollno"].value;
        var dept = document.forms["myform"]["dept"].value;
        var year = document.forms["myform"]["year"].value;
        var semster = document.forms["myform"]["semster"].value;
    
        var errorMessage = "";
    
        if (name == "") {
            errorMessage += "Name must be filled out\n";
        }
    
        if (rollno == "") {
            errorMessage += "Register Number must be filled out\n";
        }
    
        if (dept == "none") {
            errorMessage += "Please select a Department\n";
        }
    
        if (year == "none") {
            errorMessage += "Please select a Year\n";
        }
    
        if (semster == "none") {
            errorMessage += "Please select a Semester\n";
        }
    
        if (errorMessage !== "") {
            alert(errorMessage);
            return false;
        }
    
        return true;
    }
    
    // Function to display the modal when the "Course Title" button is clicked
    function displayCourseListModal() {
        document.getElementById('id01').style.display='block';
    }
   
    