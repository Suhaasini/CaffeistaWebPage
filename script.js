function validation() 
{
    var ph=document.getElementById("phone").value;
    console.log(ph.length);
    if(ph.length!=10)
     window.alert("Please enter a valid phone number!");
    else
    {
        var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var mail=document.getElementById("email").value;
        if(pattern.test(mail)!=true)
            window.alert("Please enter a valid E-mail address");
        else 
            window.alert("Welcome to Caffeista! "+document.getElementById("name").value);
    }
}
