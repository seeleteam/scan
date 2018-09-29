>## 查询账户，区块或者交易的详细信息
#### URL
	https://api.seelescan.net/api/v1/search

#### 参数 
1. content: 区块的哈希值，交易的哈希值，账户的地址，合约的地址之一

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回搜索的区块,交易或者账户的详细信息
	- info: 区块,交易,账户的详细信息
	- type: 返回的数据类型:block, transaction, account

#### 例子
查询交易

	//Request
	https://api.seelescan.net/api/v1/search?content=0x4d58d1edcbdb91f9942186b3db4d0214c5d2ab9fff5c79766d7beb46cac7881f
	
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

查询区块
	
	//Request
	https://api.seelescan.net/api/v1/search?content=0x0000004e4d103d2447aa02429deb9f36a81dae66a10f5cc0a54717e3b0de7367
	
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
	
查询账户
	
	//Request
	https://api.seelescan.net/api/v1/search?content=0x0ea2a45ab5a909c309439b0e004c61b7b2a3e831
	
	//Return
	{
		"code": 0, 
		"data": {
			"info": {
				"accType": 0, 
				"shardnumber": 2, 
				"address": "0x0ea2a45ab5a909c309439b0e004c61b7b2a3e831", 
				"balance": 198300000000000, 
				"percentage": 0.48982314000592825, 
				"txcount": 22056, 
				"txs": [
					{
						"shardnumber": 2, 
						"txtype": 0, 
						"hash": "0x4e2170ad3c9d7a4d468e292be95f1f0ac36d7aadad7f0cd2aab90d20307b484f", 
						"block": "20241", 
						"from": "0x0000000000000000000000000000000000000000", 
						"to": "0x0ea2a45ab5a909c309439b0e004c61b7b2a3e831", 
						"amount": 20000000000, 
						"age": "1 mins ago", 
						"fee": 0, 
						"inorout": true, 
						"pending": false
					}
				]
			}, 
			"type": "account"
		}, 
		"message": ""
	}