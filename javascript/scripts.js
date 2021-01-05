// قم بإنشاء الدالة التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */


function greet() {
    let name = prompt("what is your name ")
    if(name==``){
        console.log(`Hello `)
    }
    else{
        console.log(`hello ${name}`)
    }
}
greet()
