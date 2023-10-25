const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here

	if(sampleObject.key=="#FF0000"||sampleObject.key=="#00FF00"||sampleObject.key=="#FFFFFF")
		return true;
	return false;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
