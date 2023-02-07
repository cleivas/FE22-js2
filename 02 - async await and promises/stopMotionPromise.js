function emojiStopMotion(milliseconds) {
    const emojies = ["✊", "🖐️", "✌️"];
    const h1 = document.querySelector("h1");

  const promise = new Promise(function (myResolve, myReject) {
    let num = emojies.length - 1;
    h1.innerText = emojies[num];
    console.log(num);

    //Spara ner id:t av intervallet så att vi senare kan stoppa det
    const interval = setInterval(() => {
      num--;
      if (num < 0) {
        clearInterval(interval); //Använder intervallets id för att stoppa det
        myResolve("STOP");
      } else {
        h1.innerText = emojies[num];
        console.log(num);
      }
    }, milliseconds);
  });

  return promise;
}

async function multipleEmojiStopMotion() {
  await emojiStopMotion(200);
  await emojiStopMotion(150);
  await emojiStopMotion(100);
  await emojiStopMotion(50);
  await emojiStopMotion(50);
  const message = await emojiStopMotion(50);
  document.querySelector("h1").innerText = message;
}

multipleEmojiStopMotion();