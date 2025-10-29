function setupDropdownDismiss(
    dropdownBackground,
    dropdownHeader,
    profileDropdown,
    screenSize
) {
    console.log("settingupdropdowndismiss")
    if (!dropdownBackground || !dropdownHeader || !profileDropdown) return;

    console.log("inside")
    const hideDropdown = () => {
        console.log("hidedropdown")
        dropdownBackground.style.visibility = 'hidden';
        dropdownBackground.style.opacity = '0.0';
        dropdownHeader.style.visibility = 'hidden';
        dropdownHeader.style.opacity = '0.0';
        profileDropdown.style.visibility = 'hidden';
        profileDropdown.style.opacity = '0.0';
    };

    const handleTouchOrClick = (event) => {
        console.log("handletouchorclick")
        event.preventDefault();
        event.stopPropagation();
        hideDropdown();
    };

    if (screenSize <= 800) {
        dropdownBackground.addEventListener("touchstart", handleTouchOrClick);
        dropdownHeader.addEventListener("touchstart", handleTouchOrClick);
    }

    dropdownBackground.addEventListener("click", handleTouchOrClick);
    dropdownHeader.addEventListener("click", handleTouchOrClick);
}