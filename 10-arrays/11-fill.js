const arr = [ 10, 6, 4, 7, 2 ];

arr.fill(99, 2, 3); // replaces index 2 but not including index 3 with value 99
arr.fill(99, 2, 4); // replaces index 2 and 3 with 99 but doesn't change index 4 

console.log(arr);