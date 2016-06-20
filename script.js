var csv_array = ["docs/clothing.csv","docs/accessories.csv","docs/household_cleaners.csv"];

$(function() {
    $(csv_array).each(function(index, value){
        var result = value.replace(/.*?\//g, "");
        Papa.parse(this.toString(), {
            header: true,
            quotes: true,
            delimiter: ",",
            download: true,
            skipEmptyLines: true,
            complete: function(results) {
                $.each(results.data, function(i, el) {
                    var row = $("<tr/>");
                    $.each(el, function(j, cell) {
                        if (cell !== "")
                            row.append($("<td/>").text(cell));
                    });
                    row.append($("<td/>").text(result));
                    $("#results tbody").append(row);
                });
            }
        });
    })
});