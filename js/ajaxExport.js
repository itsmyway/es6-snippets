// XMLHttpRequest wrapper using callbacks
export default obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        if (obj.headers) {
            Object.keys(obj.headers).forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(obj.body);
    });
};


// let str = "Hello";
// //output : "H-e-l-l-o";
//
// str.split("").join("-")
//
//
// //let arr[]= [1, [2,3], [4,5,6]]; //[1,2,3...]
// //flatten the array
//
// const flattenArray = (arr) => {
//     let newArr = [];
//     arr.forEach(item => {
//         if(item.isArray()){
//             flattenArray(item)
//         } else{
//             newArr.push(item);
//         }
//     });
//     return newArr
// }
//
// let nArr = flattenArray(arr)
//
// let arr1 = [1];
// let arr2 = [2,3]
// let arr3 = [4,5,6]
