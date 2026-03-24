const Url = require("../models/urlModel");

exports.createUrl = async (req, res) => {
  const reqUrl = req.body.originalUrl;
  const shortCode = Math.random().toString(36).substring(2, 8);
  const newUrl = await Url.create({
    originalUrl: reqUrl,
    shortCode: shortCode,
  });
  res.status(201).json({
    status: "success",
    data: newUrl,
  });
};

exports.redirection = async (req, res) => {
  const code = req.params.code;

  const foundUrl = await Url.findOne({ shortCode: code });

  if (!foundUrl) {
    return res.status(404).json({
      status: "fail",
      message: "Short URL not found",
    });
  }

  res.redirect(foundUrl.originalUrl);
};
