function conversion(baxter) {
  function isPKQ(a) {
    return ["p", "ph", "b", "m", "k", "kh", "g", "ŋ", "q", "qh", "x"].includes(
      a
    );
  }

  function isP(a) {
    return ["p", "ph", "b", "m"].includes(a);
  }

  var exceptional = {
    // iu
    "'jiw": "qiu/qriu",
    pjiw: "piu/priu",
    kjiw: "kiu/kriu",
    xjiw: "qhiu/qhriu",
    mjiw: "miu/mriu",
    kjiwX: "kíu/kríu",
    gjiw: "griu",
    bjiw: "briu",
    "'jiwX": "qríu",
    gjiwX: "gríu",
    "'jiwH": "qrìu",
    gjiwH: "grìu",
    mjiwH: "mrìu",
    khjiwH: "khrìu",

    // multiple candidates
    khjweX: "khyé/khryé",
    khjeX: "khié/khrié",
    hwojX: "xúi/xi*úi",
    tsyinX: "tín/trín",
    kjunH: "krỳn/kyùn",

    // asterisks
    nyej: "ni*ei",
    dzyej: "di*ei",
    tsyhoj: "thi*əi",
    tsyhean: "thi*ren",
    gwean: "g*ruen",
    dzean: "dz*ren",
    dzren: "dzr*uen",
    geaX: "g*ré",
    trwojX: "tr*úi",
    tsyhojX: "thi*ə́i",
    yojX: "ji*ə́i",
    nyojX: "ni*ə́i",
    taengX: "t*ráŋ",
    dzruwX: "dzr*ú",
    syamX: "shi*ám",
    trhejH: "thr*èi",
    tshwaejH: "ch*ruài",
    nyaet: "ni*rat",
    gweak: "g*ruek",
    trhek: "thr*ek",
    dzyop: "di*əp",
    tsyap: "ti*ap",
    djijH: "dî",

    //note
    sraeng: "広韻sraŋ/切韻srieŋ",
    sraengH: "広韻sràŋ/切韻srièŋ"
  };

  if (exceptional[baxter]) {
    return exceptional[baxter];
  }

  // obtain onset
  var onset_arr = baxter.match(/^[^aeioujw+]+/);
  /*if (onset_arr == null) {
    throw new Error("onset not found");
  }*/
  var onset_baxter = onset_arr[0];

  var onset_conversion = {
    p: "p",
    ph: "ph",
    b: "b",
    m: "m",
    t: "t",
    th: "th",
    d: "d",
    n: "n",
    tr: "tr",
    trh: "thr",
    dr: "dr",
    nr: "nr",
    ts: "c",
    tsh: "ch",
    dz: "dz",
    s: "s",
    z: "z",
    tsr: "cr",
    tsrh: "chr",
    dzr: "dzr",
    sr: "sr",
    zr: "zr",
    tsy: "tь",
    tsyh: "thь",
    dzy: "dь",
    ny: "nь",
    sy: "shь",
    zy: "zhь",
    k: "k",
    kh: "kh",
    g: "g",
    ng: "ŋ",
    "'": "q",
    x: "qh",
    h: "x",
    y: "jь",
    l: "l"
  };
  var onset = onset_conversion[onset_baxter];
  /*if (!onset) {
    throw new Error("invalid onset " + onset_baxter);
  }*/

  var onset_is_soft = onset[onset.length - 1] == "ь";

  // obtain rime
  var rime_arr = baxter.match(/^[^aeioujw+]+([^XH]+)/);
  // "tsrhaewng".match(/^[^aeioujw+]+([^XH]+)/) => ["tsrhaewng", "aewng"]
  /*if (rime_arr == null) {
    throw new Error("rime not found");
  }*/
  var rime_baxter = (onset_is_soft ? "j" : "") + rime_arr[1];

  function rime_conversion(a) {
    var others = {
      aewk: "ro`k",
      aewng: "ro`ŋ",
      i: "iə`",
      ik: "iə`k",
      ing: "iə`ŋ",
      ij: "ri`",
      jaek: "rie`k",
      jaeng: "rie`ŋ",
      ji: "iə`", // for convenience
      jik: "iə`k", // for convenience
      jing: "iə`ŋ", // for convenience
      jij: "i`",
      jo: "io`",
      jom: "yo`m",
      jop: "yo`p",
      ju: "yo`",
      wik: "ryə`k",
      wok: "uə`k",
      wong: "uə`ŋ"
    };
    if (others[a]) {
      return others[a];
    }

    var obj = {
      "": "",
      j: "i",
      k: "k",
      m: "m",
      n: "n",
      ng: "ŋ",
      p: "p",
      t: "t",
      w: "u"
    };

    var medial = [
      /* the order matters */
      ["ea", "re"],
      ["e", "e"],
      ["wea", "rue"],
      ["ow", "o"],
      ["o", "ə"],
      ["je", "rie"],
      ["jie", "ie"],
      ["we", "ue"],
      ["wae", "rua"],
      ["jwie", "ye"],
      ["jwae", "rye"],
      ["jwa", "ya"],
      ["j+", "iə"],
      ["jwie", "ye"],
      ["wa", "ua"],
      ["jwo", "yo"],
      ["uw", "u"],
      ["juw", "yu"],
      ["jwi", "y"],
      ["jow", "yo"],
      ["jw+", "yu"],

      // from here, compression is made possible only with `others`
      ["ae", "ra"],
      ["a", "a"],
      ["i", "ri"],
      ["ji", "i"],
      ["jae", "ia"],
      ["ja", "ia"],
      ["jwe", "rye"],
      ["jo", "ia"],
      ["ju", "yu"],
      ["u", "o"],
      ["wi", "ry"],
      ["wo", "u"]
    ];

    for (var i = 0; i < medial.length; i++) {
      if (a.startsWith(medial[i][0])) {
        return medial[i][1] + "`" + obj[a.slice(medial[i][0].length)];
      }
    }
  }
  var rime = rime_conversion(rime_baxter);
  /*if (!rime) {
    console.log("failed with " + rime_baxter);
    return null;
  }*/

  var tone = "";
  if (baxter[baxter.length - 1] == "X") {
    tone = "\u0301"; // acute
  } else if (baxter[baxter.length - 1] == "H") {
    tone = "\u0300"; // grave
  }

  if (!isPKQ(onset) && rime[0] == "r" && onset != "l") {
    rime = rime.slice(1);
  }

  var khwixwp = {
    "ri`": "ry`i",
    "ə`i": "u`i",
    "ri`n": "ry`n",
    "ri`t": "ry`t",
    "ua`k": "a`k",
    "ua`n": "a`n",
    "ua`t": "a`t",
    "ua`": "a`",
    "rie`n": "rye`n",
    "rie`t": "rye`t",
    "iə`k": "ryə`k",
    "iə`ŋ": "ryə`ŋ"
  };
  if (isP(onset) && khwixwp[rime]) {
    rime = khwixwp[rime];
  }

  rime = rime.replace(/`/, tone).normalize();

  if (onset_is_soft) {
    return onset.slice(0, -1) + rime;
  } else {
    return (onset + rime).replace(/lr/, "l*r");
  }
}
