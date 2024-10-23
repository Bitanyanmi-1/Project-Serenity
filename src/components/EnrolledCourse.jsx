import paper from "../assets/enrolledCourse.png";
function EnrolledCourse() {
  return (
    <div className="bg-[#0a5e6fab] border border-[#0A5F6F] flex flex-row gap-3 p-6 rounded-2xl items-center justify-center max-w-56 text-white">
      <img className="w-10 h-10" src={paper} />
      <div className="flex flex-col">
        <h3>CourseName</h3>
        <p>CourseID</p>
      </div>
    </div>
  );
}
export default EnrolledCourse;
