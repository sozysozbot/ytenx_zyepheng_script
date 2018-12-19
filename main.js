function handle_exceptions(baxter)
{
	var multiple = {
		"'jiw": "qiu/qriu",
		"pjiw": "piu/priu",
		"kjiw": "kiu/kriu",
		"xjiw": "qhiu/qhriu",
		"mjiw": "miu/mriu",
		"khjweX": "khyé/khryé",
		"khjeX": "khié/khrié",
		"hwojX": "xúi/xi*úi",
		"tsyinX": "tín/trín",
		"kjiwX": "kíu/kríu",
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
		"tsyap": "ti*ap"
	};

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
	tsy: "ti",	tsyh: "thi",	dzy: "di",	ny: "ni",	sy: "shi",	zy: "zhi",
	k: "k",		kh: "kh",		g: "g",		ng: "ŋ",
	"'": "q",	x: "qh",		h: "x",		y: "ji",
	l: "l"
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
	
	// console.log(onset);



	return "";
}

function compute_coverage()
{
	return list.filter(a => conversion(a[0]) == a[1]).length / list.length;
}

document.write(compute_coverage()*100+"%");