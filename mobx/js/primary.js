var cityName = mobx.observable("sz");

console.log(cityName.get());
// prints 'sz'

cityName.observe(function(change) {
    console.log(change.oldValue, "->", change.newValue);
});

cityName.set("dg");
// prints 'sz -> dg'
