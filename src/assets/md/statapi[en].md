>## Get the latest block height
#### URL
	https://api.seelescan.io/api/v1/lastblock

#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Latest block height

#### Example
	//Request
	https://api.seelescan.io/api/v1/lastblock
	
	//Return
	{
			"code": 0, 
			"data": 44825, 
			"message": ""
	}
	
>## Get the latest block generation time
#### URL
	https://api.seelescan.io/api/v1/bestblock
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Latest block generation time

#### Example
	//Request
	https://api.seelescan.io/api/v1/bestblock
	
	//Return
	{
        "code": 0, 
        "data": "31 secs ago", 
        "message": ""
	}
	
>## Get average block generation time
#### URL
	https://api.seelescan.io/api/v1/avgblocktime
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Average block generation time, in seconds

#### Example
	//Request
	https://api.seelescan.io/api/v1/avgblocktime
	
	//Return
	{
			"code": 0, 
			"data": 14, 
			"message": ""
	}
	

>## Get the total number of transactions
#### URL
	https://api.seelescan.io/api/v1/txcount
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Average block generation time, in seconds

#### Example
	//Request
	https://api.seelescan.io/api/v1/txcount
	
	//Return
	{
			"code": 0, 
			"data": 44842, 
			"message": ""
	}
	
>## Get average block difficulty
#### URL
	https://api.seelescan.io/api/v1/difficulty
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Block average difficulty

#### Example
	//Request
	https://api.seelescan.io/api/v1/txcount
	
	//Return
	{
			"code": 0, 
			"data": 16628715, 
			"message": ""
	}
	
>## Get average hash rate
#### URL
	https://api.seelescan.io/api/v1/hashrate
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: Average hash rate

#### Example
	//Request
	https://api.seelescan.io/api/v1/txcount
	
	//Return
	{
			"code": 0, 
			"data": 1217636.8141435185, 
			"message": ""
	}
	