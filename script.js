const scores = document.getElementById("scores");

const url = 'https://livescore-sports.p.rapidapi.com/v1/meta/specification?locale=EN';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ab11d6ea47mshaa5a1960c286d92p141310jsn20556f981e65',
		'X-RapidAPI-Host': 'livescore-sports.p.rapidapi.com'
	}
};

async function scoresData() {
	const response = await fetch(url, options);
	const result = await response.json();
    const soccerData = result.DATA?.explore_page?.soccer;
    let scoresDetails = `<ul>`;
    if (soccerData) {
        for (const e of soccerData) {
            scoresDetails += `<li>${e.title}</li>`;
        }
    }
    scoresDetails += `</ul>`;
    document.getElementById("scores").innerHTML = scoresDetails;
}
// } catch (error) {
// 	console.error(error);
// }


scoresData();
