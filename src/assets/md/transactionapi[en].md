>## Get transaction list
    
	https://api.seelescan.net/api/v1/txs
	
#### Parameter 
1. p:The page number to display, the default value is 1
2. ps: The number of pages displayed, the default value is 25
3. block:Block height
4. s: The shardNumber

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns a list of transactions in descending order of transaction number with a specified page number
	- list: Transaction list
	- pageInfo: Paging details information

#### Example
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

>## Get transaction details
    
	https://api.seelescan.net/api/v1/tx
	
#### Parameter 
1. txhash: The hash value of the transaction

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns the details of a specified transaction

#### Example
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

>## Get pending transaction list
    
	https://api.seelescan.net/api/v1/pendingtxs
	
#### Parameter 
1. p:The page number to display, the default value is 1
2. ps: The number of pages displayed, the default value is 25
3. s: The shardNumber

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns a list of transactions in descending order of transaction number with a specified page number
	- list: Transaction list
	- pageInfo: Paging details information

#### Example
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