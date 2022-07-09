const { body, validationResult } = require("express-validator");

exports.userValidator = [
  //name validation
  body("user.firstName", "please enter your first name").isString().notEmpty(),
  body("user.lastName", "please enter your last name").isString().notEmpty(),
  //email validation
  body("user.email", "the email field is required").isString().notEmpty(),
  body("user.email", "please enter a valid email").normalizeEmail().isEmail(),
  body("user.email", "your email can not have capital letters").isLowercase(),
  //password
  body("user.password", "your password should have 8 acracters as minimum")
    .isString()
    .isLength({ min: 8, max: 12 }),
  //phone validation
  body("user.phone", "phone number is required").isNumeric().notEmpty(),
  body("user.phone", " a phone must have 8 numbers").isLength(8),

  //address fields validation
  body("user.address.street")
    .isString()
    .notEmpty()
    .withMessage("enter your street please"),
  body("user.address.city")
    .isString()
    .notEmpty()
    .withMessage("enter your city  please"),
  body("user.address.state")
    .isString()
    .notEmpty()
    .withMessage("enter your state  please"),
  body("user.address.zipCode")
    .notEmpty()
    .withMessage("enter your zip code please"),
  body("user.address.zipCode")
    .isNumeric()
    .withMessage("the zip code is a number"),
  //category : parent or consultant
  body("user.category")
    .isString()
    .notEmpty()
    .withMessage("specify how would you join us"),
  body("user.agrement")
    .isString()
    .notEmpty()
    .withMessage("You must agree before submitting."),
];

exports.parentValidator = [
  //job
  body("job", "enter your current job please").isString().notEmpty(),
  //status
  body("civil").isString().notEmpty().withMessage("choose your current status"),
  //family member
  body("familyMembers")
    .isNumeric()
    .notEmpty()
    .withMessage("enter your the number of your family members"),
  body("familyMembers")
    .isNumeric()
    .withMessage("this is field must be numeric"),
  body("demandes")
    .isString()
    .notEmpty()
    .withMessage("specify your demandes please"),
];

exports.consultantValidator = [
  body("gender").isString().notEmpty().withMessage("specify your gender"),
  body("domain").isString().notEmpty().withMessage("specify your domain"),
  body("accepted").isBoolean(),
];

exports.childValidator = [
  body("child.*.childFName")
    .notEmpty()
    .isString()
    .withMessage("enter your child first name"),
  body("child.*.childLName")
    .notEmpty()
    .isString()
    .withMessage("enter your child last name"),
  body("child.*.birthDate")
    .notEmpty()
    .isISO8601()
    .toDate()
    .withMessage("enter your child date of birth"),
  body("child.*.diagnosis.disorder")
    .notEmpty()
    .isString()
    .withMessage("enter the disorder type of your child"),
  body("child.*.diagnosis.establishment")
    .notEmpty()
    .isString()
    .withMessage("enter the establishment where did you get the dignostic"),
  body("child.*.diagnosis.date")
    .notEmpty()
    .isISO8601()
    .toDate()
    .withMessage("when did your child has a diagnostic"),
  body("child.*.integration.integrated")
    .isBoolean()
    .notEmpty()
    .withMessage("is your child integrated"),
];

exports.loginValidator = [
  //email validation
  body("email")
    .notEmpty()
    .normalizeEmail()
    .isEmail()
    .withMessage("please enter a valid email"),
  body("email")
    .isLowercase()
    .withMessage("your email can not have capital letters"),
  //password
  body("password", "your password should have 8 acracters as minimum").isLength(
    { min: 8, max: 12 }
  ),
];

exports.validation = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
