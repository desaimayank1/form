function handleclick(event){








    event.preventDefault;
    
      alert("thankyou")}
    
    
    
    
    
       function handlechange(event,id){
       event.preventDefault;
    //    console.log(id);
    
       if(id=='name'){
         var naam=event;
         localStorage.setItem("nameof", naam);
        console.log(event);  }
        else if(id=='password'){
            console.log("password");
           var  naam=localStorage.getItem("nameof");
            if(event==naam||event.length<4){
                alert("weak password");
            }
           console.log(event);
           var someVarName = event;
    localStorage.setItem("someVarKey", someVarName);
            const pass=event;
            console.log(pass);
    
        }else if(id=='newpassword'){
            console.log("newpassword");
            var someVarName = localStorage.getItem("someVarKey");
            if(event!=someVarName){
                console.log("else");
                console.log(event);
                console.log(someVarName);
                alert("your password does not match");
            }
        }
    
    
    
    
    }