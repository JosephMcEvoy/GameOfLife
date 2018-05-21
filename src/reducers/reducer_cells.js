function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default function() {
	let totalCells = 100;
	var cellsList = [];
	for (var i = 1; i <= totalCells; i++) {
		cellsList.push({id: i, isAlive: getRandomInt(getRandomInt(3)), isOld: 0});
	};
	return cellsList
}