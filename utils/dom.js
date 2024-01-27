export const appendChildren = (parent, children) => {
  children.forEach((v) => {
    parent.appendChild(v);
  });
};
