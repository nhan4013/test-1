const combineAll = (array) => {
    const res = [];
    const combine = (arr, i) => {
       for (let j=0, l=array[i].length; j<l; j++) {
          let copy = arr.slice(0);
          copy.push(array[i][j]);
          if (i===array.length-1)
          res.push(copy);
          else
          combine(copy, i+1);
       };
    };
    combine([], 0);
    return res;
 };