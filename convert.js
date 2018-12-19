function handle_exceptions(baxter)
{
	var iu = {
		"'jiw": "qiu/qriu",
		"pjiw": "piu/priu",
		"kjiw": "kiu/kriu",
		"xjiw": "qhiu/qhriu",
		"mjiw": "miu/mriu",
		"kjiwX": "kíu/kríu",
		"gjiw": "griu",
		"bjiw": "briu",
		"'jiwX": "qríu",
		"gjiwX": "gríu",
		"'jiwH": "qrìu",
		"gjiwH": "grìu",
		"mjiwH": "mrìu",
		"khjiwH": "khrìu",
	};

	var multiple = {
		"khjweX": "khyé/khryé",
		"khjeX": "khié/khrié",
		"hwojX": "xúi/xi*úi",
		"tsyinX": "tín/trín",
		"kjunH": "krỳn/kyùn"
	};

	var exceptional = {
		"laewng": "l*roŋ",
		"nyej": "ni*ei",
		"dzyej": "di*ei",
		"leaj": "l*rei",
		"lweaj": "l*ruei",
		"tsyhoj": "thi*əi",
		"lean": "l*ren",
		"tsyhean": "thi*ren",
		"lwean": "l*ruen",
		"gwean": "g*ruen",
		"dzean": "dz*ren",
		"dzren": "dzr*uen",
		"laew": "l*rau",
		"geaX": "g*ré",
		"trwojX": "tr*úi",
		"tsyhojX": "thi*ə́i",
		"yojX":"ji*ə́i",
		"nyojX": "ni*ə́i",
		"laeX": "l*rá",
		"taengX": "t*ráŋ",
		"laengX": "l*ráŋ",
		"dzruwX": "dzr*ú",
		"syamX": "shi*ám",
		"leamX": "l*rém",
		"trhejH": "thr*èi",
		"tshwaejH": "ch*ruài",
		"laewk": "l*rok",
		"nyaet": "ni*rat",
		"leak": "l*rek",
		"gweak": "g*ruek",
		"trhek": "thr*ek",
		"dzyop": "di*əp",
		"tsyap": "ti*ap",
		"djijH": "dî"
	};

	if (iu[baxter]) {
		return iu[baxter];
	}

	if (multiple[baxter]) {
		return multiple[baxter];
	}

	if (exceptional[baxter]) {
		return exceptional[baxter];
	}
	return null;
}

var onset_conversion = {
	p: "p",		ph: "ph",		b: "b",		m: "m",
	t: "t",		th: "th",		d: "d",		n: "n",
	tr: "tr",	trh: "thr",		dr: "dr",	nr: "nr",
	ts: "c",	tsh: "ch",		dz: "dz",				s: "s",		z: "z",
	tsr: "cr",	tsrh: "chr",	dzr: "dzr",				sr: "sr",	zr: "zr",
	tsy: "tь",	tsyh: "thь",	dzy: "dь",	ny: "nь",	sy: "shь",	zy: "zhь",
	k: "k",		kh: "kh",		g: "g",		ng: "ŋ",
	"'": "q",	x: "qh",		h: "x",		y: "jь",
	l: "l"
};

function isPKQ(a)
{
	return [
		"p", "ph", "b", "m",
		"k", "kh", "g", "ŋ",
		"q", "qh", "x"
	].includes(a);
}

function isP(a)
{
	return [
		"p", "ph", "b", "m"
	].includes(a);
}

var rime_conversion = {
	 "a": "a`"
	,"ae": "ra`"
	,"aej": "ra`i"
	,"aek": "ra`k"
	,"aem": "ra`m"
	,"aen": "ra`n"
	,"aeng": "ra`ŋ"
	,"aep": "ra`p"
	,"aet": "ra`t"
	,"aew": "ra`u"
	,"aewk": "ro`k"
	,"aewng": "ro`ŋ"
	,"aj": "a`i"
	,"ak": "a`k"
	,"am": "a`m"
	,"an": "a`n"
	,"ang": "a`ŋ"
	,"ap": "a`p"
	,"at": "a`t"
	,"aw": "a`u"
	,"ea": "re`"
	,"eaj": "re`i"
	,"eak": "re`k"
	,"eam": "re`m"
	,"ean": "re`n"
	,"eang": "re`ŋ"
	,"eap": "re`p"
	,"eat": "re`t"
	,"ej": "e`i"
	,"ek": "e`k"
	,"em": "e`m"
	,"en": "e`n"
	,"eng": "e`ŋ"
	,"ep": "e`p"
	,"et": "e`t"
	,"ew": "e`u"
	,"i": "iə`"
	,"ij": "ri`"
	,"ik": "iə`k"
	,"im": "ri`m"
	,"in": "ri`n"
	,"ing": "iə`ŋ"
	,"ip": "ri`p"
	,"it": "ri`t"
	,"iw": "ri`u" // for convenience
	,"j+j": "iə`i"
	,"j+n": "iə`n"
	,"j+t": "iə`t"
	,"ja": "ia`"
	,"jae": "ia`"
	,"jaek": "rie`k"
	,"jaem": "ia`m"
	,"jaeng": "rie`ŋ"
	,"jaep": "ia`p"
	,"jak": "ia`k"
	,"jang": "ia`ŋ"
	,"je": "rie`"
	,"jej": "rie`i"
	,"jek": "rie`k"
	,"jem": "rie`m"
	,"jen": "rie`n"
	,"jeng": "rie`ŋ"
	,"jep": "rie`p"
	,"jet": "rie`t"
	,"jew": "rie`u"
	,"ji": "iə`" // for convenience
	,"jie": "ie`"
	,"jiej": "ie`i"
	,"jiek": "ie`k"
	,"jiem": "ie`m"
	,"jien": "ie`n"
	,"jieng": "ie`ŋ"
	,"jiep": "ie`p"
	,"jiet": "ie`t"
	,"jiew": "ie`u"
	,"jij": "i`"
	,"jik": "iə`k" // for convenience
	,"jim": "i`m"
	,"jin": "i`n"
	,"jing": "iə`ŋ" // for convenience
	,"jip": "i`p"
	,"jit": "i`t"
	,"jiw": "i`u"
	,"jo": "io`"
	,"joj": "ia`i"
	,"jom": "yo`m"
	,"jon": "ia`n"
	,"jop": "yo`p"
	,"jot": "ia`t"
	,"jowk": "yo`k"
	,"jowng": "yo`ŋ"
	,"ju": "yo`"
	,"jun": "yu`n"
	,"jut": "yu`t"
	,"juw": "yu`"
	,"juwk": "yu`k"
	,"juwng": "yu`ŋ"
	,"jw+j": "yu`i"
	,"jwa": "ya`"
	,"jwaek": "rye`k"
	,"jwaeng": "rye`ŋ"
	,"jwak": "ya`k"
	,"jwang": "ya`ŋ"
	,"jwe": "rye`"
	,"jwej": "ye`i"
	,"jwek": "rye`k"
	,"jwen": "rye`n"
	,"jweng": "rye`ŋ"
	,"jwet": "rye`t"
	,"jwie": "ye`"
	,"jwiek": "ye`k"
	,"jwien": "ye`n"
	,"jwieng": "ye`ŋ"
	,"jwiet": "ye`t"
	,"jwij": "y`i"
	,"jwin": "y`n"
	,"jwit": "y`t"
	,"jwoj": "yo`i"
	,"jwon": "yo`n"
	,"jwot": "yo`t"
	,"oj": "ə`i"
	,"ok": "ə`k"
	,"om": "ə`m"
	,"on": "ə`n"
	,"ong": "ə`ŋ"
	,"op": "ə`p"
	,"ot": "ə`t"
	,"owk": "o`k"
	,"owng": "o`ŋ"
	,"u": "o`"
	,"uw": "u`"
	,"uwk": "u`k"
	,"uwng": "u`ŋ"
	,"wa": "ua`"
	,"wae": "rua`"
	,"waej": "rua`i"
	,"waek": "rua`k"
	,"waen": "rua`n"
	,"waeng": "rua`ŋ"
	,"waet": "rua`t"
	,"waj": "ua`i"
	,"wak": "ua`k"
	,"wan": "ua`n"
	,"wang": "ua`ŋ"
	,"wat": "ua`t"
	,"wea": "rue`"
	,"weaj": "rue`i"
	,"weak": "rue`k"
	,"wean": "rue`n"
	,"weang": "rue`ŋ"
	,"weat": "rue`t"
	,"wej": "ue`i"
	,"wek": "ue`k"
	,"wen": "ue`n"
	,"weng": "ue`ŋ"
	,"wet": "ue`t"
	,"wij": "ry`i"
	,"wik": "ryə`k"
	,"win": "ry`n"
	,"wit": "ry`t"
	,"woj": "u`i"
	,"wok": "uə`k"
	,"won": "u`n"
	,"wong": "uə`ŋ"
	,"wot": "u`t"
};

function conversion(baxter)
{
	if (handle_exceptions(baxter)) {
		return handle_exceptions(baxter);
	}

	// obtain onset
	var onset_arr = baxter.match(/^[^aeioujw+]+/);
	if (onset_arr == null) {
		throw new Error('onset not found');
	}
	var onset_baxter = onset_arr[0];
	var onset = onset_conversion[onset_baxter];
	if (!onset) {
		throw new Error("invalid onset " + onset_baxter);
	}

	var onset_is_soft = onset[onset.length - 1] == "ь";

	// obtain rime
	var rime_arr = baxter.match(/^[^aeioujw+]+([^XH]+)/)
	// "tsrhaewng".match(/^[^aeioujw+]+([^XH]+)/) => ["tsrhaewng", "aewng"]
	if (rime_arr == null) {
		throw new Error('rime not found');
	}
	var rime_baxter = (onset_is_soft ? "j" : "") + rime_arr[1];
	var rime = rime_conversion[rime_baxter];
	if (!rime) {
		console.log("failed with " + rime_baxter);
		return null;
	}

	var tone = "";
	if (baxter[baxter.length - 1] == "X") {
		tone = "\u0301"; // acute
	} else if (baxter[baxter.length - 1] == "H") {
		tone = "\u0300"; // grave
	}

	if (!isPKQ(onset) && rime[0] == "r"){
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
		return onset + rime;
	}
}
