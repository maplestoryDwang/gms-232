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
    cm.addPopupSay(9062174, 6000, "\r\n在新复古桑拿里，不管你站在哪个位置都可以获得与之对应的#b经验值#k或#b倾向#k！\r\n ", '', 0);
    cm.addPopupSay(9062174, 6000, "\r\n而且，据说那神秘的蒸汽有特殊功效，可以在进行#b星之力强化#k时，享受#r15星之前防损坏#k的效果！\r\n#r（极真装备除外）#k\r\n ", '', 0);
    cm.新复古王国_桑拿();
    cm.dispose();
  }
}