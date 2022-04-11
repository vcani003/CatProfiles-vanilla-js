const catProfiles = [
  {
    name: "Luci",
    id: 1,
    age: 2,
    isChonky: true,
  },
  {
    name: "Lumi",
    id: 2,
    age: 2,
    isChonky: false,
  },
  {
    name: "Coco",
    id: 3,
    age: 5,
    isChonky: false,
  },
  {
    name: "Lumi2",
    id: 2,
    age: 2,
    isChonky: false,
  },
];

//eliminate dups
const uniqueIds = new Set();
const uniqueCatProfiles = catProfiles.filter((e) => {
  if (!uniqueIds.has(e.id)) {
    uniqueIds.add(e.id);
    return true;
  }
});
console.log(uniqueCatProfiles);

const getKittiesList = uniqueCatProfiles
  .map((e) => {
    console.log(e);
    return `<li key=${e.id}>` + e.name + "</li>";
  })
  .join("");
console.log(getKittiesList);
document.getElementById("container").innerHTML = `
    <ul>
     ${getKittiesList}
    </ul>
`;
