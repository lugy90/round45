function round45(fl) {
	if (typeof fl !== 'number' || fl < 0) {console.log('Error: the parameter can only be positive.'); return;}
	if (typeof fl === 'number' && fl%1 === 0) {console.log('result', fl); return fl;}
	var mid = fl.toString();
	var dotIdx = mid.indexOf('.');
	mid = mid.split(mid.slice(dotIdx,dotIdx+1)).join('');
	mid = mid.split('');
	var arr = [];
	for(var i = 0; i <= dotIdx+2; i++) {
		mid[i] = parseInt(mid[i]);
		arr.push(mid[i])
	}
	var a = 0;
    for(var j = arr.length-1; j>=0; j--) {
    	if (arr[j] >= 5) {
    		if (j == 0) {
    			a = 1;
    		} else {
    			arr[j-1] = arr[j-1] + 1;
    		}
    	}
    }
    if (a) arr.unshift(a);
    arr.pop();
    arr.splice(dotIdx, 0, '.');
    fl = parseFloat(arr.join(''));
    console.log('result', fl);
    return fl;
}