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
      cm.npc_ChangeController(9401277, "oid=206966", -1822, 19, 20, -1872, -1772, 1, false, 0, false);
      cm.npc_ChangeController(9401285, "oid=206967", -1680, 23, 30, -1730, -1630, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401287, "oid=2256144", -2000, -10, 19, -2050, -1950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256144", "summon", 0, 0);
      cm.npc_ChangeController(9401305, "oid=2256145", -2050, -10, 19, -2100, -2000, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256145", "summon", 0, 0);
      cm.npc_ChangeController(9401303, "oid=2256146", -2100, -10, 19, -2150, -2050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256146", "summon", 0, 0);
      cm.npc_ChangeController(9401304, "oid=2256147", -2150, -10, 19, -2200, -2100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256147", "summon", 0, 0);
      cm.npc_ChangeController(9401288, "oid=2256148", -2200, -10, 19, -2250, -2150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256148", 'summon', 0, 0);
      cm.npc_ChangeController(9401306, "oid=2256149", -2250, -10, 19, -2300, -2200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256149", "summon", 0, 0);
      cm.npc_ChangeController(9401337, "oid=2256150", -2300, -10, 19, -2350, -2250, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2256150", "summon", 0, 0);
      cm.setNPC_Fadein(9401277, 1);
      cm.setNPC_Fadein(9401285, 1);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 1500, -2000, 40]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0##b真正的学武之人在追求力量的同时，必须学会将力量用于正道之上。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##b离开门派，在广阔的世界上游历，锄强扶弱，寻找正义的真正含义的过程，才是学武之人的正道。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0##b玄山的祖先正是践行了这一点，致力于江湖的和平，才得到了世人的敬仰。\r\n我们所有人都必须继承那种精神，努力不要给玄山的名字抹黑。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1##b但是与之相比，首先必须保证的是个人的安全。 \r\n希望大家能确认这段时间的修炼成果，并且平安归来。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon("是！师父！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401303, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("是！师父！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401304, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("是！师父！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401305, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("是！师父！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401306, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("是！师父！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401287, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("是！师父！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401288, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("是！师父！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401337, null, cm.getPlayer().getId());
                      cm.teachSkill(170000001, 7, 10);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/skillUp", 100);
                      cm.getTopMsgFont("<玄山气势>技能的等级提升。", 3, 20, 20, 0, 0);
                      cm.updateInfoQuest(65999, "f4=1;f6=1;training=3;right=1;entrance=1;main=2;left=2;f1=3");
                      cm.updateInfoQuest(65999, "f4=1;f6=1;training=3;right=1;entrance=1;main=2;left=2;f1=7");
                      cm.forceCompleteQuest(65975);
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(900);
                      } else {
                        if (status === V++) {
                          cm.sendNewEffects(14, [0, 2000, 1000]);
                        } else {
                          if (status === V++) {
                            cm.sendNewEffects(19, [0]);
                          } else if (status === V++) {
                            cm.npc_LeaveField("oid=2256144");
                            cm.npc_LeaveField("oid=2256145");
                            cm.npc_LeaveField("oid=2256146");
                            cm.npc_LeaveField("oid=2256147");
                            cm.npc_LeaveField("oid=2256148");
                            cm.npc_LeaveField("oid=2256149");
                            cm.npc_LeaveField("oid=2256150");
                            cm.dispose();
                            cm.warp(260020610, 0, false);
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
      }
    }
  }
}