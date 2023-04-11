const paintMiddleware = () => {
  const supportedPaintColors = [
    'blue',
    'green',
    'yellow',
    'red',
    'black'
  ];
  return (req, res, next) => {
    console.log(`SupportedPaint: input color = ${req.body.color}`);
    
    if (!req.body.color) {
      req.body.supportedPaint = false;
    } else if (supportedPaintColors.includes(req.body.color)) {
      req.body.supportedPaint = true;
    } else {
      req.body.supportedPaint = false;
    }

    next();
  }
}

module.exports = paintMiddleware;