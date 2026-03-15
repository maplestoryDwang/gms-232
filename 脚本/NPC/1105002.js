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
      cm.sendNormalTalk("通过第1届大陆会议，冒险岛世界所有职业群参加的#b冒险岛联盟#k诞生了。", 0, 1105002, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("老实说，我还不能完全相信他们。他们曾经让我们失望过一次。现在时间还没过太久，还不能完全抹去他们的过失。", 0, 1105002, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("不过我们还是同意加入联盟，这是因为我们觉得这个联盟至少不会给我们带来损害。", 0, 1105002, true, true);
        } else if (status === V++) {
          cm.sendNormalTalk("联合可以联合的力量，依靠自己的力量解决应该由自己解决的事情。我想……这应该是最好的选择。", 0, 1105002, true, false);
        } else {
          cm.dispose();
        }
      }
    }
  }
}