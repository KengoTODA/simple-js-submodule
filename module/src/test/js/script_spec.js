describe('people', function() {
  it('say hello to Sonar', function() {
    expect(people.say('Sonar')).toEqual('Hello, Sonar!');
  });
  it('say hello to world when it get no argument', function() {
    expect(people.say()).toEqual('Hello, world!');
  });
});