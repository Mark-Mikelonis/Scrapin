

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
    console.log("in saveNote: ");
    var id = $(this).attr("data-id");
    var note = $("#noteBody").val();
    alert("note: " + note);
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
           note: $("#noteBody").val()
        }
    })
    .then(function(data){
        console.log("data: " + data.note);
        // $("#noteBtn").text("Read Note");
        // window.location.href="/articles";

       

        
    });
    

});