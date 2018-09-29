>## Get a list of accounts
#### URL
	https://api.seelescan.net/api/v1/accounts

#### Parameter 
1. p:The page number to display, the default value is 1
2. ps: The number of pages displayed, the default value is 25
3. s: The shardNumber 

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns a list of accounts of the specified page number in descending order by account balance
	- list: List of accounts
	- pageInfo: Paging details information

#### Example
	//Request
	https://api.seelescan.net/api/v1/accounts?p=1&ps=10&s=1
	
	//Return
	{
		"code": 0, 
		"data": {
			"list": [
				{
					"shardnumber": 1, 
					"rank": 1, 
					"address": "0x0b252fa6de61be780facf36815e4d4b763352f81", 
					"balance": 194400000000000, 
					"percentage": 0.5045157271877919, 
					"txcount": 21115
				}, 
				{
					"shardnumber": 1, 
					"rank": 2, 
					"address": "0x4c10f2cd2159bb432094e3be7e17904c2b4aeb21", 
					"balance": 190920000000000, 
					"percentage": 0.495484272812208, 
					"txcount": 21120
				}
			], 
			"pageInfo": {
				"begin": 0, 
				"curPage": 1, 
				"end": 2, 
				"totalBalance": 385320000000000, 
				"totalCount": 2
			}
		}, 
		"message": ""
	}

>## Get account details
#### URL
	https://api.seelescan.net/api/v1/account

#### Parameter 
1. address: Account address

#### Return
Returns details of a specified account

#### Example
	//Request
	https://api.seelescan.net/api/v1/account?address=0x0b252fa6de61be780facf36815e4d4b763352f81
	
	//Return
	{
		"code": 0, 
		"data": {
			"shardnumber": 1, 
			"address": "0x0b252fa6de61be780facf36815e4d4b763352f81", 
			"balance": 196440000000000, 
			"percentage": 0.5048054684689315, 
			"txcount": 21338, 
			"txs": [
				{
					"shardnumber": 1, 
					"txtype": 0, 
					"hash": "0x134b22d2397191046c76431b4839ceb4c5e6b060443e7cfaf81273191bdedb6a", 
					"block": "19456", 
					"from": "0x0000000000000000000000000000000000000000", 
					"to": "0x0b252fa6de61be780facf36815e4d4b763352f81", 
					"amount": 20000000000, 
					"age": "1 mins ago", 
					"fee": 0, 
					"inorout": true, 
					"pending": false
				}, 
				{
					"shardnumber": 1, 
					"txtype": 0, 
					"hash": "0xbce7eaa4de7cd19d2fe821d9fbf89518f008a70fc1afe2d728494f0d64ffa1c2", 
					"block": "19427", 
					"from": "0x0000000000000000000000000000000000000000", 
					"to": "0x0b252fa6de61be780facf36815e4d4b763352f81", 
					"amount": 20000000000, 
					"age": "7 mins ago", 
					"fee": 0, 
					"inorout": true, 
					"pending": false
				}
			]
		}, 
		"message": ""
	}