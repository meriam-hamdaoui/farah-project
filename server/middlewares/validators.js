const { body, validationResult } = require("express-validator");

exports.userValidator = [
  //name validation
  body("user.firstName").notEmpty().withMessage("please enter your first name"),
  body("user.lastName").notEmpty().withMessage("please enter your last name"),

  //email validation
  body("user.email")
    .notEmpty()
    .normalizeEmail()
    .isEmail()
    .withMessage("please enter a valid email"),
  body("user.email")
    .isLowercase()
    .withMessage("your email can not have capital letters"),
  //password
  body(
    "user.password",
    "your password should have 8 acracters as minimum"
  ).isLength({ min: 8, max: 12 }),
  //phone validation
  body("user.phone").notEmpty().withMessage("phone number is required"),
  body("user.phone")
    .isLength({ min: 8 })
    .isNumeric()
    .withMessage("enter a valid phone number please"),

  //address fields validation
  body("user.address.street")
    .notEmpty()
    .withMessage("enter your street please"),
  body("user.address.city").notEmpty().withMessage("enter your city  please"),
  body("user.address.state").notEmpty().withMessage("enter your state  please"),
  body("user.address.zipCode")
    .notEmpty()
    .withMessage("enter your zip code please"),
  body("user.address.zipCode")
    .isNumeric()
    .withMessage("the zip code is a number"),
];

exports.parentValidator = [
  //job
  body("job").notEmpty().withMessage("enter your current job please"),
  //family member
  body("familyMembers")
    .notEmpty()
    .withMessage("enter your the number of your family members"),
  body("familyMembers")
    .isNumeric()
    .withMessage("this is field must be numeric"),
  //children
  body("child")
    .notEmpty()
    .withMessage("you must have children with special needs to register"),
  //demandes
  body("demandes").notEmpty().withMessage("specify your demandes please"),
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
  body("child.*.disorder.disType")
    .notEmpty()
    .isString()
    .withMessage("enter the disorder type of your child"),
  body("child.*.disorder.disEstablishment")
    .notEmpty()
    .isString()
    .withMessage("enter the establishment where did you get the dignostic"),
  body("child.*.disorder.disDate")
    .notEmpty()
    .isISO8601()
    .toDate()
    .withMessage("when did your child has a diagnostic"),
  body("child.*.integration.integrated")
    .isBoolean()
    .notEmpty()
    .withMessage("is your child integrated"),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
