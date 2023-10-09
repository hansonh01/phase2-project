export const formatDate = (dateString) => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	const formatedDob = `${year}-${month}-${day}`;
	return formatedDob;
};

export const formatPhoneNumber = (phoneNumber) => {
	const numericPhoneNumber = phoneNumber.replace(/\D/g, "");

	if (numericPhoneNumber.length === 10) {
		return numericPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
	} else if (numericPhoneNumber.length < 10) {
		const formattedNumber =
			"0".repeat(10 - numericPhoneNumber.length) + numericPhoneNumber;
		return formattedNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
	} else {
		const truncatedNumber = numericPhoneNumber.substring(0, 10);
		return truncatedNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
	}
};

export const formatEnglishNameOnly = (name) => {
	const englishRegex = /^[A-Za-z\s']+$/;
	if (englishRegex.test(name) === true) {
		return name;
	} else {
		return "unknown";
	}
};

export const calculateAge = (birthday) => {
	const dob = new Date(birthday);
	const currentDate = new Date();

	const yearsDiff = currentDate.getFullYear() - dob.getFullYear();
	const currentMonth = currentDate.getMonth();
	const birthMonth = dob.getMonth();

	if (
		currentMonth < birthMonth ||
		(currentMonth === birthMonth && currentDate.getDate() < dob.getDate())
	) {
		return yearsDiff - 1; // Subtract 1 if the birthdate hasn't occurred this year yet
	}

	return yearsDiff;
};
