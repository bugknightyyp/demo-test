var cityName = mobx.observable("Vienna");

console.log(cityName.get());
// prints 'Vienna'

cityName.observe(function(change) {
    console.log(change.oldValue, "->", change.newValue);
});

cityName.set("Amsterdam");
// prints 'Vienna -> Amsterdam'
