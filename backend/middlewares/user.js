const User = require('../models/User');


const getReview = async (req, res, next) => {
    console.log("gettingreview");
    const { name, creator} = req.body;
    console.log(creator);
    try {
      const rev = await User.findOne({username: creator}, {reviews : { $elemMatch: {user: name} } });
      console.log(rev);

      if (!rev) {
        return res.status(401).json({ message: 'Error in loading Review' });
      }

      req.rev = rev;
      next();
    } catch (error) {
        res.status(401).json({ message: 'Error' });
    }
  };

  module.exports = { getReview };
  