function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6hLDfQptWoF":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgsong');
audio.src="MUSIKTIWI.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

