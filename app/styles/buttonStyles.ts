// src/styles/buttonStyles.ts
export const baseButtonClass = `
  text-dBlue   px-2 rounded-xl
  focus:outline-none shadow-lg drop-shadow-xl
  transition duration-300 ease-in-out w-full text-2xl
`;

export const getButtonStyles = (isSelected: boolean) => {
  return isSelected
    ? {
        className: baseButtonClass,
        style: {
          fontWeight: "bold",
          boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)", // Example shadow for selected state
        },
      }
    : {
        className: baseButtonClass,
        style: {
          boxShadow:
            "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1), " + // Original shadows
            "0px -6px 10px rgba(255, 255, 255, 0.2)", // Outer white shadow on top
        },
      };
};