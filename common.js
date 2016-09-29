(function show_settings() {
    // Config = Config.reverse();
    for (var i = Config.length - 1; i >= 0; i--) {
        o = Config[i];
        d = $("<div />", {
            class: "setting-item"
        });
        $("<label />", {
            html: o.label
        }).appendTo(d);
        $("<span />", {
            class: "description",
            html: o.description
        }).appendTo(d);
        switch (o.type) {
            case "text":
                $("<input />", {
                    type: "text",
                    name: o.setting
                }).appendTo(d);
                break;
            case "number":
                $("<input />", {
                    type: "number",
                    name: o.setting
                }).appendTo(d);
                break;
            case "select":
                s = $("<select />", {
                    name: o.setting
                });
                $("<option />", {
                    value: null,
                    html: null
                }).appendTo(s);
                $.each(o.selection, function(k, v) {
                    $("<option />", {
                        value: k,
                        html: v
                    }).appendTo(s);
                })
                s.appendTo(d);
                break;
        }
        $(".billboard").after(d);
    };
})()
// Split
var c = {}, a = "patch:";

function show() {
    t = "";
    for (var v in c) {
        if (c[v] != "" && c[v] != null) {
            t += "  " + v + ": " + c[v] + "\n";
        }
    }
    $(".console pre").text(a + "\n" + t);
};
$("input").bind("blur", function() {
    k = $(this).attr("name");
    if ($(this).attr("type") == "text") {
        v = "'" + $(this).val() + "'";
    } else {
        v = $(this).val();
    };
    c[k] = v;
    show();
});
$("select").bind("blur", function() {
    k = $(this).attr("name");
    v = $(this).val();
    c[k] = v;
    show();
});
