function userdetails() {
    var username = document.getElementById("input1").value;
    var password = document.getElementById("input2").value;


    if (username.length >= 1 && password.length >= 1) {
        window.location.assign("../React-task/form0_index.html");
    }

    else {
        alert("Please enter username and password");
    }

}

function submit() {
    alert("Your response have been successfully submitted.");
}