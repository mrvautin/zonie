# zonie

zonie is a timezone library allowing you to get the current date/time in any timezone of the world.

### Usage

``` javascript
const zonie = require('zonie');

console.log(zonie.now('AEST'));

# 2018-03-28T03:16:39.000Z
```

### API

####  now
Get the current date/time in a given timezone

``` javascript
console.log(zonie.now('AEST'));

# 2018-03-28T03:16:39.000Z
```

####  zone
Do a lookup of a timezone

``` javascript
console.log(zonie.zone('AEST'));

# Australia/Melbourne
```

Optional parameter to return a nice timezone name or abbreviation. Possible values are: `zone` (default), `abbr` and `name`:

``` javascript
console.log(zonie.zone('Australia/Melbourne', 'abbr'));

# AEST
```

``` javascript
console.log(zonie.zone('Australia/Melbourne', 'name'));

# AUS Eastern Standard Time
```

####  zones

Returns an array of objects with data on all the timezones of the world.

``` javascript
zonie.zones();
```

Returns:
``` json
[
    {
        "name": "Dateline Standard Time",
        "abbr": "DST",
        "zone": [
            "Etc/GMT+12"
        ]
    },
    {
        "name": "UTC-11",
        "abbr": "U",
        "zone": [
            "Pacific/Midway",
            "Pacific/Niue",
            "Pacific/Pago_Pago"
        ]
    },
    {
        "name": "Hawaiian Standard Time",
        "abbr": "HST",
        "zone": [
            "Pacific/Honolulu",
            "Pacific/Johnston",
            "Pacific/Rarotonga",
            "Pacific/Tahiti"
        ]
    },
    ......
]
```
