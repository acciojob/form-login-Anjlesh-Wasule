function getFormvalue() {
    //Write your code here
	const fName = document.querySelector("input[name='fname']");
	const lName = document.querySelector("input[name='lname']");

	alert(`${fName.value} ${lName.value}`);
}
