import { Stack } from ".";

// Stack()
// ------- //
// isEmpty()
// push()
// pop()
// peek()
// ------ //

test("isEmpty should return true when inisialised", () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
});

test("test push should make stack non empty (isEmpty is false)", () => {
  const stack = new Stack();
  stack.push(1);
  expect(stack.isEmpty()).toBe(false);
});

test("Empty stack should underflow when poped", () => {
  const stack = new Stack();
  const f = stack.pop;
  expect(f).toThrow(Error);
});

test("After one push and one pop stack should be empty", () => {
  const stack = new Stack();

  stack.push(1);
  stack.pop();

  expect(stack.isEmpty()).toBe(true);
});

test("After pushing X will pop X", () => {
  const stack = new Stack();

  stack.push(1);
  expect(stack.pop()).toBe(1);
  stack.push(88);
  expect(stack.pop()).toBe(88);
});

test("After pushing X,Y,Z will pop Z,Y,X", () => {
  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);
});
