
document.getElementById('madlibForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from refreshing

    const form = event.target;

    const kingdom = form.kingdom.value;
    const adjective = form.adjective.value;
    const feast = form.feast.value;
    const wives = form.wives.value;
    const number = form.number.value;
    const genre = form.genre.value;
    const place = form.place.value;
    const noun = form.noun.value;
    const verb = form.verb.value;
    const emotional = form.emotional.value;
    const church = form.church.value;
    const femaleName = form.femaleName.value;
    const child = form.child.value;
    const ViolentVerb = form.ViolentVerb.value;
    const nickname = form.nickname.value;
    const noun2 = form.noun2.value;
    const typeOfFood = form.typeOfFood.value;
    const bodyPart = form.bodyPart.value;
    const object = form.Object.value;
    const year = form.year.value;
    const trend = form.trend.value;

    const story = `
      <p>Once upon a time, in the kingdom of <strong>${kingdom}</strong>, there ruled a king named Henry the VIII, who was known for his <strong>${adjective}</strong> appetite for both <strong>${feast}</strong> and <strong>${wives}</strong>.</p>
      <p>Henry had <strong>${number}</strong> wives, which made his love life more dramatic than a <strong>${genre}</strong> novel. His first wife, Catherine of <strong>${place}</strong>, couldn't give him a <strong>${noun}</strong>, so he decided to <strong>${verb}</strong> her. But the Pope said “<strong>No!</strong>”, which made Henry so <strong>${emotional}</strong> that he created the <strong>${church}</strong> Church.</p>
      <p>He later married <strong>${femaleName}</strong>, who gave birth to <strong>${child}</strong>. Sadly, things didn’t end well for her—Henry had her <strong>${ViolentVerb}</strong>. After that, he married again. And again. And again... until people started calling him <strong>${nickname}</strong> behind his back.</p>
      <p>Henry was also famous for changing England’s <strong>${noun2}</strong> forever and eating <strong>${typeOfFood}</strong> until his <strong>${bodyPart}</strong> was the size of a <strong>${object}</strong>.</p>
      <p>By the time he died in <strong>${year}</strong>, Henry had turned England upside down, started a new <strong>${trend}</strong>, and left behind a royal mess for his children to clean up.</p>
      <p><strong>The End.</strong></p>
    `;

    // Display the story in a new container or element
    const outputDiv = document.createElement('div');
    outputDiv.id = 'storyOutput';
    outputDiv.style.margin = '30px auto';
    outputDiv.style.maxWidth = '700px';
    outputDiv.style.background = '#fffbe7';
    outputDiv.style.padding = '20px 30px';
    outputDiv.style.borderRadius = '12px';
    outputDiv.style.boxShadow = '0 2px 12px #d2b48c55';
    outputDiv.innerHTML = story;

    // Replace previous result if it exists
    const existing = document.getElementById('storyOutput');
    if (existing) {
      existing.replaceWith(outputDiv);
    } else {
      document.body.appendChild(outputDiv);
    }

    // Optional: Show an alert when the story is displayed
    alert("Game completed!");
  });
