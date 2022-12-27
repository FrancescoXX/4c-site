export const FilterUsers = (users, target) => {
  let filteredUsers = [];
  for (let i = 0; i < users.length; i++) {
    let name = users[i].name.toLowerCase();
    let matcher = target.toLowerCase();
    if (name.includes(matcher)) {
      filteredUsers.push(users[i]);
    }
  }
  return filteredUsers;
};
