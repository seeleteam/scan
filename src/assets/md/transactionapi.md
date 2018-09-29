>## 获取交易列表
#### URL
	https://api.seelescan.net/api/v1/txs
	
#### 参数 
1. p:要显示的页码 
2. ps: 每页显示数量
3. block:区块的高度
4. s:区块的分片id

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回一个指定页码的按照交易序号降序排序的交易列表
	- list: 交易列表
	- pageInfo: 分页详情信息

#### 例子
	//Request
	//By Default
	https://api.seelescan.net/api/v1/txs?p=1&ps=10&s=1
	//By Block
	https://api.seelescan.net/api/v1/txs?p=1&ps=10&block=5567&s=1
	
	//Return
	{
		"code": 0, 
		"data": {
			"list": [
				{
					"shardnumber": 1, 
					"txHash": "0x6023d99cbc8c8f5811e1cd6e1f324c1810bece91e61a83a21913ebb41535826c", 
					"block": 19236, 
					"age": "9 secs ago", 
					"from": "0x0000000000000000000000000000000000000000", 
					"to": "0x0b252fa6de61be780facf36815e4d4b763352f81"
				}, 
				{
					"shardnumber": 1, 
					"txHash": "0xe0d314fae79f5b59c3bc991b29b2a123eb48672f4359690cb1fce23d492b2aef", 
					"block": 19227, 
					"age": "3 mins ago", 
					"from": "0x0000000000000000000000000000000000000000", 
					"to": "0x4c10f2cd2159bb432094e3be7e17904c2b4aeb21"
				}
			], 
			"pageInfo": {
				"begin": 21080, 
				"curPage": 1, 
				"end": 21090, 
				"totalCount": 21090
			}
		}, 
		"message": ""
	}

>## 获取交易详细
#### URL
	https://api.seelescan.net/api/v1/tx
	
#### 参数 
1. txhash: 交易的哈希值

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回一个指定交易的详细信息

#### 例子
	//Request
	https://api.seelescan.net/api/v1/tx?txhash=0x4d58d1edcbdb91f9942186b3db4d0214c5d2ab9fff5c79766d7beb46cac7881f
	
	//Return
	{
		"code": 0, 
		"data": {
			"info": {
				"txtype": 0, 
				"shardnumber": 1, 
				"txHash": "0x78d89b33d5a04451ba1bb73528704105d13f9662edfc54ac9ecd3620a11a3e3d", 
				"block": 20300, 
				"age": "17 secs ago", 
				"from": "0x0000000000000000000000000000000000000000", 
				"to": "0x0b252fa6de61be780facf36815e4d4b763352f81", 
				"value": 20000000000, 
				"pending": false, 
				"fee": 0, 
				"accountNonce": "0", 
				"payload": ""
			}, 
			"type": "transaction"
		}, 
		"message": ""
	}

>## 获取交易队列列表
#### URL
	https://api.seelescan.net/api/v1/pendingtxs
	
#### 参数 
1. p:要显示的页码 
2. ps: 每页显示数量
3. s:区块的分片id

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回一个指定页码的按照交易序号降序排序的交易列表
	- list: 交易列表
	- pageInfo: 分页详情信息

#### 例子
	//Request
	https://api.seelescan.net/api/v1/pendingtxs?p=1&ps=10&s=1
	
	//Return
	{
		"code": 0, 
		"data": {
			"list": [
				{
					"txtype": 0, 
					"shardnumber": 1, 
					"txHash": "0x5d93f8fd642b296e9ad6e82eabbd6e3c77d5878e0abf8626add82a3d1709139b", 
					"block": 0, 
					"age": "16 secs ago", 
					"from": "0x2a87b6504cd00af95a83b9887112016a2a991cf1", 
					"to": "0x4fb7c8b0287378f0cf8b5a9262bf3ef7e101f8d1", 
					"value": 8, 
					"pending": true, 
					"fee": 62
				}
			], 
			"pageInfo": {
				"begin": 0, 
				"curPage": 1, 
				"end": 8, 
				"totalCount": 8
			}
		}, 
		"message": ""
	}
