var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getQuestStatus(38002) == 1) {
    action38002(f, E, e);
  } else {
    cm.dispose();
  }
}
function action38002(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3002013, "oid=62721", -3, 13, 25, -53, 47, 1, false, 0, false);
      cm.sendNormalTalk("呼，这是怎么回事？待在家里，有了新的名字……现在不是在这里干坐着的时候。他们还活着吗？从我没死这一点来看，封印黑魔法师很可能失败了。那样的话，他们现在……", 17, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("不，他们没这么容易死。一定顽强地活了下来。好了，现在先想想我自己。先解决自己遇到的情况。反正以我现在的状态，也只会给人添麻烦。", 17, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("10级……虽然比死掉要好一点，但也没办法感到高兴。应该先留在这里，想办法找回力量。因为这是我现在唯一能做的事情。", 17, 0, true, true);
        } else if (status === V++) {
          cm.forceStartQuest(38002, "clear");
          cm.OnStartNavigation(410000000, 1, '3002005', 38002);
          cm.dispose();
        } else {
          cm.dispose();
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;