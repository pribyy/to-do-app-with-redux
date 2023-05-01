export const DarkandLightModeToggle = (props) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={props.handleThemeToggle}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
      >
        Dark Mode
      </button>
    </div>
  );
};
