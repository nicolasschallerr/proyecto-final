function generateUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      _id: `mock_id_${i}`,
      username: `user_${i}`,
      password: "coder123",
      role: i % 2 === 0 ? "user" : "admin",
      pets: [],
    });
  }
  return users;
}

function generateData(userCount, petCount) {
  const users = generateUsers(userCount);
  const pets = [];
  for (let i = 0; i < petCount; i++) {
    pets.push({
      _id: `pet_id_${i}`,
      name: `pet_${i}`,
      owner: users[i % users.length]._id,
    });
  }
  return { users, pets };
}

module.exports = {
  generateUsers,
  generateData,
};
