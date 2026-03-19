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
      cm.showMapleHero();
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(1540847, "oid=288487555", 1441, -860, 2, 1391, 1491, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288487555", "summon", 0, 0);
      cm.npc_ChangeController(1540847, "oid=288487556", 1534, -860, 2, 1484, 1584, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288487556", "summon", 0, 0);
      cm.npc_ChangeController(1540847, "oid=288487557", 1580, -860, 2, 1530, 1630, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288487557", 'summon', 0, 0);
      cm.npc_ChangeController(1540847, "oid=288487558", 1716, -860, 1, 1666, 1766, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288487558", 'summon', 0, 0);
      cm.npc_ChangeController(1540847, "oid=288487559", 1771, -860, 1, 1721, 1821, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288487559", "summon", 0, 0);
      cm.npc_ChangeController(1540847, "oid=288487560", 1897, -860, 1, 1847, 1947, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288487560", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=288487555", "stand2", -1, 0);
      cm.npc_SetSpecialAction("oid=288487556", "stand2", -1, 0);
      cm.npc_SetSpecialAction("oid=288487557", "stand2", -1, 0);
      cm.npc_SetSpecialAction("oid=288487558", "stand2", -1, 0);
      cm.npc_SetSpecialAction("oid=288487559", 'stand2', -1, 0);
      cm.npc_SetSpecialAction("oid=288487560", "stand2", -1, 0);
      cm.fieldEffect_Hero8(1);
      cm.fieldEffect_Hero9(40, 1000);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#龙神，你没事吧？", 37, 1540801, false, true);
          cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS2/3", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face4#咳咳……从陷阱里逃出来的时候，体力都耗尽了。", 37, 1540805, true, true);
            cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS2/4", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("差不多快到了，别拖延了。", 37, 1540804, true, true);
              cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS2/5", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#是啊，如果我是那些坏人，现在就会扑上来。", 37, 1540803, true, true);
                cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS2/6", 128);
              } else {
                if (status === V++) {
                  cm.sendNewEffects(18, [500, 1000, 1000, -500, 0]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=288487555");
                      cm.setNpcSpecialActionReset("oid=288487556");
                      cm.setNpcSpecialActionReset("oid=288487557");
                      cm.setNpcSpecialActionReset("oid=288487558");
                      cm.setNpcSpecialActionReset("oid=288487559");
                      cm.setNpcSpecialActionReset("oid=288487560");
                      cm.npc_SetSpecialAction("oid=288487555", "regen", 0, 0);
                      cm.npc_SetSpecialAction("oid=288487556", "regen", 0, 0);
                      cm.npc_SetSpecialAction("oid=288487557", "regen", 0, 0);
                      cm.npc_SetSpecialAction("oid=288487558", "regen", 0, 0);
                      cm.npc_SetSpecialAction("oid=288487559", "regen", 0, 0);
                      cm.npc_SetSpecialAction("oid=288487560", "regen", 0, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8240173/Regen", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5#……没错，就是像这样。", 37, 1540803, false, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS2/7", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('你以后别说话了。', 37, 1540804, true, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS2/8", 128);
                        } else if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.dispose();
                          cm.openNpc("冒险岛英雄_Act2_遗迹之外");
                          cm.npc_LeaveField("oid=288487555");
                          cm.npc_LeaveField("oid=288487555");
                          cm.npc_LeaveField("oid=288487556");
                          cm.npc_LeaveField("oid=288487556");
                          cm.npc_LeaveField("oid=288487557");
                          cm.npc_LeaveField("oid=288487557");
                          cm.npc_LeaveField("oid=288487558");
                          cm.npc_LeaveField("oid=288487558");
                          cm.npc_LeaveField("oid=288487559");
                          cm.npc_LeaveField("oid=288487559");
                          cm.npc_LeaveField("oid=288487560");
                          cm.npc_LeaveField("oid=288487560");
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