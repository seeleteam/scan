>## Get block list
#### URL
	https://api.seelescan.net/api/v1/blocks

#### Parameter 
1. p:The page number to display, the default value is 1
2. ps: The number of pages displayed, the default value is 25
3. s: The shardNumber

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns a list of blocks in descending order of block height for a given page number
	- list: Block list
	- pageInfo: Paging details information

#### Example
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

>## Get block details
#### URL
	https://api.seelescan.net/api/v1/block
	
#### Parameter 
1. height:Block height to be queried
2. s: The shardNumber
3. hash: Hash value of the block to be queried

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Return details of the block to be queried

#### Example
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

