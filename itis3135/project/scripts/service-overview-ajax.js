$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "components/service-overview.json",
        beforeSend: function(){
            $("#serviceOverview").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error){
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#serviceOverview").html("");
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("#serviceOverview").append(
                        "<h4>" + value.service + "</h4>" +
                        "<p>" + value.description + "</p>"
                    )
                })
            });
        }
    });
});