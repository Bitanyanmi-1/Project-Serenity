function Progress(props) {
  const { type, percentage } = props;
  return (
    <div className="flex flex-row justify-between items-center p-5 bg-[#00173da2] text-white rounded-2xl border-[#00173d]">
      <p>{type} Progress: </p>
      <p>{percentage}</p>
    </div>
  );
}
export default Progress;
