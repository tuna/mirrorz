const ustclugv1 = require("./ustclug-v1");

module.exports = async function () {
  const site = await (
    await fetch("http://localhost:1234/static/json/site/xtom.json")
  ).json();
  const data = await ustclugv1(
    "https://r.zenithal.workers.dev/http://mirrors.xtom.com/",
    "https://mirrors.xtom.com/api/v1/metas"
  );

  return {
    site,
    info: data.info,
    mirrors: data.mirrors,
  };
};
