const enhancer = require('./enhancer.js');
// test away!

describe('Enhancer tests', () => {
    it('Succeed()', () => {
        // Test with enhancement level 20 - expect no changes
        expect(enhancer.succeed({
            name: 'Shovel',
            durability: 50,
            enhancement: 20
        })).toEqual({
            name: 'Shovel',
            durability: 50,
            enhancement: 20
        });
        
        // Test with enchancment level 15 - expect level up +1
        expect(enhancer.succeed({
            name: 'Axe',
            durability: 20,
            enhancement: 15
        })).toEqual({
            name: 'Axe',
            durability: 20,
            enhancement: 16
        });
    })

    it('Fail()', () => {
        // Test when enhancement is less than 15 - expect durability -5
        expect(enhancer.fail({
            name: 'Shovel',
            durability: 50,
            enhancement: 14
        })).toEqual({
            name: 'Shovel',
            durability: 45,
            enhancement: 14
        });

        // Test when enhancement is 15 - expect durability -10
        expect(enhancer.fail({
            name: 'Axe',
            durability: 80,
            enhancement: 15
        })).toEqual({
            name: 'Axe',
            durability: 70,
            enhancement: 15
        });

        // Test when enhancement is 17 - expect enhancement to -1
        expect(enhancer.fail({
            name: 'Sword',
            durability: 50,
            enhancement: 17
        })).toEqual({
            name: 'Sword',
            durability: 40,
            enhancement: 16
        });
    })

    it('Repair()', () => {
        // Test that durability goes to 100
        expect(enhancer.repair({
            name: 'Shovel',
            durability: 20,
            enhancement: 20
        })).toEqual({
            name: 'Shovel',
            durability: 100,
            enhancement: 20
        })
    })
})