function getFullName(contact) {
  const names = contact.names;
  return `${names.first} ${names.surname}`;
}

function getProductsPurchased(contact) {
  const purchased = contact.purchased;

  if (!purchased || !purchased.length) {
    return "No products purchased.";
  }

  const result = [];
  for (let product of purchased) {
    result.push(product.name);
  }

  return result;
}
