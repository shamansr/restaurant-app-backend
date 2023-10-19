const userService = require('../services/userService');
const emailValidation = require('../helpers/validateEmail')

exports.signup = async (req, res) => {
  const { firstName, lastName, emailId, password } = req.body;

  // Validate the email address
  if (!emailId ||!emailValidation.validateEmail(emailId)) {
    res.status(400).json({msg: 'Invalid Email Address'});
    return;
  }

  if (!firstName) {
    throw new Error('Firstname required')
  }

  if (!lastName) {
    throw new Error('Lastname required')
  }

  if (!password) {
    throw new Error('Password Required')
  }

  try {
    const user = await userService.signupUser(firstName, lastName, emailId, password);
    res.status(201).json({msg: 'User Added Succesfully', result: user});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

exports.login = async (req, res) => {
  const { emailId, password } = req.body;

  // Validate the email address
  if (!emailValidation.validateEmail(emailId)) {
    res.status(400).send('Invalid email address');
    return;
  }

  if (!password){
    throw new Error('Invalid password')
  }

  try {
    const result = await userService.loginUser(emailId, password);
    res.status(200).json({msg: 'Login Successful', result: result});
  } catch (error) {
    console.error(error);
    res.status(400).json({sucess: false, message: error.message});
  }
};

exports.logout = async (req, res) => {
  try {
    // Call the logout function from userService to handle the logout process
    const userId = req.user.id;

    // Call a function from userService to handle the logout process
    await userService.logoutUser(userId);

    res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

