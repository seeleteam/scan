>## Get Trading History Chart
#### URL
	https://api.seelescan.net/api/v1/chart/tx
	
#### Parameter
1. s: The shardNumber

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns a list of daily transaction information sorted by date

#### Example
	//Request
	https://api.seelescan.net/api/v1/chart/tx?s=1
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"TotalTxs": 353, 
				"TotalBlocks": 353, 
				"HashRate": 24336.20261574074, 
				"Difficulty": 5956509.648725213, 
				"AvgTime": 244.75920679886684, 
				"Rewards": 7060000000000, 
				"TotalAddresss": 2, 
				"TodayIncrease": 2, 
				"TimeStamp": 1528300800
			}, 
			{
				"TotalTxs": 5931, 
				"TotalBlocks": 5931, 
				"HashRate": 57816.37788194444, 
				"Difficulty": 842241.6201315124, 
				"AvgTime": 14.56752655538695, 
				"Rewards": 118620000000000, 
				"TotalAddresss": 0, 
				"TodayIncrease": 0, 
				"TimeStamp": 1528560001
			}
		], 
		"message": ""
	}

>## Get Block Difficulty Growth Chart
#### URL
	https://api.seelescan.net/api/v1/chart/difficulty
	
#### Parameter
1. s: The shardNumber

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Return daily block difficulty list by date

#### Example
	//Request
	https://api.seelescan.net/api/v1/chart/difficulty?s=1
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"Difficulty": 5956509.648725213, 
				"TimeStamp": 1528300800, 
				"ShardNumber": 1
			}, 
			{
				"Difficulty": 1493377.806868972, 
				"TimeStamp": 1528387201, 
				"ShardNumber": 1
			}, 
			{
				"Difficulty": 958906.9916434541, 
				"TimeStamp": 1528473601, 
				"ShardNumber": 1
			}, 
			{
				"Difficulty": 842241.6201315124, 
				"TimeStamp": 1528560001, 
				"ShardNumber": 1
			}
		], 
		"message": ""
	}

>## Get Address Growth Chart
#### URL
	https://api.seelescan.net/api/v1/chart/address
		
#### Parameter
1. s: The shardNumber

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Return daily address growth list sorted by date

#### Example
	//Request
	https://api.seelescan.net/api/v1/chart/address?s=1
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"TotalAddresss": 4, 
				"TodayIncrease": 4, 
				"TimeStamp": 1528300800, 
				"ShardNumber": 1
			}, 
			{
				"TotalAddresss": 0, 
				"TodayIncrease": 0, 
				"TimeStamp": 1528560001, 
				"ShardNumber": 1
			}
		], 
		"message": ""
	}

>## Get Blocks and Rewards Chart
#### URL
	https://api.seelescan.net/api/v1/chart/blocks
	
#### Parameter
1. s: The shardNumber

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns the number of daily blocks and rewards sorted by date

#### Example
	//Request
	https://api.seelescan.net/api/v1/chart/blocks?s=1
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"TotalBlocks": 353, 
				"Rewards": 7060000000000, 
				"TimeStamp": 1528300800, 
				"ShardNumber": 1
			}
		], 
		"message": ""
	}

>## Get Hash Rate Chart
#### URL
	https://api.seelescan.net/api/v1/chart/hashrate
	
#### Parameter
1. s: The shardNumber

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Return a list of hash rates sorted by date

#### Example
	//Request
	https://api.seelescan.net/api/v1/chart/hashrate?s=1
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"HashRate": 24336.20261574074, 
				"TimeStamp": 1528300800, 
				"ShardNumber": 1
			}
		], 
		"message": ""
	}

>## Get average block time chart
#### URL
	https://api.seelescan.net/api/v1/chart/blocktime
	
#### Parameter
1. s: The shardNumber

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns the list of average block time sorted by date

#### Example
	//Request
	https://api.seelescan.net/api/v1/chart/blocktime&s=1
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"AvgTime": 244.75920679886684, 
				"TimeStamp": 1528300800, 
				"ShardNumber": 1
			}
		], 
		"message": ""
	}
	
>## Get Top Miners Chart
#### URL
	https://api.seelescan.net/api/v1/chart/miner
	
#### Parameter
1. s: The shardNumber

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns the list of average out-of-block times sorted by date

#### Example
	//Request
	https://api.seelescan.net/api/v1/chart/miner?s=1
	
	//Return
	{
		"code": 0, 
		"data": [
			{
				"Rank": [
					{
						"Address": "0x0b252fa6de61be780facf36815e4d4b763352f81", 
						"Mined": 8171, 
						"Percentage": 0.5019350082928927
					}, 
					{
						"Address": "0x4c10f2cd2159bb432094e3be7e17904c2b4aeb21", 
						"Mined": 8108, 
						"Percentage": 0.49806499170710733
					}
				], 
				"ShardNumber": 1
			}
		], 
		"message": ""
	}

>## Node Count Chart
#### URL
	https://api.seelescan.net/api/v1/chart/node
	
#### Parameter
1. s: The shardNumber

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Returns the list of node count by shardnumber

#### Example
	//Request
	https://api.seelescan.net/api/v1/chart/node&s=1
	
	//Return
	{
		"code": 0, 
		"data": {
			"1": 15, 
			"2": 0, 
			"3": 0, 
			"4": 0, 
			"5": 0, 
			"6": 0, 
			"7": 0, 
			"8": 0, 
			"9": 0, 
			"10": 0, 
			"11": 0, 
			"12": 0, 
			"13": 0, 
			"14": 0, 
			"15": 0, 
			"16": 0, 
			"17": 0, 
			"18": 0, 
			"19": 0, 
			"20": 0
		}, 
		"message": ""
	}