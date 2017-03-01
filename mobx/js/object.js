var person = mobx.observable({
    // observable properties:
    nickname: "yyp"
});

mobx.extras.getAdministration(person)
	.observe(function(change) {
	    console.log(change.oldValue, "->", change.newValue);
	});

person.nickname = "pyy"
