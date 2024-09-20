const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  // Pruebas para findByEmail()

  test('find user by email', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findByEmail("santiago@generation.org")).toEqual(user);
  });

test(' return undefined if user email not found', () => {
    const foundUser = userController.findByEmail('notfound@example.com');
    expect(foundUser).toBeUndefined();
});

test('should find a user by ID', () => {
  const user = { id: 333, email: 'santiago@generation.org' };
  userController.add(user);
  const foundUser = userController.findById(333);
  expect(foundUser).toEqual(user);
});
// Pruebas para findById()

test(' return undefined if user ID not found', () => {
    const foundUser = userController.findById(99);
    expect(foundUser).toBeUndefined();
});



