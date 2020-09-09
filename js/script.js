// Esercizio: Boolzapp
// repo: js-html-css-boolzap
// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde
// per qualsiasi cosa mi trovate su hotwell! :slightly_smiling_face: buon lavoro!!

$(document).ready(function(){
    
    $("#input").keydown(function(e){
        if(e.which == 13){
            addMessage($(this).val(), "sender");
            $(this).val("");
            // setTimeout(addMessage("ok","reciver"),1000);
            // Da chiedere a samu come mai non funziona il timeout
            addMessage("ok","reciver");
        }
    });

    $("#search").on("keyup",function(){
        var keyworld = $("#search").val().toUpperCase();
        console.log(keyworld);
        for(var i = 1; i <= $(".archived .container").length; i ++){
            var tmp = $(".archived .container:nth-child(" + i + ") h2").html();
            if(tmp.indexOf(keyworld) == -1){
                $(".archived .container:nth-child(" + i + ")").addClass("d-active");
            }else {
                $(".archived .container:nth-child(" + i + ")").removeClass("d-active");
            }
        }
    })

});


function addMessage(message, source){

    console.log(message, source);
    if(source == "sender"){
        var sndTemplate = $(".messages .sub-wrapper div.flex-right").last().clone();
        sndTemplate.find(".green-message").html(message);
        $(".messages .sub-wrapper").append(sndTemplate);
    }else if(source == "reciver"){
        var rcvTemplate = $(".messages .sub-wrapper div.flex-left").last().clone();
        rcvTemplate.find(".gray-message").html(message);
        setTimeout(function(){
            $(".messages .sub-wrapper").append(rcvTemplate);
        }, 1000);
    }

}