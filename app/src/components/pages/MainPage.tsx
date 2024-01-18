import TypedText from "../TypedText";

const MainPage = () => {
  const text =
    "This is a test to see if im able to type this out and see if it works";
  return (
    <div>
      <TypedText text={text} />
    </div>
  );
};

export default MainPage;
