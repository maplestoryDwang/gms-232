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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.useItem(2210132, false);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/ding", 100, 60);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_Text(["#fn黑体##fs26##r卡珊德拉怪谈剧场\r\n#fs14#~ 第二个故事 ~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(1530270, "oid=37592014", 357, 20, 3, 307, 407, 1, true, false);
              cm.npc_SetSpecialAction("oid=37592014", "summon", 0, 0);
              cm.npc_ChangeController(1530280, "oid=37592015", 457, 20, 9, 407, 507, 1, true, false);
              cm.npc_SetSpecialAction("oid=37592015", "summon", 0, 0);
              cm.sendNormalTalk_Bottom("现在已无人问津的漆黑的学校……", 37, 1530180, false, true);
              cm.effect_Voice("Voice2.img/Friends/CH4_02/1", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("有人避开看门大叔的视线，成功进入了那里。", 37, 1530180, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH4_02/2", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("但是，在看到黑漆漆的校门的那一瞬间……那个孩子萌生了一个想法。", 37, 1530180, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH4_02/3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("为什么要提议进行胆量考验呢？", 37, 1530180, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH4_02/4", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("但是他后悔得太晚了。", 37, 1530180, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH4_02/5", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("喂，快去摸一下大门，然后回来。", 37, 1530270, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你应该不会出尔反尔吧？你必须要走到正门那里！", 37, 1530280, true, true);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(330002408, 0);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;