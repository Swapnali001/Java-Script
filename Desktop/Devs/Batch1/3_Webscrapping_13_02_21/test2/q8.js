function transducer(arr,fFn, mFn){
    let nArr = arr.filter(fFn);
    return nArr;
}
