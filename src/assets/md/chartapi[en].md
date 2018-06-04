>## Get Trading History Chart
#### URL
	https://api.seelescan.io/api/v1/chart/tx
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns a list of daily transaction information sorted by date

#### Example
	//Request
	https://api.seelescan.io/api/v1/chart/tx
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"TotalTxs": 6095, 
				"TotalBlocks": 6095, 
				"HashRate": 1216530.3790393518, 
				"Difficulty": 17244991.75537326, 
				"AvgTime": 14.175553732567678, 
				"Rewards": 121900000000000, 
				"TotalAddresss": 2, 
				"TodayIncrease": 0, 
				"TimeStamp": 1527350400
			}
		], 
		"message": ""
	}

>## Get Block Difficulty Growth Chart
#### URL
	https://api.seelescan.io/api/v1/chart/difficulty
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Return daily block difficulty list by date

#### Example
	//Request
	https://api.seelescan.io/api/v1/chart/difficulty
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"Difficulty": 17244991.75537326, 
				"TimeStamp": 1527350400
			}
		], 
		"message": ""
	}

>## Get Address Growth Chart
#### URL
	https://api.seelescan.io/api/v1/chart/address
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Return daily address growth list sorted by date

#### Example
	//Request
	https://api.seelescan.io/api/v1/chart/address
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"TotalAddresss": 2, 
				"TodayIncrease": 0, 
				"TimeStamp": 1527350400
			}
		], 
		"message": ""
	}

>## Get Blocks and Rewards Chart
#### URL
	https://api.seelescan.io/api/v1/chart/blocks
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns the number of daily blocks and rewards sorted by date

#### Example
	//Request
	https://api.seelescan.io/api/v1/chart/blocks
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"TotalBlocks": 6095, 
				"Rewards": 121900000000000, 
				"TimeStamp": 1527350400
			}
		], 
		"message": ""
	}

>## Get Hash Rate Chart
#### URL
	https://api.seelescan.io/api/v1/chart/hashrate
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Return a list of hash rates sorted by date

#### Example
	//Request
	https://api.seelescan.io/api/v1/chart/hashrate
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"TotalBlocks": 6095, 
				"Rewards": 121900000000000, 
				"TimeStamp": 1527350400
			}
		], 
		"message": ""
	}
>## Get average block time chart
#### URL
	https://api.seelescan.io/api/v1/chart/blocktime
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns the list of average block time sorted by date

#### Example
	//Request
	https://api.seelescan.io/api/v1/chart/blocktime
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"AvgTime": 14.175553732567678, 
				"TimeStamp": 1527350400
			}
		], 
		"message": ""
	}
	
>## Get Top Miners Chart
#### URL
	https://api.seelescan.io/api/v1/chart/miner
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns the list of average out-of-block times sorted by date

#### Example
	//Request
	https://api.seelescan.io/api/v1/chart/miner
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"Rank": [
					{
						"Address": "0x4dd6881d13ab5152127533c5954e4e062eb4bb2dcd93becf4f4e9b1d2d69f1363eea0395e8e76a2716b033d1e3cc8da2bf24811b1e31a86ac8bcacca4c4b29bd", 
						"Mined": 21215, 
						"Percentage": 0.5217658632562715
					}, 
					{
						"Address": "0x23ddfb54a488f906cdb9cbd257eac5663a4c74ba25619bb902651602a4491be4ce437907fcc567b31be6746a014931f4670ac116c0010e5beb28b0dce2c6eaad", 
						"Mined": 19445, 
						"Percentage": 0.4782341367437285
					}
				]
			}
		], 
		"message": ""
	}
