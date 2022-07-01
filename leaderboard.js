console.clear();

const team = [

{
  rank: 1,
  name: 'Endeavors',
  handle: 'https://teams.spotknack.com',
  img: 'endeavors.png',
  kudos: 100,
  sent: 41 },
{
  rank: 2,
  name: 'Falcon',
  handle: 'https://teams.spotknack.com',
  img: 'falcon.png',
  kudos: 200,
  sent: 7 },
{
  rank: 3,
  name: 'Phoenix Armada',
  handle: 'https://teams.spotknack.com',
  img: 'phoenix.png',
  kudos: 300,
  sent: 16 },
{
  rank: 4,
  name: 'Ravens',
  handle: 'https://teams.spotknack.com',
  img: 'ravens.png',
  kudos: 600,
  sent: 6 },
{
    rank: 5,
    name: 'Dandelions',
    handle: 'https://teams.spotknack.com',
    img: 'dandelion.png',
    kudos: 150,
    sent: 31 },
{
      rank: 6,
      name: 'Hydra',
      handle: 'https://teams.spotknack.com',
      img: 'hydra.png',
      kudos: 350,
      sent: 4 },
];

team.sort((a,b) => {
  if(a.kudos < b.kudos) return 1;

  if(a.kudos > b.kudos) return -1;

  return 0;


});



const randomEmoji = () => {
  const emojis = ['ðŸ‘', 'ðŸ‘', 'ðŸ™Œ', 'ðŸ¤©', 'ðŸ”¥', 'â­ï¸', 'ðŸ†', 'ðŸ’¯'];
  let randomNumber = Math.floor(Math.random() * emojis.length);
  return emojis[randomNumber];
};

team.forEach(member => {
  let newRow = document.createElement('li');
  newRow.classList = 'c-list__item';
  newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a class="c-media__link u-text--small" href="${member.handle}" target="_blank">@${member.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-kudos">
				<div class="u-mt--8">
					<strong>${member.kudos}</strong> ${randomEmoji()}
				</div>
			</div>
		</div>
	`;
  if (member.rank === 1) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--yellow');
    newRow.querySelector('.c-kudos').classList.add('u-text--yellow');
  } else if (member.rank === 2) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--teal');
    newRow.querySelector('.c-kudos').classList.add('u-text--teal');
  } else if (member.rank === 3) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--orange');
    newRow.querySelector('.c-kudos').classList.add('u-text--orange');
  }
  list.appendChild(newRow);
});

// Find Winner from sent kudos by sorting the drivers in the team array
let sortedTeam = team.sort((a, b) => b.sent - a.sent);
let winner = sortedTeam[0];

// Render winner card
const winnerCard = document.getElementById('winner');
winnerCard.innerHTML = `
	<div class="u-text-small u-text--medium u-mb--16">Top Team</div>
	<img class="c-avatar c-avatar--lg" src="${winner.img}"/>
	<h3 class="u-mt--16">${winner.name}</h3>
	<span class="u-text--teal u-text--small">${winner.name}</span>
`;