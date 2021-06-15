function strCount(array){
    let count = 0;
    array.forEach(str => {
        if(str.length > 3 ){
            count +=1;
        }
    });
return count;
}