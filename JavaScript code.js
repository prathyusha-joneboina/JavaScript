function findUniqueUsers(list1, list2) {

  const set1 = new Set(list1);
  const set2 = new Set(list2);
  const uniqueUsersList1 = new Set([...set1].filter(user => !set2.has(user)));
  const uniqueUsersList2 = new Set([...set2].filter(user => !set1.has(user)));
  const intersectionUsers = new Set([...set1].filter(user => set2.has(user)));

  return {
    uniqueUsersList1: Array.from(uniqueUsersList1),
    uniqueUsersList2: Array.from(uniqueUsersList2),
    intersectionUsers: Array.from(intersectionUsers),
  };
}
const List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const output = findUniqueUsers(List1, List2);
console.log(output.uniqueUsersList1);
console.log(output.uniqueUsersList2);
console.log(output.intersectionUsers);