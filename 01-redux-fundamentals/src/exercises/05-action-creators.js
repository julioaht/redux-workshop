function incremented() {
  return { type: "counter/incremented" };
  // ✅ return an object with a type of "counter/incremented"
}

function decremented() {
  return { type: "counter/decremented" };
  // ✅ return an object with a type of "counter/decremented"
}

function incrementedBy(amount) {
  return { type: "counter/incrementedBy", payload: amount };
  // ✅ return an object with a type of "counter/incremented" and a payload of the amount
}

export { incremented, decremented, incrementedBy };
