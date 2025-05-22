//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
//住所を表示
let a = document.createElement('p');
a.textContent = (campus.address);
let b = document.querySelector('h2#addr');
b.insertAdjacentElement('afterend', a);

//学科を表示
for (let n of gakka) {
p = document.querySelector('h2#dept'); 
u = document.createElement('ul'); 
p.insertAdjacentElement('afterend',u); 
l = document.createElement('li'); 
u.insertAdjacentElement('beforeend',l); 
l.textContent = gakka.name; 
console.log(n);
}
