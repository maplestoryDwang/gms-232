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
    cm.addPopupSay(3001351, 2500, "#face4#呃啊！这些不是被污染的练习机器人吗？", '', 0);
    cm.addPopupSay(3001351, 2500, "#face0#怎么这么多……到底出什么事了？", '', 0);
    cm.dispose();
  }
}