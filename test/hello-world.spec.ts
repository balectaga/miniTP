describe('Hello World example test', () => {
  it('should correctly add two numbers', () => {
    const sum = 1 + 2;
    expect(sum).toBe(3);
  });

  it('should check that a string contains "Hello"', () => {
    const message = 'Hello, world!';
    expect(message).toContain('Hello');
  });
})