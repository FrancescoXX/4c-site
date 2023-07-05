export const FilterUsers = (users, target) => {
  const filteredUsers = []
  for (let i = 0; i < users.length; i++) {
    const name = users[i].name.toLowerCase()
    const matcher = target.toLowerCase()
    if (name.includes(matcher)) {
      filteredUsers.push(users[i])
    }
  }
  return filteredUsers
}

export const FilterUsersByNameAndDesc = (users, target) => {
  const regex = new RegExp(target, "i")
  return users.filter((user) =>
    regex.test(user.name) ||
    regex.test(user.description))
}
