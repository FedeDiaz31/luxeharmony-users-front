/* const cohere = require("cohere-ai");

cohere.init("xEGatesnGaq8g5NkPQYVc7v3OWPdufIvKsO6tr5X");

function Ia() {
  const generateIa = async () => {
    const response = await cohere.generate({
      model: "command-xlarge-20221108",
      prompt: "Generate a list of 5 solutions to fix the global warming.",
      max_tokens: 500,
      temperature: 1.2,
      k: 0,
      p: 1,
      frequency_penalty: 0.3,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihoods: "NONE",
    });

    const { generations } = response.body;
    console.log(generations[0].text);
  };

  generateIa();

  return <div>Ia</div>;
}

export default Ia;
 */
