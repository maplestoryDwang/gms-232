var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("噢，你抓到好多蝎子啊！这些足够了吧？要出去吗？再继续抓下去，说不定中蝎子的毒了。", 32, 2420029, false, true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(322000000, 10, false);
    }
  }
}