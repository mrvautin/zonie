const assert = require('chai').assert;
const zonie = require('../index');

describe('zonie', () => {
    it('Valid timezone abbreviation', () => {
        assert.isTrue(zonie.now('AEST') instanceof Date);
    });

    it('Valid timezone Country/City format', () => {
        assert.isTrue(zonie.now('Australia/Melbourne') instanceof Date);
    });

    it('Invalid timezone abbreviation', () => {
        assert.throws(function(){zonie.now('BEEP')}, Error, 'Timezone not found');
    });

    it('Timezone not supplied', () => {
        assert.throws(zonie.now, Error, 'Timezone not supplied');
    });

    it('Get list of Timezones', () => {
        assert.isArray(zonie.zones());
    });

    it('Get single timezone by zone', () => {
        assert.equal(zonie.zone('Australia/Melbourne'), 'Australia/Melbourne');
    });

    it('Get single timezone by abbreviation', () => {
        assert.equal(zonie.zone('AEST'), 'Australia/Melbourne');
    });

    it('Get single timezone - invalid option (BOOP)', () => {
        assert.throws(function(){zonie.zone('AEST', 'BOOP')}, Error, 'Invalid option - Possible values: name, abbr, zone');
    });

    it('Get single timezone - return zone (using defaults)', () => {
        assert.equal(zonie.zone('AEST'), 'Australia/Melbourne');
    });

    it('Get single timezone - return zone specifically', () => {
        assert.equal(zonie.zone('AEST', 'zone'), 'Australia/Melbourne');
    });

    it('Get single timezone - return abbreviation', () => {
        assert.equal(zonie.zone('AEST', 'abbr'), 'AEST');
    });

    it('Get single timezone - return name', () => {
        assert.equal(zonie.zone('AEST', 'name'), 'AUS Eastern Standard Time');
    });
});