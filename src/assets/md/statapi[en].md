>## Get the total number of transactions
#### URL
	http://api.seelescan.net/api/v1/txcount
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: total number of transactions

#### Example
	//Request
	http://api.seelescan.net/api/v1/txcount
	
	//Return
	{
			"code": 0, 
			"data": 44842, 
			"message": ""
	}

>## Get the total number of block
#### URL
	http://api.seelescan.net/api/v1/blockcount
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: total number of blocks

#### Example
	//Request
	http://api.seelescan.net/api/v1/blockcount
	
	//Return
	{
			"code": 0, 
			"data": 44842, 
			"message": ""
	}
	
>## Get the total number of accounts
#### URL
	http://api.seelescan.net/api/v1/accountcount
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: total number of account

#### Example
	//Request
	http://api.seelescan.net/api/v1/accountcount
	
	//Return
	{
			"code": 0, 
			"data": 44842, 
			"message": ""
	}

>## Get the total number of contracts
#### URL
	http://api.seelescan.net/api/v1/contractcount
	
#### Return
1. code: Error code, 0 is normal, non-zero is wrong
2. message: Errors, correct implementation of the empty
3. data: total number of contracts

#### Example
	//Request
	http://api.seelescan.net/api/v1/contractcount
	
	//Return
	{
			"code": 0, 
			"data": 44842, 
			"message": ""
	}