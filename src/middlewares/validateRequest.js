export default (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      errors: errors.array(),
      code: "VALIDATION_ERROR" 
    });
  }
  next();
};