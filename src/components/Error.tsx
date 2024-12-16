const Error = ({ error }: { error: Error }) => {
  return (
    <div className="p-4 text-xl lg:text-2xl font-bold text-gray-700">
      Error: {error.message}
    </div>
  );
};

export default Error;
