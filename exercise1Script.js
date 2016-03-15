var isPrime = function isPrime(x) {
	for (i= 2; i < x; i++)
	{
		if(!(x % i))
		{
			return false;
		}
	}
	return true;
}


var num = 4;
console.log(num)
console.log(isPrime(num));