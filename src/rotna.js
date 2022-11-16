const romanss = new Map();
romanss.set("I",1)
romanss.set("V",5,);
romanss.set("X",10,);
romanss.set("L",50,);
romanss.set("C",100,);
romanss.set("D",500,);
romanss.set("M",1000,);

export const romansToNatural = (str = "") => {
    let res = 0;
    if(str.toUpperCase().match("^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$")){
        const romanArr = str.toUpperCase().split("");
        let n = str.length;
        let i = n - 1;
        while( i >= 0 ) {
            if( i < n - 1 && romanss.get(romanArr[i]) < romanss.get(romanArr[i + 1]) ) {
                res -= romanss.get(romanArr[i]);
            } else {
                res += romanss.get(romanArr[i]);
            }
            i--;
        }

    } else {
        res = -1;
    }
    return res;

}