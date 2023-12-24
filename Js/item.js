$("#ItemSavebtn").on('click', () => {
    console.log("ffbf")
    var item_Id = $("#itemId").val();
    var item_Name = $("#itemName").val();
    var item_Price = $("#itemPrice").val();
    var item_Desc = $("#itemDescription").val();



    //Js Type Customer Object
    const  itemObject = {
       itemId : item_Id,
        itemName : item_Name,
        itemPrice : item_Price,
        itemDesc : item_Desc
    }


    //Js Object Convert Json Object Type
    const ItemObjectJson = JSON.stringify(itemObject);

    const sendAJAX = (ItemObjectJson) => {
        const http = new XMLHttpRequest();
        http.onreadystatechange = () =>{
            //Validation
            if (http.readyState == 4 && http.status == 200) {
                alert("Sucess")
            }else{
                alert("Faild")
            }
        }
        http.open("POST","http://localhost:8080/Shop_Back_End_war_exploded/item",true);
        http.setRequestHeader("Content-Type","application/json");
        http.send(ItemObjectJson)
    }

    sendAJAX(ItemObjectJson)

});
