var status = -1;
var selectionLog = [];
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
      cm.killAllMobNoExp();
      cm.npc_ChangeController(3002103, 'oid=254134', -1175, 25, 12, -1225, -1125, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(3002106, "oid=110531002", -600, 20, 16, -650, -550, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=110531002", 'summon', 0, 0);
      cm.npc_ChangeController(3002104, "oid=110531003", -500, 20, 9, -550, -450, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=110531003", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("喂，你还不放手吗？放手！叫你放手！", 9, 3002103, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你是我的新娘。我今天就要娶你。", 5, 3002104, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("谁能嫁给你这样的家伙？长那么丑还敢瞧不起人？要是我的灵气还在的话，你这样的家伙，我一拳就…………！", 9, 3002103, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('阿琅！', 17, 3002103, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("隐月？呃啊~是隐月！吓，吓死我了！因为没有灵气在，我一招都使不出来。软弱的我就只能在这无助地哭了…………", 1, 3002103, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/2", "oid=110531003"], [0, 0, -135, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/2"], [0, 0, -100, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("……总之你快来救我！我不想嫁给难看的老虎！", 1, 3002103, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("太伤自尊了。我要把你们俩都杀掉！", 5, 3002104, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.npc_LeaveField("oid=110531002");
                          cm.npc_LeaveField("oid=110531002");
                          cm.npc_LeaveField("oid=110531003");
                          cm.npc_LeaveField("oid=110531003");
                          cm.spawnMob(9300811, -300, 85);
                          cm.updateInfoQuest(38022, '');
                          cm.forceStartQuest(38022, '');
                          cm.forceStartQuest(38022, "clear");
                          cm.setInGameDirectionMode(false, true, false);
                          cm.dispose();
                        } else {
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