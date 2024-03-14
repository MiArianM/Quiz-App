let randomPushing;
const FormattedData = (Data) => {
  console.log(Data);
  try {
    const formatted = Data.map((aData) => {
      randomPushing = Math.floor(Math.random() * 4);
      let answers = [...aData.incorrect_answers];
      answers.splice(randomPushing, 0, aData.correct_answer);
      const formattedlist = {
        Question: aData.question,
        answers: answers,
        CorrectAnswer: aData.correct_answer,
        CorrectAnswerIndex: randomPushing,
      };
      return formattedlist;
    });
    return formatted;
  } catch (error) {}
};
export default FormattedData;
