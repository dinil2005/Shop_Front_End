$("#Cust_Save_Button").on('click', () => {
    var cust_Id = $("#customerIdInput").val();
    var cust_Name = $("#customerNameInput").val();
    var cust_Form = $("#customerFromInput").val();


    //Js Type Customer Object
    const  customerObject = {
        custId : cust_Id,
        custName : cust_Name,
        custForm : cust_Form
    }


    //Js Object Convert Json Object Type
    const customerObjectJson = JSON.stringify(customerObject);

    const sendAJAX = (customerObjectJson) => {
      const http = new XMLHttpRequest();
        http.onreadystatechange = () =>{
            //Validation
            if (http.readyState == 4 && http.status == 200) {
                alert("Sucess")
            }else{
                alert("Faild")
            }
        }
        http.open("POST","http://localhost:8080/Shop_Back_End_war_exploded/customer",true);
        http.setRequestHeader("Content-Type","application/json");
        http.send(customerObjectJson)
    }

    sendAJAX(customerObjectJson)

 });
$("#Cust_Delete_Button").on('click', () => {
    var cust_Id = $("#customerIdInput").val();



    //Js Type Customer Object
    const  customerObject = {
        custId : cust_Id
    }


    //Js Object Convert Json Object Type
    const customerObjectJson = JSON.stringify(customerObject);

    const sendAJAX = (customerObjectJson) => {
        const http = new XMLHttpRequest();
        http.onreadystatechange = () =>{
            //Validation
            if (http.readyState == 4 && http.status == 200) {
                alert("Sucess")
            }else{
                alert("Faild")
            }
        }
        http.open("DELETE","http://localhost:8080/Shop_Back_End_war_exploded/customer",true);
        http.setRequestHeader("Content-Type","application/json");
        http.send(customerObjectJson)
    }

    sendAJAX(customerObjectJson)

});
$("#Cust_Update_Button").on('click', () => {
    var cust_Id = $("#customerIdInput").val();
    var cust_Name = $("#customerNameInput").val();
    var cust_Form = $("#customerFromInput").val();


    //Js Type Customer Object
    const  customerObject = {
        custId : cust_Id,
        custName : cust_Name,
        custForm : cust_Form
    }

    //Js Object Convert Json Object Type
    const customerObjectJson = JSON.stringify(customerObject);

    const sendAJAX = (Update_customerObjectJson) => {
        const http = new XMLHttpRequest();
        http.onreadystatechange = () =>{
            //Validation
            if (http.readyState == 4 && http.status == 200) {
                alert("Sucess")
            }else{
                alert("Faild")
            }
        }
        http.open("PUT","http://localhost:8080/Shop_Back_End_war_exploded/customer",true);
        http.setRequestHeader("Content-Type","application/json");
        http.send(Update_customerObjectJson)
    }

    sendAJAX(customerObjectJson)

});
$("#Cust_Search_Button").on('click',() =>{
    var cust_Id = $("#customerIdInput").val();



    //Js Type Customer Object
    const  customerObject = {
        custId : cust_Id
    }


    //Js Object Convert Json Object Type
    const customerObjectJson = JSON.stringify(customerObject);

    const sendAJAX = (customerObjectJson) => {
        const http = new XMLHttpRequest();
        http.onreadystatechange = () =>{
            //Validation
            if (http.readyState == 4 && http.status == 200) {
                alert("Sucess")
            }else{
                alert("Faild")
            }
        }
        http.open("GET","http://localhost:8080/Shop_Back_End_war_exploded/customer",true);
        http.setRequestHeader("Content-Type","application/json");
        http.send(customerObjectJson)
    }

    sendAJAX(customerObjectJson)
});
