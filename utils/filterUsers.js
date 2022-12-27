export const FilterUsers = (users, target) => {
  let filteredUsers = [];
  for (let i = 0; i < users.length; i++) {
    let name = users[i].name.toLowerCase();
    let cas = target.toLowerCase();
    if (name.includes(cas)) {
      filteredUsers.push(users[i]);
    }
  }
  return filteredUsers;
};
