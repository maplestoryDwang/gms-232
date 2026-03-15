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
  f == 1 ? status++ : status--;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++)
    cm.dispose();
  else if (status === V++) {
    if (cm.getItemQuantity(4001893) >= 50 && cm.getItemQuantity(4001894) >= 1) {
      cm.askYesNo('你来了，对抗者。\r\n你来这里找我是为了与黑魔法师进行决战吧？\r\n我可以使用我的力量将 50个#b#i4001893:##z4001893##k 与 1个#b#i4001894:##z4001894##k 融合为 1个#r#i4001895:##z4001895##k，准备好了吗？', 3003811);
    } else {
      cm.sendNormalTalk('你来了，对抗者。\r\n你来这里找我是为了与黑魔法师进行决战吧？\r\n我可以使用我的力量将 50个#b#i4001893:##z4001893##k 与 1个#b#i4001894:##z4001894##k 融合为 1个#r#i4001895:##z4001895##k，等你准备完成后再来找我吧。', 0, 3003811, false, false);
      cm.dispose();
    }
  } else {
    cm.gainItem(4001893, -50);
    cm.gainItem(4001894, -1);
    cm.gainItem(4001895, 1);
    cm.dispose();
    cm.sendNormalTalk('#i4001895:##z4001895#请收下吧，希望你能拯救这个世界。', 0, 3003811, false, false);
  }
}