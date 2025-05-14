export const handleScrollTo = (
  sectionId: string,
  handleMenuClose?: () => void
): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  if (handleMenuClose) {
    handleMenuClose();
  }
};
