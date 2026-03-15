function action(f, W, U) {
  cm.sendNormalTalk("下面有小字写着……为了村庄的发展，请积极捐款！善良的你会受到祝福！", 0, 9000041, false, false);
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;