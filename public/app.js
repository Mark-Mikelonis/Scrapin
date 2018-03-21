

// $(document).ready( function(event){
    
    // $.ajax({
    //     method: "GET",
    //     url: "/articles/" + id
    // })
    // .then(function(data){
    //     if(data.note){
    //         $("#noteBody").val(data.note.note);

    //     }
    // });    
// });

$(document).on("click","#noteBtn", function(event){
    // event.preventDefault();
   
    var id = $(this).attr("data-id");
    var note = $("#noteBody").val();
    $("#noteBody").val("");
    // $.ajax({
    //     method: "GET",
    //     url: "/articles/" + id
    // })
    // .then(function(data){
    //     if(data.note){
    //         $("#notes").val(data.note);

    //     }
    // });

   $.ajax({
        method: "POST",
        url: "/notes/" + id,
        data:{
           note: note
        }
    })
    .then(function(data){
        
        

       

        
    });
    

});