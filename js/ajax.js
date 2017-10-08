let request = function(obj){
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    //open the xhr connection
    xhr.open(obj.method || 'GET', obj.url);
    if(obj.headers){
      Object.keys(obj.headers).forEach((key) => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }
    //xhr.onload gets called when XMLHttpRequest transaction completes successfully.
    //syntax XMLHttpRequest.onload = callback;
    xhr.onload = () => {
      if(xhr.status >= 200 && xhr.status < 300){
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    }
    //XMLHttpRequest.onerror = callback;
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(obj.body);
  });
}

request({url: "employees.json"})
  .then(data => {
    let employees = JSON.parse(data);
    let html = "";
    employees.forEach(employee => {
      html += `
        <div>
          <img src='${employee.picture}'/>
          <div>
              ${employee.firstName} ${employee.lastName}
              <p>${employee.phone}</p>
          </div>
        </div>`;
        document.getElementById("list").innerHTML = html;
    });
  })
  .catch(error => {
    console.log(error);
  })

// let request = obj => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         console.log('XHR Request' + xhr);
//         xhr.open(obj.method || "GET", obj.url);
//         if (obj.headers) {
//             Object.keys(obj.headers).forEach(key => {
//                 xhr.setRequestHeader(key, obj.headers[key]);
//             });
//         }
//         xhr.onload = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.response);
//             } else {
//                 reject(xhr.statusText);
//             }
//         };
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send(obj.body);
//     });
// };

//console.log('XHR Request' + request);
//For you to understand that fns can be defined this way
// let ddd = ((n) => {
//   console.log('n', n);
// });
// console.log(ddd(3));
//----------------------------
