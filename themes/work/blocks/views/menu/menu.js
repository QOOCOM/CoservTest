$(function () {
        $("#accordion").accordion({
                heightStyle: "fill",
                collapsible: true
        });
         
        $("input").each(function () {
                $(this).change(function () {
                        if ($(this).attr("id") == "disableCollapsible") {
                                $("#accordion").accordion("option", "collapsible", false);
                        } else {
                                $("#accordion").accordion("option", "collapsible", true);
                        }
 
                });
        });
});
