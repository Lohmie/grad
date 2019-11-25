var pokemon = function() {
    setTimeout(function() {
        $(".egg").hide() 
        $(".pokeimg").show()
    }, 2250);
}

$(function() {
    pokemon();
});