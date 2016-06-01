	
    const str = "Chongqing University of Posts and Telecommunications"
    //将权重以数组的形式存储起来
    let _str = str.toLowerCase().replace(/\s+/g,"") //转化成小写并且去除空格
    //树的叶子节点个数
    const n = _str.length   
    let unq = {}
    _str.split("").forEach(function(item) {
        if (!(item in unq)) {
            unq[item] = 1
        }else {
            unq[item] ++
        }
    })
    console.log(unq)
    let arr = []
    for(let key in unq) {
        arr.push(unq[key])
    }
    // select出最小的两个数字
    let select_min = (_arr, k, min1, min2) => {
        min1 = min(_arr,k)
        min2 = min(_arr,k)
        return [min1, min2]
    }
    //select the min of array
    let min = (_arr, k) => {
        let min, minWeight
        let i = 0
        while(_arr[i].parent != -1) {
        	i++
        }
        min = i
        minWeight = _arr[i].weight
        for (; i < k; i++) {
        	if(_arr[i].weight < minWeight && _arr[i].parent == -1) {
        	    minWeight = _arr[i].weight
        	    min = i
        	}
        }
        _arr[min].parent = 1 
        return min
    }
    //构造Huffman树
    let InitalHuffmantree = ((arr, n) => {
        const total = 2*n - 1
        const _arr = []
        _arr.length = total
        for (var i = 0; i < n; i++) {
    	    _arr[i] = {}
    	    _arr[i].parent = -1
    	    _arr[i].lchild = -1
    	    _arr[i].rchild = -1
    	    _arr[i].weight = parseInt(arr[i])
        }
        for (; i < total; i++) {
        	_arr[i] = {}
    	    _arr[i].parent = -1
    	    _arr[i].lchild = -1
    	    _arr[i].rchild = -1
    	    _arr[i].weight = 0
        }
        let min1,min2
        for (var i = n; i < total; i++) {
        	[min1, min2] = select_min(_arr, i, min1, min2);
        	_arr[min1].parent = i
        	_arr[min2].parent = i
        	_arr[i].lchild = min1
        	_arr[i].rchild = min2
        	_arr[i].weight = _arr[min1].weight + _arr[min2].weight
        };
        console.log(_arr)
        //构造Huffman编码
	    let HuffmanCoding = ((_arr, n) => {
	    	for (let i = 0; i < n; i++) {
	    		let father = _arr[i].parent
	    		let current = i
	    		let code = []
	    		while(father != -1) {
	    			if (_arr[father].lchild === current) {
	    				code.unshift('0')
	    			}else {
	    				code.unshift('1')
	    			}
	    			current = father
	    			father = _arr[current].parent
	    		}
	    		_arr[i].hc = code.join("")
	    		console.log(_arr[i].hc)
	    	}
	        
	    })(_arr,n)

    })(arr, n)
    