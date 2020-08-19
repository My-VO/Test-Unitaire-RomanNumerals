const { expect } = require('chai');

const transformRoNu = require('./transformRoNu');

describe('Transform', () => {
  it.skip('3 === III', () => {
    // Given
    const number = 4;
    // When
    const numberTest = transformRoNu(number);
    // Then
    expect(numberTest).to.equal('III');
    // expect(numberTest).to.not.equal('IV');
  });

  it('4 === IV', () => {
    // Given
    const number = 4;
    // When
    const numberTest = transformRoNu(number);
    // Then
    expect(numberTest).to.equal('IV');
    expect(numberTest).to.not.equal('V');
  });

  it('5 === V', () => {
    // Given
    const number = 5;
    // When
    const numberTest = transformRoNu(number);
    // Then
    expect(numberTest).to.equal('V');
    //expect(numberTest).to.not.equal('VI');
  });
});
