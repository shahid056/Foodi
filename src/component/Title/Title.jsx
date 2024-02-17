/* eslint-disable react/prop-types */
function Title({ title }) {
  return (
    <>
      <h1 className="bg-[#F2EFED] text-center font-[900] text-4xl text-[#221F20] uppercase">
        {title}
      </h1>
      <p className="text-center">Search Food By ingredients</p>
    </>
  );
}

export default Title;
