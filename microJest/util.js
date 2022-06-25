const isSameObject = (target, comparisonTarget) => {
	return (Object.entries(target).toString() === Object.entries(comparisonTarget).toString());
}


module.exports = { isSameObject };
