function action(f, W, U) {
  cm.sendOk("The plaque translates as follows: \r\n\"The knights of Sharenian are proud warriors. Their Longinus Spears are both formidable weapons and the key to the castle's defense: By removing them from their platforms at the highest points of this hall, they block off the entrance from invaders.\"\r\n\r\nSomething seems to be etched in English on the side, barely readable: \r\n\"evil stole spears, chained up behind obstacles. return to top of towers. large spear, grab from higher up.\"\r\n...Obviously whoever figured it out didn't have much time to live. Poor guy.");
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;