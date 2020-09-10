// Esercizio: Boolzapp
// repo: js-html-css-boolzap
// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde
// per qualsiasi cosa mi trovate su hotwell! :slightly_smiling_face: buon lavoro!!

$(document).ready(function(){

    for(var i = 1; i <= $(".archived .container").length; i ++){
        $(".messages .sub-wrapper:nth-child(" + i + ")").attr("index",i);
        $(".archived .container:nth-child(" + i + ")").attr("index",i);
    }

    $("#input").keydown(function(e){
        if(e.which == 13){
            addMessage($(this).val(), "sender");
            $(this).val("");
            // setTimeout(addMessage("ok","reciver"),1000);
            // Da chiedere a samu come mai non funziona il timeout
            addMessage("ok","reciver");
            $(".sub-wrapper").focus();
        }
    });

    $("#search").on("keyup",function(){
        var keyworld = $("#search").val().toUpperCase();
        for(var i = 1; i <= $(".archived .container").length; i ++){
            var tmp = $(".archived .container:nth-child(" + i + ") h2").html().toUpperCase();
            if(tmp.indexOf(keyworld) == -1){
                $(".archived .container:nth-child(" + i + ")").addClass("d-active");
            }else {
                $(".archived .container:nth-child(" + i + ")").removeClass("d-active");
            }
        }
    })

    $(".container").click(function(){
        var name = $(this).find("h2").html();
        var index = $(this).attr("index")
        var img = $(this).find("img").attr("src");
        $(".sub-wrapper:not(.d-active)").addClass("d-active");
        console.log(name + " " + index);

        $(".sub-wrapper[index='" + index + "']").removeClass("d-active");
        $(".status .info h2").html(name);
        $(".status .info img").attr("src",img);
    });

});


function addMessage(message, source){

    console.log(message, source);
    if(source == "sender"){
        var sndTemplate = $(".sub-wrapper:not(.d-active) div.flex-right").last().clone();
        sndTemplate.find(".green-message").html(message);
        $(".sub-wrapper:not(.d-active)").append(sndTemplate);
    }else if(source == "reciver"){
        var rcvTemplate = $(".sub-wrapper:not(.d-active) div.flex-left").last().clone();
        rcvTemplate.find(".gray-message").html(message);
        setTimeout(function(){
            $(".messages .sub-wrapper:not(.d-active)").append(rcvTemplate);
        }, 1000);
    }

}