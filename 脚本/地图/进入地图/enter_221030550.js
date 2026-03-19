var status = -1;
var selectionLog = [];
function action(f, E, e) {
  cm.useItem(2210203, false);
  cm.spawnMobLimit(4230140, 1, -335, -216, 1);
  cm.spawnMobLimit(4230140, 1, 269, -50, 1);
  cm.spawnMobLimit(4230140, 1, 1213, -50, 1);
  cm.spawnMobLimit(4230140, 1, 662, -295, 1);
  if (cm.isQuestFinished(3483) && cm.getInfoQuest(3484) === '') {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.updateInfoQuest(3484, "enter=2");
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
    cm.curNodeEventEnd(true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#来，那宅宅，就要麻烦你了。", 37, 2052000, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face2#从这里开始我也没有出入权限的……要是被抓到了该怎么办啊？", 37, 2052009, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#稍微唬弄两句再出去不就得了嘛，就说你以为这里是洗手间。", 37, 2052005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#不行~我怕。", 37, 2052009, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#那#b#ho##k，趁着我们去的这段时间，你就和冒险岛金刚在这里等着吧。", 37, 2052003, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你们打算怎么办？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#也是时候换个#b新机身#k了。", 37, 2052000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#哇，真的吗？有新机身吗？", 37, 2052009, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#当然有了~全新引进的外星生化武器。", 37, 2052002, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##fs30#来，走吧！#b宅宅金刚！#k", 37, 2052004, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#是我吗？！", 37, 2052009, true, true);
                        } else if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.dispose();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
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