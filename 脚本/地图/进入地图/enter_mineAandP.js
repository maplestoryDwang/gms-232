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
      cm.npc_ChangeController(1520013, 'oid=307274', 343, 28, 4, 293, 393, 0, false, 0, false);
      cm.forceCompleteQuest(32368);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.sendNormalTalk("敌人的根据地在这个矿山里。我现在准备潜入进去。不过，要想进去，得有组织的证物才行。", 1, 1520013, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("啊，这些家伙是通过帽子来区分成员的。所以我现在打算弄一顶帽子……。不管是谁，只要有人经过，我就打算弄一顶过来。据我了解，这个组织的成员的忠诚度不是非常高，而且感觉他们很松散。哦，那边正好有人过来了。", 1, 1520013, true, true);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1520014, "oid=1672683", 1100, 0, 18, 1050, 1150, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=1672683", "summon", 0, 0);
          cm.updateInfoQuest(32284, "xenonNum=1672683");
          cm.inGameDirectionEvent_PushMoveInfo(0, 300, 1100, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2810);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.askMenu("那么，现在怎么办？方法由你来想。\r\n#b#L0#郑重地拜托那个人。#l\r\n#L1#狠狠威胁那个人。#l\r\n#L2#让提斯想办法。#l", 1, 1520013);
                  } else {
                    if (status === V++) {
                      cm.updateInfoQuest(32363, "select=0");
                      cm.sendNormalTalk("好吧，那你快去和那家伙搭话吧。", 1, 1520013, false, true);
                    } else if (status === V++) {
                      cm.forceCompleteQuest(32283);
                      cm.gainExp(45000);
                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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