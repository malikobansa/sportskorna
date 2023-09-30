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
    console.log(result);

    var scoresDetails = `<ul>`;
    result.data?.DATA?.forEach(e => {
        scoresData += `<li>${e.explore_page}</li>`;
    });

    scoresDetails += `</ul>`;

    document.getElementById("scores").innerHTML = scoresDetails;
}
// } catch (error) {
// 	console.error(error);
// }


scoresData();
