>## Get transaction list
    
	https://api.seelescan.io/api/v1/txs?p=1&ps=10&block=5567
	
#### Parameter 
1. p:The page number to display, the default value is 1
2. ps: The number of pages displayed, the default value is 25
3. block:Block height

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns a list of transactions in descending order of transaction number with a specified page number
	- lsit: Transaction list
	- pageInfo: Paging details information

#### Example
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

>## Get transaction details
    
	https://api.seelescan.io/api/v1/tx
	
#### Parameter 
1. txhash: The hash value of the transaction

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns the details of a specified transaction

#### Example
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
