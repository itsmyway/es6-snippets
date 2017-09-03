let customName = document.getElementById('customname'),
    randomize = document.querySelector('.randomize'),
    story = document.querySelector('.story');

const insertX = ['Willy the Goblin', 'Big Daddy','Father Christmas'],
      insertY = ['the soup kitchen', 'Disneyland','the White House'],
      insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

let temperature = '94 farenheit',
    weight = '300'

const randomValueFromArray = (array) => {
  // console.log(array[Math.floor(Math.random()*array.length)]);
  return array[Math.floor(Math.random()*array.length)];
};

randomize.addEventListener('click', () => {
  xItem = randomValueFromArray(insertX),
  yItem = randomValueFromArray(insertY),
  zItem = randomValueFromArray(insertZ);

  if(customName.value != ''){
    name = customName.value
  }

  if(document.getElementById("uk").checked) {
     weight = Math.round(300*0.0714286) + ' stone';
     temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
  }

  story.textContent = `It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}:. ${name} saw the whole thing, but he was not surprised — ${xItem}: weighs ${weight}, and it was a hot day.`;
  story.style.visibility = 'visible';
});
