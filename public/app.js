var id;

$(document).on("click","#noteBtn", function(event){
    event.preventDefault();
    id = $(this).attr("data-id");
    console.log(typeof id);
    $.ajax({
        method: "GET",
        url: "/articles/" + id
    })
    .then(function(data){
        console.log(data.note);
        if(data.note){
            $("#noteTitle").val(data.note.title);
            $("#noteBody").val(data.note.note);

        }
    });    
});

$(document).on("click","#saveNote", function(event){
    event.preventDefault();
    console.log("in saveNote: ");
    $.ajax({
        method: "POST",
        url: "/notes/" + id,
        data:{
            title: $("#noteTitle").val(),
            note:  $("#noteBody").val()
        }
    })
    .then(function(data){
        console.log("data: " + data.note);
        $("#noteBtn").text("Read Note");
        $("#saveNote").attr("data-id", id);
        $("#noteTitle").val("");
        $("#noteBody").val("");
        $("#modal").hide();
        window.location.href="/articles";

       

        
    });
    

});