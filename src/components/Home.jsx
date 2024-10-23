import EnrolledCourse from "./EnrolledCourse";
import Progress from "./Progress";

function Home() {
  return (
    <>
      <div className="mx-auto">
        <div className="flex flex-col gap-3 mb-14">
          <h2 className="text-[#00173D] text-3xl font-[700]">Dashboard</h2>
          <h4 className="font-[600] text-xl text-[#00173D]">
            Welcome back, UserName
          </h4>
        </div>

        {/* Enrolled Courses */}
        <div className="flex flex-row flex-wrap items-center justify-evenly gap-4">
          <EnrolledCourse />
          <EnrolledCourse />
          <EnrolledCourse />
        </div>

        {/* Progress */}
        <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-evenly gap-5 my-14">
          <Progress percentage="50%" type="Module" />
          <Progress percentage="70%" type="Assignment" />
          <Progress percentage="30%" type="Attendance" />
          <Progress percentage="10%" type="Course" />
        </div>
      </div>
    </>
  );
}
export default Home;
