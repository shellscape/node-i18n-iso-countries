const countries = require("./");

const locales = [
  require("../data/langs/af.json"),
  require("../data/langs/am.json"),
  require("../data/langs/ar.json"),
  require("../data/langs/az.json"),
  require("../data/langs/be.json"),
  require("../data/langs/bg.json"),
  require("../data/langs/bn.json"),
  require("../data/langs/bs.json"),
  require("../data/langs/ca.json"),
  require("../data/langs/cs.json"),
  require("../data/langs/cy.json"),
  require("../data/langs/da.json"),
  require("../data/langs/de.json"),
  require("../data/langs/dv.json"),
  require("../data/langs/el.json"),
  require("../data/langs/el.json"),
  require("../data/langs/en.json"),
  require("../data/langs/es.json"),
  require("../data/langs/et.json"),
  require("../data/langs/eu.json"),
  require("../data/langs/fa.json"),
  require("../data/langs/fi.json"),
  require("../data/langs/fr.json"),
  require("../data/langs/gl.json"),
  require("../data/langs/ha.json"),
  require("../data/langs/he.json"),
  require("../data/langs/hi.json"),
  require("../data/langs/hr.json"),
  require("../data/langs/hu.json"),
  require("../data/langs/hy.json"),
  require("../data/langs/id.json"),
  require("../data/langs/is.json"),
  require("../data/langs/it.json"),
  require("../data/langs/ja.json"),
  require("../data/langs/ka.json"),
  require("../data/langs/kk.json"),
  require("../data/langs/km.json"),
  require("../data/langs/ko.json"),
  require("../data/langs/ku.json"),
  require("../data/langs/ky.json"),
  require("../data/langs/lt.json"),
  require("../data/langs/lv.json"),
  require("../data/langs/mk.json"),
  require("../data/langs/ml.json"),
  require("../data/langs/mn.json"),
  require("../data/langs/mr.json"),
  require("../data/langs/ms.json"),
  require("../data/langs/nb.json"),
  require("../data/langs/nl.json"),
  require("../data/langs/nn.json"),
  require("../data/langs/no.json"),
  require("../data/langs/pl.json"),
  require("../data/langs/ps.json"),
  require("../data/langs/pt.json"),
  require("../data/langs/ro.json"),
  require("../data/langs/ru.json"),
  require("../data/langs/sd.json"),
  require("../data/langs/sk.json"),
  require("../data/langs/sl.json"),
  require("../data/langs/so.json"),
  require("../data/langs/sq.json"),
  require("../data/langs/sr.json"),
  require("../data/langs/sv.json"),
  require("../data/langs/sw.json"),
  require("../data/langs/ta.json"),
  require("../data/langs/tg.json"),
  require("../data/langs/th.json"),
  require("../data/langs/tr.json"),
  require("../data/langs/tt.json"),
  require("../data/langs/ug.json"),
  require("../data/langs/uk.json"),
  require("../data/langs/ur.json"),
  require("../data/langs/uz.json"),
  require("../data/langs/vi.json"),
  require("../data/langs/zh.json"),
];

locales.forEach((locale) => countries.registerLocale(locale));

module.exports = countries;
