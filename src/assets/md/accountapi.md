
>## 获取账户列表
#### URL
	https://api.seelescan.net/api/v1/accounts

#### 参数 
1. p:要显示的页码,默认值为1
2. ps: 每页显示数量,默认值为25
3. s:分片的id

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回一个指定页码的按照账户余额降序排序的账户列表
	- list: 账户列表
	- pageInfo: 分页详情信息

#### 例子
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

>## 获取账户详细
#### URL
	https://api.seelescan.net/api/v1/account

#### 参数 
1. address: 账户的地址

#### 返回
返回一个指定账户的详细信息

#### 例子
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