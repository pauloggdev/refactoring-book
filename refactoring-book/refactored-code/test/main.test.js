import statement from '../statement.js';
const invoices = require('../invoices.json');
const plays = require('../play.json');

test('deve returnar string', () => {
    const string = statement(invoices, plays)
    const str1 = `
    Statement for BigCo
        Hamlet: $650.00 (55 seats)
        As You Like It: $580.00 (35 seats)
        Othello: $500.00 (40 seats)
       Amount owed is $1,730.00
       You earned 47 credits
    
    `
    expect(str1.replace(/\s+/g, '')).toBe(string.replace(/\s+/g, '')); // Passa
});