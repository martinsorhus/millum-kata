import { expect, test } from '@jest/globals'
import { User } from '../interfaces/user.interface'
import { second } from '../katas/second'

const u1: User[] = [
    { name: 'Per', role: 'admin', id: 2090901},
    { name: 'Ole', role: 'regular', id: 4556321},
    { name: 'Eirik', role: 'regular', id: 900913}, //
    { name: 'Johnny', role: 'regular', id: 499},
    { name: 'Sultan', role: 'regular', id: 8924},
    { name: 'Robert', role: 'admin', id: 8777672},
    { name: 'Roger', role: 'admin', id: 1234},
    { name: 'Jenny', role: 'superadmin', id: 9100042}, //
    { name: 'Trulte', role: 'admin', id: 38271}, //
    { name: 'Evelina', role: 'superadmin', id: 23113},
]

const u2: User[] = [
    { name: 'Rigmor', role: 'regular', id: 34221 },
    { name: 'Tarzan', role: 'regular', id: 9100042 }, //
    { name: 'Bernt', role: 'admin', id: 900913 }, //
    { name: 'Berit', role: 'regular', id: 4400 }, 
    { name: 'Ali', role: 'regular', id: 38271 }, //
]

test('Function returns correctly updated array', () => {
    expect(second(u1, u2)).toStrictEqual([
        { name: 'Per', role: 'admin', id: 2090901},
        { name: 'Ole', role: 'regular', id: 4556321},
        { name: 'Bernt', role: 'regular', id: 900913}, //
        { name: 'Johnny', role: 'regular', id: 499},
        { name: 'Sultan', role: 'regular', id: 8924},
        { name: 'Robert', role: 'admin', id: 8777672},
        { name: 'Roger', role: 'admin', id: 1234},
        { name: 'Tarzan', role: 'superadmin', id: 9100042}, //
        { name: 'Ali', role: 'admin', id: 38271}, //
        { name: 'Evelina', role: 'superadmin', id: 23113},
    ])
})
