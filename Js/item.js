$("#ItemSavebtn").on('click', () => {
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





$('#ItemUpdateBtn').on('click', () => {
    var item_Id = $("#itemId").val();
    var item_Name = $("#itemName").val();
    var item_Price = $("#itemPrice").val();
    var item_Desc = $("#itemDescription").val();


    const itemUpdateObject = {
        itemId : item_Id,
        itemName : item_Name,
        itemPrice : item_Price,
        itemDesc : item_Desc
    }

    const item_Update_Json_Obj =JSON.stringify(itemUpdateObject)

    const sendAJAX = (Item_Upd_Object_Json) => {
        const http = new XMLHttpRequest();
        http.onreadystatechange = () =>{
            //Validation
            if (http.readyState == 4 && http.status == 200) {
                alert("Sucess")
            }else{
                alert("Faild")
            }
        }
        http.open("PUT","http://localhost:8080/Shop_Back_End_war_exploded/item",true);
        http.setRequestHeader("Content-Type","application/json");
        http.send(Item_Upd_Object_Json)
    }

    sendAJAX(item_Update_Json_Obj)
})



$("#ItemDeleteBtn").on('click' , () => {
    var Delete_item_Id = $("#itemId").val();

    const  delete_Item_Obj = {
        itemId : Delete_item_Id
    }

    const  delet_Item_Obj_Json = JSON.stringify(delete_Item_Obj)


    const sendAJAX = (Item_del_Object_Json) => {
        const http = new XMLHttpRequest();
        http.onreadystatechange = () =>{
            //Validation
            if (http.readyState == 4 && http.status == 200) {
                alert("Sucess")
            }else{
                alert("Faild")
            }
        }
        http.open("DELETE","http://localhost:8080/Shop_Back_End_war_exploded/item",true);
        http.setRequestHeader("Content-Type","application/json");
        http.send(Item_del_Object_Json)
    }

    sendAJAX(delet_Item_Obj_Json)
})




//
// $("#Item_Search_Button").on('click',() =>{
//     var searchItemId = $("#itemId").val();
//
//     const searchItemObject = {
//         itemId : searchItemId
//     }
//
//     const searchItemJsonObj = JSON.stringify(searchItemObject)
//
//     const sendAJAX = (searchItemJsonObj) => {
//         const http = new XMLHttpRequest();
//         http.onreadystatechange = () => {
//             //Validation
//             if (http.readyState == 4 && http.status == 200) {
//                 alert("Sucess")
//             } else {
//                 alert("Faild")
//             }
//         }
//         http.open("GET","http://localhost:8080/Shop_Back_End_war_exploded/item",true)
//         http.setRequestHeader("Content-Type","application/json")
//         http.send(searchItemJsonObj)
//     }
//
//     sendAJAX(searchItemJsonObj)
//
// })
