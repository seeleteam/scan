>## 获取交易列表
#### URL
	https://api.seelescan.io/api/v1/txs?p=1&ps=10&block=5567
	
#### 参数 
1. p:要显示的页码 
2. ps: 每页显示数量
3. block:区块的高度

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回一个指定页码的按照交易序号降序排序的交易列表
	- lsit: 交易列表
	- pageInfo: 分页详情信息

#### 例子
	//Request
	//By Default
	https://api.seelescan.io/api/v1/txs?p=1&ps=10
	//By Block
	https://api.seelescan.io/api/v1/txs?p=1&ps=10&block=5567
	
	//Return
	{
		"code": 0, 
		"data": {
			"list": [
				{
					"Hash": "0x26d8ecfb5b75e3f6da5750b072ac6b8bd969d1ce453206f7f33062cad89397eb", 
					"From": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
					"To": "0x1cba7cc4097c34ef9d90c0bf1fa9babd7e2fb26db7b49d7b1eb8f580726e3a99d3aec263fc8de535e74a79138622d320b3765b0a75fabd084985c456c6fe65bb", 
					"Amount": "10", 
					"Timestamp": "1525425890093552640"
				}
			], 
			"pageInfo": {
				"begin": 0, 
				"curPage": 0, 
				"end": 1, 
				"totalCount": 1
			}
		}, 
		"message": ""
	}

>## 获取交易详细
#### URL
	https://api.seelescan.io/api/v1/tx
	
#### 参数 
1. txhash: 交易的哈希值

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回一个指定交易的详细信息

#### 例子
	//Request
	https://api.seelescan.io/api/v1/tx?txhash=0x4d58d1edcbdb91f9942186b3db4d0214c5d2ab9fff5c79766d7beb46cac7881f
	
	//Return
	{
		"code": 0, 
		"data": {
			"txHash": "0x649b7ab12c0bf721e9a5bda7fa19f1029e3f70ed2d6fd49eafe066149e7cbf98", 
			"block": 4, 
			"age": "14 days ago", 
			"from": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
			"to": "0x1cba7cc4097c34ef9d90c0bf1fa9babd7e2fb26db7b49d7b1eb8f580726e3a99d3aec263fc8de535e74a79138622d320b3765b0a75fabd084985c456c6fe65bb", 
			"value": "10"
		}, 
		"message": ""
	}
