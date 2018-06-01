>## 获取交易历史图表
#### URL
	https://api.seelescan.io/api/v1/chart/tx
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的每天交易信息列表

#### 例子
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

>## 获取区块难度增长图表
#### URL
	https://api.seelescan.io/api/v1/chart/difficulty
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的每天区块难度增长列表

#### 例子
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

>## 获取地址增长图表
#### URL
	https://api.seelescan.io/api/v1/chart/address
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的每天地址增长列表

#### 例子
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

>## 获取区块数量和奖励图表
#### URL
	https://api.seelescan.io/api/v1/chart/blocks
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的每天区块数量和奖励列表

#### 例子
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

>## 获取哈希速率图表
#### URL
	https://api.seelescan.io/api/v1/chart/hashrate
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的哈希速率列表

#### 例子
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
>## 获取区块产生时间图表
#### URL
	https://api.seelescan.io/api/v1/chart/blocktime
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的平均出块时间列表

#### 例子
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
	
>## 获取挖矿排行图表
#### URL
	https://api.seelescan.io/api/v1/chart/miner
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回按日期排序的平均出块时间列表

#### 例子
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
