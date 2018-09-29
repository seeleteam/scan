>## 获取交易历史图表
#### URL
	https://api.seelescan.net/api/v1/chart/tx

#### 参数
1. s: 分片的id

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的每天交易信息列表

#### 例子
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

>## 获取区块难度增长图表
#### URL
	https://api.seelescan.net/api/v1/chart/difficulty
	
#### 参数
1. s: 分片的id

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的每天区块难度增长列表

#### 例子
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

>## 获取地址增长图表
#### URL
	https://api.seelescan.net/api/v1/chart/address

#### 参数
1. s: 分片的id

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的每天地址增长列表

#### 例子
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

>## 获取区块数量和奖励图表
#### URL
	https://api.seelescan.net/api/v1/chart/blocks

#### 参数
1. s: 分片的id

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的每天区块数量和奖励列表

#### 例子
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

>## 获取哈希速率图表
#### URL
	https://api.seelescan.net/api/v1/chart/hashrate
	
#### 参数 
1. s: 分片的id
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的哈希速率列表

#### 例子
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

>## 获取区块产生时间图表
#### URL
	https://api.seelescan.net/api/v1/chart/blocktime
	
#### 参数 
1. s: 分片的id

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的平均出块时间列表

#### 例子
	//Request
	https://api.seelescan.net/api/v1/chart/blocktime?s=1
	
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
	
>## 获取挖矿排行图表
#### URL
	https://api.seelescan.net/api/v1/chart/miner
	
#### 参数 
1. s: 分片的id

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的平均出块时间列表

#### 例子
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

	
>## 获取分片节点个数图表
#### URL
	https://api.seelescan.net/api/v1/chart/node
	
#### 参数 
1. s: 分片的id

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回每个分片的节点个数表

#### 例子
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

