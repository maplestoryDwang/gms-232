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
  } else if (status === V++) {
    cm.sendNormalTalk("你要找#b赫拉#k吗？她是住在这里，但你见不到她。因为几个月前她突然离开了村子，好像还没回来。不过她的保姆在那儿，去问问她吧… ", 0, 2012012, false, true);
    cm.dispose();
  }
}