export function bodyLock(mode: boolean) {
  const paddingValue = mode
	? window.innerWidth - document.body.offsetWidth + "px"
	: "0px";
  document.body.style.paddingRight = paddingValue;
  document.documentElement.classList.toggle("lock", mode);
}