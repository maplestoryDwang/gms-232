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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2374, 360);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074123, "oid=2596064", -2443, 323, 478, -2493, -2393, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2596064", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2596065", -2390, 323, 480, -2440, -2340, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2596065", 'summon', 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("哈……哎，真是的，\r\n我到底做了什么。", 37, 2074123, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("哈……我是不是，太像个傻瓜了？", 37, 2074123, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#这个嘛……你很坦率。\r\n现在就等等看吧。", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#不过，不管她选择了谁，你都必须接受。", 37, 2074100, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我知道了，就等等看吧。", 37, 2074123, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2596065", 1);
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                      cm.effect_Text(["#fn黑体##fs18#第二天#fs15##fn黑体#正午时分已经过去了许久"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                        } else {
                          if (status === V++) {
                            cm.gainExp(142059);
                            cm.updateInfoQuest(30426, "gExpCheck=1");
                            cm.forceCompleteQuest(30426);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(224000000, 25, true);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;