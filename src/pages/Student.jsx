import { useParams } from "react-router";

const Student = () => {
  const myUsers = [
    "amit",
    "raj",
    "mithun",
    "vishwajeet",
    "vishwa",
    "neeraj",
    "sid",
    "akshay",
  ];
  const params = useParams();
  const display = () => {
    let { userName } = params;
    console.log(userName);
    if (!myUsers.includes(userName)) {
      alert("Invalid username");
      return "an invalid user";
    } else {
      return userName;
    }
  };
  return (
    <>
      <div className="w-[50%] h-screen mx-auto flex justify-center items-center rounded max-sm:w-[100%]">
        <h1 className="bg-yellow-600 w-[60%] text-center p-5 rounded text-2xl text-white font-bold border-2 border-white max-sm:w-[90%]">
          Hello I am {display()}.
        </h1>
      </div>
    </>
  );
};

export default Student;
