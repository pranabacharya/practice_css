

try {
    // myfunction();
    // 1+a
    let a = 1+2
    if(a != 2){
        let err = new SyntaxError('value of a is not 2');
        console.log (err)
    }else{
        console.log('the value of a is 2')
    }
} catch (e) {
    // console.log(e.message+" "+e.name);
    console.log(e.message);
}