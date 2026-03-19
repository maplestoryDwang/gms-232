var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.addPopupSay(3001351, 2500, "#face8#大家都去哪了？怎么一个人都没有！？", '', 0);
    cm.addPopupSay(3001300, 2500, "#face0#注意！走廊已经被被污染的练习机器人占据了。", '', 0);
    cm.dispose();
  }
}