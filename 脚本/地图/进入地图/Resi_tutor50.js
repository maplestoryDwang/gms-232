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
  } else {
    if (status === V++) {
      cm.npc_ChangeController(2159006, 'oid=248464', 903, -182, 12, 883, 923, 1, false, 0, false);
      cm.sendNormalTalk("呼……格里梅尔好像去做别的事情了……好了，趁这个时候，你快逃走吧。", 1, 2159006, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我一个人逃走？那你呢……？", 3, 2159006, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我不能逃走。格里梅尔博士记得自己所有的实验体……如果有一个不见了，他一定会发现的……你快逃吧。", 1, 2159006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("不行!我们一起逃吧!", 3, 2159006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("那是不可能的。而且我……被关在这个里面。就算我想逃也不行啊……谢谢你这么关心我。好久……没有人这么关心我了。好了，你快走吧!", 1, 2159006, true, true);
            } else {
              if (status === V++) {
                cm.askYesNo("#b(贝比蒂好像放弃了一切，闭上了眼睛。该怎么办呢？看看能不能把贝比蒂的实验箱打碎吧!)#k", 3, 2159006);
              } else if (status === V++) {
                cm.gainExp(60);
                cm.dispose();
                cm.warp(931000013, 0, false);
              }
            }
          }
        }
      }
    }
  }
}