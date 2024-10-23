import EnrolledCourse from "./EnrolledCourse";

function MyCourses() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-[#00173D] text-3xl font-[700]">My Courses</h2>

      {/* Enrolled Courses */}
      <div className="flex flex-row flex-wrap items-center sm:justify-between justify-center gap-4 mx-auto">
        <EnrolledCourse />
        <EnrolledCourse />
        <EnrolledCourse />
      </div>

      {/* Semesters */}
      <div className="flex flex-row flex-wrap justify-between items-center bg-[#00173dab] rounded-full p-5 text-white font-semibold text-lg my-4">
        <p className="px-4">Semester 01</p>
        <p className="px-4">Semester 02</p>
        <p className="px-4">Semester 03</p>
        <p className="px-4">Semester 04</p>
      </div>

      {/* Module table */}
      <div className=" pb-10 mx-auto">
        <table className="sm:table-lg table-xs text-wrap">
          <tbody>
            {/* row 1 */}
            <tr>
              <th>Module 1</th>
              <td>Programming</td>
              <td>Unit 01</td>
              <td>Pending</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>Module 2</th>
              <td>Networking</td>
              <td>Unit 01</td>
              <td>Pending</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>Module 3</th>
              <td>Database</td>
              <td>Unit 02</td>
              <td>Completed</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th> Module 4</th>
              <td>Professional Practice</td>
              <td>Unit 01</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default MyCourses;
