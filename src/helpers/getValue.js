const getValue = (key) => {
  return parseInt(localStorage.getItem(key) || 0);
}

export default getValue;
