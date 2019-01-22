var JokesData = [{
	id: 1,
	punchLine: "It's hard to explain puns to kleptomaniacs because they always take things litterally"
}, {
	id: 2,
	joke: "Why did the chicken cross the road?",
	punchLine: "To get to the other side"
}, {
	id: 3,
	joke: "My sister bet me a hundred dollars I couldn't build a car out of spaghetti.",
	punchLine: "You should have seen her face when I drove pasta"
}, {
	id: 4,
	joke: "How many South Americans does it take to change a lightbulb?",
	punchLine: "A Brazilian"
}];
var jokeComponent = buildJokesData();
function buildJokesData() {
	return JokesData.map(function (joke) {
		return React.createElement(Joke, {
			key: joke.id,
			joke: joke.joke,
			punchLine: joke.punchLine
		});
	});
}