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
      cm.forceCompleteQuest(58740);
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=1;4=1;5=1;6=4;7=4;8=1;9=4");
      cm.updateInfoQuest(58712, "0=1;1=1;2=3;3=1;4=1");
      cm.forceStartQuest(58703, 'appear');
      cm.forceStartQuest(58708, "appear");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111001, "oid=3596358", 1915, -290, 26, 1865, 1965, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3596358", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("(我向竹野子讲述了在亡者窟中的见闻。)", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#果然不出我所料……这附近的亡灵消失是有原因的……", 37, 9111001, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#照这样下去，亡者窟的阴气会越来越强，亡灵们可能会发生暴动……。\r\n看样子我们必须调查下那个亡灵教主为什么会如此受推崇。", 37, 9111001, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("嗯，我需要帮手。", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我想想……说到调查的话，我倒有合适人选推荐。", 37, 9111001, true, true);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(9111008, "oid=3596619", 2035, -290, 11, 1985, 2085, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=3596619", "summon", 0, 0);
                cm.npc_ChangeController(9111003, "oid=3596620", 1795, -290, 38, 1745, 1845, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=3596620", 'summon', 0, 0);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
                cm.effect_NormalSpeechBalloon("这是我的专长啊", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111008, null, cm.getPlayer().getId());
                cm.effect_NormalSpeechBalloon("要想开始调查，就得先搜罗信息！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111003, null, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.askMenu_Bottom("#face0#他们两位都是很值得信赖的。你自己选吧。\r\n#L0# #b和天狗一起调查。#l#k\r\n#L1# #b和镰鼬一起调查。#l#k", 37, 9111001);
                } else {
                  if (status === V++) {
                    if (e == 0) {
                      cm.updateInfoQuest(58740, "state=9111008");
                      cm.forceStartQuest(58792, 'tengu');
                      cm.sendNormalTalk_Bottom("#face0#…………", 37, 9111008, false, true);
                    } else {
                      cm.updateInfoQuest(58740, "state=9111003");
                      cm.forceStartQuest(58792, "kama");
                      cm.sendNormalTalk_Bottom("#face0#真是英明的选择！", 37, 9111003, false, true);
                    }
                  } else {
                    if (status === V++) {
                      if (selectionLog[status - 1] == 0) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        cm.inGameDirectionEvent_AskAnswerTime(10);
                      }
                    } else {
                      if (status === V++) {
                        if (selectionLog[status - 1] == 0) {
                          cm.sendNormalTalk_Bottom("(怎么回事……是我错了吗……)", 57, 0, false, true);
                        } else {
                          cm.inGameDirectionEvent_AskAnswerTime(10);
                        }
                      } else {
                        if (status === V++) {
                          if (selectionLog[status - 1] == 0) {
                            cm.sendNormalTalk_Bottom("#face0#天狗虽然沉默寡言，但是心思缜密！\r\n一定会跟#h0#你配合很好的！", 37, 9111001, true, true);
                          } else {
                            cm.inGameDirectionEvent_AskAnswerTime(10);
                          }
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#那么事情就拜托你了。", 37, 9111001, true, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.warp(800022000, 0, false);
                              cm.npc_LeaveField("oid=3596358");
                              cm.npc_LeaveField("oid=3596358");
                              cm.npc_LeaveField("oid=3596619");
                              cm.npc_LeaveField("oid=3596619");
                              cm.npc_LeaveField("oid=3596620");
                              cm.npc_LeaveField("oid=3596620");
                              cm.eventSKill(0);
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
  }
}