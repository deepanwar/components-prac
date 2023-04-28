const Heading = ({ children }) => {
  return (
    <h2 className="text-2xl border-b border-rose-500 font-semibold">
      # {children}
    </h2>
  );
};

export default Heading;
