const catProfiles = [
  {
    name: "Luci",
    id: 1,
    age: 2,
    isChonky: true,
    image:
      "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png",
    calculateCute: 100,
  },
  {
    name: "Lumi",
    id: 2,
    age: 2,
    isChonky: false,
    image:
      "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png",
    calculateCute: 50,
  },
  {
    name: "Coco",
    id: 3,
    age: 5,
    isChonky: false,
    image:
      "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png",
    calculateCute: 100,
  },
  {
    name: "Lumi2",
    id: 2,
    age: 2,
    isChonky: false,
    image:
      "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png",
    calculateCute: 50,
  },
];

//eliminate dups
const uniqueIds = new Map();
const uniqueCatProfiles = catProfiles.filter((e) => {
  if (!uniqueIds.has(e.id)) {
    uniqueIds.set(e.id, e.calculateCute);
    return true;
  } else {
    uniqueIds.set(e.id, uniqueIds.get(e.id) + e.calculateCute);
    return false;
  }
});
console.log(uniqueCatProfiles);

const getKittiesList = uniqueCatProfiles
  .map((e) => {
    console.log(e);
    return `
    <div class='profile-container'>
    <img src=${e.image}>
    <dt key=${e.id}> 
      
      <span class='cat-name-header'>${e.name}</span> 
    </dt>
    <dd>${e.name} is ${
      e.isChonky ? "chonky" : "not chunk"
    }. <br>Cuteness level: ${uniqueIds.get(e.id)}</dd>
    </div>
    `;
  })
  .join("");
console.log(getKittiesList);

//replace div#container in index.html with js rendered html
document.getElementById("container").innerHTML = `
    <dl>
     ${getKittiesList}
    </dl>
`;
