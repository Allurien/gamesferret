

export function formatPostData(data){
    const params = new URLSearchParams();

    for(let [k, v] of Object.entries(data)){
        params.append(k, v);
    }

    return params;
}

export function removePeriods(str){
    return str.replace(/\./g, '%2E');
}
  
export function addPeriods(str){
    return str.replace(/\%2E/g, '.');
}
