>## 获取区块列表
#### URL
	https://api.seelescan.net/api/v1/blocks

#### 参数 
1. p:要显示的页码,默认值为1
2. ps: 每页显示数量,默认值为25
3. s:分片id

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回一个指定页码的按照区块高度降序排序的区块列表
	- list: 区块列表
	- pageInfo: 分页详情信息

#### 例子
	//Request
	https://api.seelescan.net/api/v1/blocks?p=1&ps=10&s=1
	
	//Return
	{
		"code": 0, 
		"data": {
			"list": [
				{
					"shardnumber": 2, 
					"height": 2, 
					"age": "15 mins ago", 
					"txn": 1, 
					"miner": "0x4c10f2cd2159bb432094e3be7e17904c2b4aeb21"
				}, 
				{
					"shardnumber": 2, 
					"height": 1, 
					"age": "15 mins ago", 
					"txn": 1, 
					"miner": "0x4c10f2cd2159bb432094e3be7e17904c2b4aeb21"
				}, 
				{
					"shardnumber": 2, 
					"height": 0, 
					"age": "48 years ago", 
					"txn": 0, 
					"miner": "0x0000000000000000000000000000000000000000"
				}
			], 
			"pageInfo": {
				"begin": 0, 
				"curPage": 1, 
				"end": 3, 
				"totalCount": 3
			}
		}, 
		"message": ""
	}

>## 获取区块详细信息
#### URL
	https://api.seelescan.net/api/v1/block
	
#### 参数 
1. height:待查询的区块高度
2. s:查询区块的分片id
2. hash: 待查询的区块的Hash值

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回要查询的区块的详细信息

#### 例子
	//Request
		//By Height
		https://api.seelescan.net/api/v1/block?height=2?s=1
		//By Hash
		https://api.seelescan.net/api/v1/block?hash=0x00000057df238881381bb218a5d5f6b1589d969e6c6fb0aa50129dd85786e69d
	
	//Return
	{
		"code": 0, 
		"data": {
			"shardnumber": 1, 
			"headHash": "0x0000004e4d103d2447aa02429deb9f36a81dae66a10f5cc0a54717e3b0de7367", 
			"preBlockHash": "0x00000173380e849321d71509bd7c7d2999835c1cfa24ed8eb3048550a186cd24", 
			"height": 2, 
			"age": "3 days ago", 
			"difficulty": 10004882, 
			"miner": "0x4c10f2cd2159bb432094e3be7e17904c2b4aeb21", 
			"nonce": "3045711209742202368", 
			"txcount": 1, 
			"maxheight": 19211, 
			"minheight": 0
		}, 
		"message": ""
	}
