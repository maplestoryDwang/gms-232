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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("我……我把圣物弄没了？？我没那样的想法啊！！", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我既没魔力，也无一技之长……怎么会发生这样的事……", 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(120);
          } else {
            if (status === V++) {
              cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene1", 0, 0, 0);
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg0/5"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
              cm.npc_ChangeController(3000152, "oid=2593734", 300, 10, 3, 250, 350, 1, false, 0, false);
              cm.npc_SetSpecialAction("oid=2593734", "summon", 0, 0);
              cm.sendNormalTalk('#h0#！！等等！', 1, 3000152, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(2);
                cm.inGameDirectionEvent_AskAnswerTime(60);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.sendNormalTalk("#h0#！你别太伤心。原本圣物不会随便对人起反应的。要是对谁都能起反应，早就影响到那些祭司了。", 1, 3000152, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("可是圣物没了这个事实是板上钉钉的啊！", 17, 3000152, true, true);
                  } else if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg0/6", "oid=2593734"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                    cm.curNodeEventEnd(true);
                    cm.updateInfoQuest(65665, "playCount=0");
                    cm.updateInfoQuest(65584, "abilityToday=3");
                    cm.updateInfoQuest(65665, "ldate=20/08/22;playCount=0");
                    cm.updateInfoQuest(65585, '');
                    cm.updateInfoQuest(65585, '');
                    cm.npc_LeaveField("oid=2593734");
                    cm.dispose();
                    cm.warp(940011080, 0, false);
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.setInGameDirectionMode(false, true, false);
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