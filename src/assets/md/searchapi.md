>## 查询账户，区块或者交易的详细信息
#### URL
	https://api.seelescan.io/api/v1/search

#### 参数 
1. content: 区块的高度，交易的哈希值，账户的地址之一

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回搜索的区块,交易或者账户的详细信息
	- info: 区块,交易,账户的详细信息
	- type: 返回的数据类型:block, transaction, account

#### 例子
查询交易

	//Request
	https://api.seelescan.io/api/v1/search?content=0x4d58d1edcbdb91f9942186b3db4d0214c5d2ab9fff5c79766d7beb46cac7881f
	
	//Return
	{
			"code": 0, 
			"data": {
					"info": {
							"txHash": "0x649b7ab12c0bf721e9a5bda7fa19f1029e3f70ed2d6fd49eafe066149e7cbf98", 
							"block": 4, 
							"age": "15 days ago", 
							"from": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
							"to": "0x1cba7cc4097c34ef9d90c0bf1fa9babd7e2fb26db7b49d7b1eb8f580726e3a99d3aec263fc8de535e74a79138622d320b3765b0a75fabd084985c456c6fe65bb", 
							"value": "10"
					}, 
					"type": "transaction"
			}, 
			"message": ""
	}

查询区块
	
	//Request
	http://106.75.171.117:3003/api/v1/search?content=1000
	
	//Return
	{
			"code": 0, 
			"data": {
					"info": {
							"headHash": "0x0000002485f23e29bbc541e0b2e3be07f41d91b0ccbf2d1faeb9c5aa8aa35328", 
							"preBlockHash": "0x000000b844bc2a667ecac99f88127d8affd40fd6ef7d6a5b989411d381fd0c2a", 
							"height": 1000, 
							"age": "7 days ago", 
							"difficulty": 12570123, 
							"miner": "0x4dd6881d13ab5152127533c5954e4e062eb4bb2dcd93becf4f4e9b1d2d69f1363eea0395e8e76a2716b033d1e3cc8da2bf24811b1e31a86ac8bcacca4c4b29bd", 
							"nonce": "11984700971403517952", 
							"txcount": 1, 
							"maxheight": 44802, 
							"minheight": 0
					}, 
					"type": "block"
			}, 
			"message": ""
	}
	
查询账户
	
	//Request
	http://106.75.171.117:3003/api/v1/search?content=0x4dd6881d13ab5152127533c5954e4e062eb4bb2dcd93becf4f4e9b1d2d69f1363eea0395e8e76a2716b033d1e3cc8da2bf24811b1e31a86ac8bcacca4c4b29bd
	
	//Return
	{
			"code": 0, 
			"data": {
					"info": {
							"address": "0x4dd6881d13ab5152127533c5954e4e062eb4bb2dcd93becf4f4e9b1d2d69f1363eea0395e8e76a2716b033d1e3cc8da2bf24811b1e31a86ac8bcacca4c4b29bd", 
							"balance": 467080000000000, 
							"percentage": 0, 
							"txcount": 23354, 
							"txs": [
									{
											"hash": "0xe078976326b60829e6a2d91de5402cdc0f8440158869c6c9a9fddfe38871bbb7", 
											"block": 44805, 
											"from": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
											"to": "0x4dd6881d13ab5152127533c5954e4e062eb4bb2dcd93becf4f4e9b1d2d69f1363eea0395e8e76a2716b033d1e3cc8da2bf24811b1e31a86ac8bcacca4c4b29bd", 
											"amount": 20000000000, 
											"age": "1 secs ago", 
											"txfee": 0, 
											"inorout": true
									}
							]
					}, 
					"type": "account"
			}, 
			"message": ""
	}