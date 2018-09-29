>## Get the total number of transactions
#### URL
	https://api.seelescan.net/api/v1/txcount
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: total number of transactions

#### Example
	//Request
	https://api.seelescan.net/api/v1/txcount
	
	//Return
	{
			"code": 0, 
			"data": 44842, 
			"message": ""
	}

>## Get the total number of block
#### URL
	https://api.seelescan.net/api/v1/blockcount
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: total number of blocks

#### Example
	//Request
	https://api.seelescan.net/api/v1/blockcount
	
	//Return
	{
			"code": 0, 
			"data": 44842, 
			"message": ""
	}
	
>## Get the total number of accounts
#### URL
	https://api.seelescan.net/api/v1/accountcount
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: total number of account

#### Example
	//Request
	https://api.seelescan.net/api/v1/accountcount
	
	//Return
	{
			"code": 0, 
			"data": 44842, 
			"message": ""
	}

>## Get the total number of contracts
#### URL
	https://api.seelescan.net/api/v1/contractcount
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: total number of contracts

#### Example
	//Request
	https://api.seelescan.net/api/v1/contractcount
	
	//Return
	{
			"code": 0, 
			"data": 44842, 
			"message": ""
	}