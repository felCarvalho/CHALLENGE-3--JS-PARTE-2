//Jonas tem 3 amigos, e seu melhor amigo se chama michael

const jonas = {
    firstName : 'Jonas',
    lastName  : 'Carvalho',
    birthYear : 2037 - 1991 ,
    job       : 'teacher',
    friend    : ['Michael', 'Peter', 'Steven']
}
console.log(jonas)

const fraseMemoravel1 = `${(jonas['firstName'])} tem ${jonas.friend.length} amigos, e seu melhor amigo se chama ${jonas.friend[0]}`
console.log(fraseMemoravel1);

const fraseMemoravel2 = `${jonas.firstName} tem ${jonas.friend.length} amigos, e seu melhor amigo se chama ${jonas.friend[0]}`
console.log(fraseMemoravel2);

//jonas é um professor de 46 anos, e tem carteira de motorista//e não tem carteira de motorista.
const jonas1 = {
    firstName : 'Jonas',
    lastName  : 'Carvalho',
    birthYear : 1991 ,
    job       : 'Professor',
    friend    : ['Michael', 'Peter', 'Steven'] ,
    driverCar : true ,
    callAge: function () {
       this.age = 2037 - this.birthYear;
       return this.age;
    } ,

    callAge2: function () {
           if (this.driverCar === true) {
               return `e tem carteira de motorista`
           } else {
            return `e não tem carteira de motorista`
           }
    }
}
console.log(jonas1)

const fraseMemoravel3 = `${jonas1['firstName']} é um ${jonas1['job']} de ${jonas1.callAge()} anos, ${jonas1.callAge2()}` 
console.log(fraseMemoravel3)


const Objeto1 = {
    fullNameMark : 'Mark Miller' ,
    markKg       : 78 ,
    markHeight   : 1.69 ,

    calBMI: function () {
    this.bmi = this.markKg / (this.markHeight * this.markHeight);
    return this.bmi;
    }
}

const Objeto2 = {
    fullNameJohn : 'John Smith' ,
    jonhKg       : 92 ,
    jonhHeigth   : 1.95 ,
    
    calBMI2:function () {
    this.bmi = this.jonhKg / (this.jonhHeigth * this.jonhHeigth);
    return this.bmi
    }
    
}

const IMCmark = Objeto1.calBMI()
console.log(IMCmark);

const IMCjohn = Objeto2.calBMI2()
console.log(IMCjohn);

const bmi = (IMCmark, IMCjohn) => {
    if (IMCmark >= IMCjohn) {
       // console.log(`Mark Miller's BMI (${IMCmark}), is higher than John Smith's BMI )${IMCjohn})`);
        return `Mark Miller's BMI (${IMCmark}), is higher than John Smith's BMI (${IMCjohn})`;
    } else {
       // console.log(`John Smit's BMI (${IMCjohn}), is higher than Mark Miller's BMI (${IMCmark})`);
        return `John Smit's BMI (${IMCjohn}), is higher than Mark Miller's BMI (${IMCmark})`;
    }
}

const maiorIMC = bmi(IMCmark, IMCjohn)
console.log(maiorIMC)