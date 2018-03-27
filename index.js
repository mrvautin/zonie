const zoneList = require('./lib/zones.json');
const _ = require('lodash');

/**
 * Does a timezone lookup
 *
 * @param {String} timezone Either the abbreviation or full timezone (eg: EDT or America/New_York)
 * @param {String} option Optional parameter to return either 'name', 'abbr' or 'zone'. Defaults to 'zone'.
 * @return {String} A timezone to be passed to the 'now' function
 */
const zone = (timezone, option) => {
    const key = option || 'zone';
    if(!['name', 'abbr', 'zone'].includes(key)){
        throw new Error('Invalid option - Possible values: name, abbr, zone');
    }

    // Check for timezone by Country/City lookup
    const timezoneName = _.find(zoneList, (z) => {
        if(z.zone.includes(timezone)){
            return z;
        }
    });
    if(timezoneName){
        if(key === 'zone'){
            return timezoneName.zone[0];
        }else{
            return timezoneName[key];
        }
    }

    // Check for timezone by abbreviation
    const timezoneAbbr = _.find(zoneList, ['abbr', timezone]);
    if(timezoneAbbr){
        if(key === 'zone'){
            return timezoneAbbr.zone[0];
        }else{
            return timezoneAbbr[key];
        }
    }

    if(!timezoneName && !timezoneAbbr){
        throw new Error('Timezone not found');
    }
};

/**
 * Gets the currenct date/time in the timezone provided
 *
 * @param {String} timezone Either the abbreviation or full timezone (eg: EDT or America/New_York)
 * @return {Date} A current date object in the timezone supplied
 */
const now = (timezone) => {
    // If no zone
    if(!timezone){
        throw new Error('Timezone not supplied');
    }

    const options = {
        timeZone: zone(timezone),
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
    };

    const formatter = new Intl.DateTimeFormat([], options)
    return new Date(formatter.format(new Date()));
}

/**
 * Returns a full array of timezone
 *
 * @return {Array} An array of objects with timezone data
 */
const zones = () => {
    return zoneList;
};

module.exports = {
    now,
    zone,
    zones
}
