// 回文
function isPalindrme(word) {
  // var s =  new Stack()
  let s = [];
  let b = word.split("");
  for (let i = 0; i < b.length; ++i) {
    s.push(word[i]);
  }
  console.log(s);

  let rword = "";
  while (s.length > 0) {
    rword += s.pop();
  }
  console.log(rword);

  return word === rword ? true : false;
}

// 队列
function Queue() {
  this.dataStore = [];
  this.dequeue = dequeue; //添加
  this.enqueue = enqueue; //删除
  this.front = front; //获取队头
  this.back = back; //获取队尾
  this.toString1 = toString1; //显示所有元素
  this.empty = empty;
}

function dequeue(ele) {
  return this.dataStore.push(ele);
}
function enqueue() {
  return this.dataStore.shift();
}
function front() {
  return this.dataStore[0];
}
function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString1() {
  let str = "";
  for (let i; i < this.dataStore.length; ++i) {
    str = this.dataStore[i] + "\n";
  }
  return str;
}

function empty() {
  return this.dataStore.length === 0 ? true : false;
}

var dancers = [
  {
    sex: "F",
    names: [
      "Allison",
      "McMillan",
      "Cheryl",
      "Ferenback",
      "Jennifer",
      "Ingram",
      "Aurora",
      "Adney",
    ],
  },
  {
    sex: "M",
    names: [
      "Frank",
      "Opitz",
      "Mason",
      "McMillan",
      "Clayton",
      "Ruff",
      "Raymond",
      "Williams",
      "Bryan",
      "Frazer",
      "David",
      "Durr",
      "Danny",
      "Martin",
    ],
  },
];
function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(males, females) {
  for (var i = 0; i < dancers.length; ++i) {
    for (var j = 0; j < dancers[i].names.length; ++j) {
      if (dancers[i].sex == "F") {
        femaleDancers.enqueue(new Dancer(dancers[i].names[j], dancers[i].sex));
      } else {
        maleDancers.enqueue(new Dancer(dancers[i].names[j], dancers[i].sex));
      }
    }
  }
}

function dance(males, females) {
  console.log("The dance partners are:\n"); 
 while (!females.empty() && !males.empty()) {
  person = females.dequeue();
  console.log("男 dancer is:" + person.name); 
 person = males.dequeue(); 
 console.log("and the 女 dancer is:" + person.name); 
 } 
 console.log();
 }

 var maleDancers = new Queue();
var femaleDancers = new Queue();

getDancers(maleDancers, femaleDancers);

dance(maleDancers, femaleDancers);
if (femaleDancers.count() > 0) 
{ 
console.log( "There are" + femaleDancers.count() + "females dancers waiting to dance." );
}
if (maleDancers.count() > 0) {
 console.log( "There are " + maleDancers.count() + " males dancers waiting to dance." );
}