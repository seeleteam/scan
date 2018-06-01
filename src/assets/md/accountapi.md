
>## 获取账户列表
#### URL
	https://api.seelescan.io/api/v1/accounts

#### 参数 
1. p:要显示的页码,默认值为1
2. ps: 每页显示数量,默认值为25

#### 返回
1. code: 错误码,0为正常,非0为错误
2. message: 错误提示,正确执行会空
3. data: 返回一个指定页码的按照账户余额降序排序的账户列表
	- lsit: 账户列表
	- pageInfo: 分页详情信息

#### 例子
	//Request
	http://api.seelescan.io/api/v1/blocks?p=1&ps=10
	
	//Return
	{
			"code": 0, 
			"data": {
					"list": [
							{
									"rank": 1, 
									"address": "0x4dd6881d13ab5152127533c5954e4e062eb4bb2dcd93becf4f4e9b1d2d69f1363eea0395e8e76a2716b033d1e3cc8da2bf24811b1e31a86ac8bcacca4c4b29bd", 
									"balance": 318600, 
									"percentage": 0, 
									"txcount": 1593
							}, 
							{
									"rank": 2, 
									"address": "0x1cba7cc4097c34ef9d90c0bf1fa9babd7e2fb26db7b49d7b1eb8f580726e3a99d3aec263fc8de535e74a79138622d320b3765b0a75fabd084985c456c6fe65bb", 
									"balance": 54910, 
									"percentage": 0, 
									"txcount": 5491
							}
					], 
					"pageInfo": {
							"begin": 0, 
							"curPage": 1, 
							"end": 2, 
							"totalCount": 2
					}
			}, 
			"message": ""
	}

>## 获取账户详细
#### URL
	https://api.seelescan.io/api/v1/account

#### 参数 
1. address: 账户的地址

#### 返回
返回一个指定账户的详细信息

#### 例子
	//Request
	https://api.seelescan.io/api/v1/account?address=0x4dd6881d13ab5152127533c5954e4e062eb4bb2dcd93becf4f4e9b1d2d69f1363eea0395e8e76a2716b033d1e3cc8da2bf24811b1e31a86ac8bcacca4c4b29bd
	
	//Return
	{
        "code": 0, 
        "data": {
                "address": "0x4dd6881d13ab5152127533c5954e4e062eb4bb2dcd93becf4f4e9b1d2d69f1363eea0395e8e76a2716b033d1e3cc8da2bf24811b1e31a86ac8bcacca4c4b29bd", 
                "balance": 318600, 
                "percentage": 0, 
                "txcount": 1593, 
                "txs": [
                        {
                                "hash": "0x199de9e63d8f986cb26c52ebc553cd2f020d08e15ac842ed7669310a036d5eca", 
                                "block": 7084, 
                                "from": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
                                "to": "0x4dd6881d13ab5152127533c5954e4e062eb4bb2dcd93becf4f4e9b1d2d69f1363eea0395e8e76a2716b033d1e3cc8da2bf24811b1e31a86ac8bcacca4c4b29bd", 
                                "amount": 200, 
                                "age": "1 secs ago", 
                                "txfee": 0, 
                                "inorout": true
                        }
                ]
        }, 
        "message": ""
	}