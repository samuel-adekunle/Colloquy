const intentsTest = [
	{
		tag: "hello",
		patterns: ["hi", "how are you"],
		responses: ["hey"],
	},
	{
		tag: "test",
		patterns: ["jkl", "asdf"],
		responses: ["1234"],
	},
];
export default function ButtonFooter({
	removeBot,
	canDelete,
	addUrlGeneratedQuestions,
	trainBot
}) {
	const generateQuestions = () => {
		let url = prompt("Enter the website url:");
		//alert(url)
		// some code to use the url to get the intents
		addUrlGeneratedQuestions(intentsTest);
	};
	const phantomStyle = {
		display: "block",
		padding: "20px",
		height: "60px",
		width: "100%"
	};
	return (
		<div>
			<div className="phantom" />
			<div className="bg-gray-50 text-center p-3 bottom-0 w-4/5 flex justify-evenly fixed">
				<button className="btn" onClick={generateQuestions}>
					Generate Questions &amp; Answers from Website
        </button>
				<button className="btn" onClick={trainBot}>Train Bot</button>
				<button className="btn">Test Bot</button>
				<button className="btn">Generate Embed</button>
				{canDelete && <button className="btn bg-red-300 hover:bg-red-200" onClick={removeBot}>
					Delete Bot
        </button>}
			</div>
		</div>
	);
}
