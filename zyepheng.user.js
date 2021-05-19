// ==UserScript==
// @name        Show Zyepheŋ in ytenx.org (2021/05/19 16:43 UTC)
// @namespace   http://sozysozbot.github.io
// @description Show Zyepheŋ in ytenx.org
// @include    *://ytenx.org/*
// ==/UserScript==

function conversion(i){var r={"'jiw":"qiu/qriu",pjiw:"piu/priu",kjiw:"kiu/kriu",xjiw:"qhiu/qhriu",mjiw:"miu/mriu",kjiwX:"kíu/kríu",gjiw:"griu",bjiw:"briu","'jiwX":"qríu",gjiwX:"gríu","'jiwH":"qrîu",gjiwH:"grîu",mjiwH:"mrîu",khjiwH:"khrîu",khjweX:"khyé/khryé",khjeX:"khié/khrié",hwojX:"xúi/xьʼúi",tsyinX:"tín/trín",kjunH:"krŷn/kyûn",nyej:"nьʼei",dzyej:"dьʼei",tsyhoj:"thьʼəi",tsyhean:"thьʼren",dzean:"dzʼren",dzren:"dzrʼuen",trwojX:"trʼúi",tsyhojX:"thьʼə́i",yojX:"jьʼə́i",nyojX:"nьʼə́i",taengX:"tʼráŋ",dzruwX:"dzrʼú",syamX:"shьʼám",trhejH:"thrʼêi",tshwaejH:"chʼruâi",nyaet:"nьʼrat",trhek:"thrʼek",dzyop:"dьʼəp",tsyap:"tьʼap",djijH:"dʼî",sraeng:"広韻sraŋ/切韻srieŋ",sraengH:"広韻srâŋ/切韻sriêŋ"};if(r[i])return r[i];var e={p:"p",ph:"ph",b:"b",m:"m",t:"t",th:"th",d:"d",n:"n",tr:"tr",trh:"thr",dr:"dr",nr:"nr",ts:"c",tsh:"ch",dz:"dz",s:"s",z:"z",tsr:"cr",tsrh:"chr",dzr:"dzr",sr:"sr",zr:"zr",tsy:"tь",tsyh:"thь",dzy:"dь",ny:"nь",sy:"shь",zy:"zhь",k:"k",kh:"kh",g:"g",ng:"ŋ","'":"q",x:"qh",h:"x",y:"jь",l:"l"}[i.match(/^[^aeioujw+]+/)[0]],t="ь"==e[e.length-1];var j=function(i){var r={aewk:"ro`k",aewng:"ro`ŋ",i:"iə`",ik:"iə`k",ing:"iə`ŋ",ij:"ri`",jaek:"rie`k",jaeng:"rie`ŋ",ji:"iə`",jik:"iə`k",jing:"iə`ŋ",jij:"i`",jo:"io`",jom:"yo`m",jop:"yo`p",ju:"yo`",wik:"ryə`k",wok:"uə`k",wong:"uə`ŋ"};if(r[i])return r[i];for(var e={"":"",j:"i",k:"k",m:"m",n:"n",ng:"ŋ",p:"p",t:"t",w:"u"},t=[["ea","re"],["e","e"],["wea","rue"],["ow","o"],["o","ə"],["je","rie"],["jie","ie"],["we","ue"],["wae","rua"],["jwie","ye"],["jwae","rye"],["jwa","ya"],["j+","iə"],["jwie","ye"],["wa","ua"],["jwo","yo"],["uw","u"],["juw","yu"],["jwi","y"],["jow","yo"],["jw+","yu"],["ae","ra"],["a","a"],["i","ri"],["ji","i"],["jae","ia"],["ja","ia"],["jwe","rye"],["jo","ia"],["ju","yu"],["u","o"],["wi","ry"],["wo","u"]],j=0;j<t.length;j++)if(i.startsWith(t[j][0]))return t[j][1]+"`"+e[i.slice(t[j][0].length)]}((t?"j":"")+i.match(/^[^aeioujw+]+([^XH]+)/)[1]),n="";"X"==i[i.length-1]?n="́":"H"==i[i.length-1]&&(n="̂"),["p","ph","b","m","k","kh","g","ŋ","q","qh","x"].includes(e)||"r"!=j[0]||"l"==e||(j=j.slice(1));var a={"ri`":"ry`i","ə`i":"u`i","ri`n":"ry`n","ri`t":"ry`t","ua`k":"a`k","ua`n":"a`n","ua`t":"a`t","ua`":"a`","rie`n":"rye`n","rie`t":"rye`t","ia`n":"yo`n","ia`t":"yo`t","ia`ŋ":"ya`ŋ","ia`k":"ya`k","iə`k":"ryə`k","iə`ŋ":"ryə`ŋ"};return function(i){return["p","ph","b","m"].includes(i)}(e)&&a[j]&&(j=a[j]),j=j.replace(/`/,n).normalize(),t?e.slice(0,-1)+j:e+j}

if (location.href.includes("://ytenx.org/zim?dzih=")) {
  var guangyun = Array.prototype.filter.call(
    document.getElementsByTagName("h1"),
    item => item.innerHTML == "廣韻"
  )[0];

  var dom = guangyun;
  do {
    if (dom.tagName == "P") {
      const original = dom.lastElementChild.innerHTML;
      const input = original.replace(/.*白一平: ([^;]+);.*/, "$1");
      dom.lastElementChild.innerHTML = `${original.replace(/\)\s*/, ";")} Mag462: ${conversion(
        input
      )})`;
    }
    dom = dom.nextElementSibling;
  } while (dom && dom.tagName != "H1");
}