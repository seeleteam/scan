>## Get block list
#### URL
	https://api.seelescan.io/api/v1/blocks

#### Parameter 
1. p:The page number to display, the default value is 1
2. ps: The number of pages displayed, the default value is 25

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns a list of blocks in descending order of block height for a given page number
	- lsit: Block list
	- pageInfo: Paging details information

#### Example
	//Request
	http://api.seelescan.io/api/v1/blocks?p=1&ps=10
	
	//Return
	{
		"code":0,
		"data":{
			"list":[
				{
					"height":5957,
					"age":"1 hours ago",
					"txn":1,
					"miner":"0x4dd6881d13ab5152127533c5954e4e062eb4bb2dcd93becf4f4e9b1d2d69f1363eea0395e8e76a2716b033d1e3cc8da2bf24811b1e31a86ac8bcacca4c4b29bd"
				},
				{
					"height":5958,
					"age":"1 hours ago",
					"txn":1,
					"miner":"0x4dd6881d13ab5152127533c5954e4e062eb4bb2dcd93becf4f4e9b1d2d69f1363eea0395e8e76a2716b033d1e3cc8da2bf24811b1e31a86ac8bcacca4c4b29bd"
				}
			],
			"pageInfo":{
				"begin":5956,
				"curPage":0,
				"end":5976,
				"totalCount":5976
			}
		},
		"message":""
	}

>## Get block details
#### URL
	http://api.seelescan.io/api/v1/block
	
#### Parameter 
1. height:Block height to be queried
2. hash: Hash value of the block to be queried

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Return details of the block to be queried

#### Example
	//Request
		//By Height
		http://api.seelescan.io/api/v1/block?height=5567
		//By Hash
		http://api.seelescan.io/api/v1/block?hash=0x00000057df238881381bb218a5d5f6b1589d969e6c6fb0aa50129dd85786e69d
	
	//Return
	{
		"code": 0, 
		"data": {
			"headHash": "0x000000a830505c2df9ff542d2fe70f72efeb8ced3927460b44c64321159a2ec0", 
			"preBlockHash": "0x0000019d36b3c399a297c68540ff1a0bca75321c3d115ec7bb454ae4e7ea1195", 
			"height": 4, 
			"age": "14 days ago", 
			"difficulty": 10000000, 
			"miner": "0x1cba7cc4097c34ef9d90c0bf1fa9babd7e2fb26db7b49d7b1eb8f580726e3a99d3aec263fc8de535e74a79138622d320b3765b0a75fabd084985c456c6fe65bb", 
			"nonce": "13260572831091132416", 
			"txcount": 1
		}, 
		"message": ""
	}
