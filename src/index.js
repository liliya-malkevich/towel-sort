
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length === 0 || matrix.length === 0){
    return [];
  }
let n = matrix.length;
let m = matrix[0].length;
let arr = [];
let k = 0;

for(let i = 0; i<n;i++){
  if(i%2 == 0){
   
    for( let j =0;j<m;j++){
      arr[k] = matrix[i][j];
      k++;
  }
}
  else {
    for( let j =m-1;j>=0;j--){
      arr[k] = matrix[i][j];
      k++;
  }
 
  }
}

 return arr;
}

