>## 获取最新区块高度
#### URL
	https://api.seelescan.io/api/v1/lastblock

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 最新区块的高度

#### 例子
	//Request
	https://api.seelescan.io/api/v1/lastblock
	
	//Return
	{
			"code": 0, 
			"data": 44825, 
			"message": ""
	}
	
>## 获取最新区块生成时间
#### URL
	https://api.seelescan.io/api/v1/bestblock
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 最新区块的生成时间

#### 例子
	//Request
	https://api.seelescan.io/api/v1/bestblock
	
	//Return
	{
        "code": 0, 
        "data": "31 secs ago", 
        "message": ""
	}
	
>## 获取平均区块生成时间
#### URL
	https://api.seelescan.io/api/v1/avgblocktime
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 平均区块的生成时间,单位是秒

#### 例子
	//Request
	https://api.seelescan.io/api/v1/avgblocktime
	
	//Return
	{
			"code": 0, 
			"data": 14, 
			"message": ""
	}
	

>## 获取交易总数量
#### URL
	https://api.seelescan.io/api/v1/txcount
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 平均区块的生成时间,单位是秒

#### 例子
	//Request
	https://api.seelescan.io/api/v1/txcount
	
	//Return
	{
			"code": 0, 
			"data": 44842, 
			"message": ""
	}
	
>## 获取平均区块难度
#### URL
	https://api.seelescan.io/api/v1/difficulty
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 区块平均难度

#### 例子
	//Request
	https://api.seelescan.io/api/v1/txcount
	
	//Return
	{
			"code": 0, 
			"data": 16628715, 
			"message": ""
	}
	
>## 获取平均哈希速率
#### URL
	https://api.seelescan.io/api/v1/hashrate
	
#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 平均哈希速率

#### 例子
	//Request
	https://api.seelescan.io/api/v1/txcount
	
	//Return
	{
			"code": 0, 
			"data": 1217636.8141435185, 
			"message": ""
	}
	