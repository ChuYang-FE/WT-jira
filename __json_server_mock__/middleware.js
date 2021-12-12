module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body.username === 'William' && req.body.password === 'aaaaaa') {
      return res.status(200).json({
        user: {
          token: 'successToken123',
        },
      });
    } else {
      res.status(400).json({
        message: '账号或密码错误',
      });
    }
  }
  next();
};
