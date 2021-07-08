export const isValidUser = (formRef) => {
  if (!formRef) return;
  const { nameInput, emailInput, address } = formRef.current;
  const nameVal = nameInput.value;
  const emailVal = emailInput.value;
  const addressVal = address.value;

  if (!nameVal || !emailVal || !addressVal) return false;

  const user = { name: nameVal, email: emailVal, address: addressVal };

  return user;
};

export const formatSentence = (userName) => {
  const splitedWithSpace = userName.toLowerCase().split(" ");
  const splited = splitedWithSpace[0].split("");

  return (
    splited[0].toUpperCase() +
    splited.slice(1).join("") +
    " " +
    splitedWithSpace.slice(1).join(" ")
  );
};

// export const calcStars = (stars) => {
//   return <div className={'classes["clip-star"]'}></div>;
// };
