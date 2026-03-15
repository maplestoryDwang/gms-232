var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face3#墨、墨玄大侠！大侠！！", 37, 9401283, false, true, 1);
    } else {
      if (status === v++) {
        cm.askAcceptDecline_Bottom("#face3#根据刚刚收到的消息，玄山派陷入了危险！\r\n虽然准确的情报还没收到，但我觉得最好尽快告诉你……没时间了，你能马上去玄山派看看吗？\r\n\r\n#r（※接受时，立即移动到任务地图。）", 37, 9401283, 1);
      } else if (status === v++) {
        cm.updateInfoQuest(65971, 'rMap=' + cm.getMapId());
        cm.dispose();
        cm.warp(875003048, 0, false);
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.npc_ChangeController(9401367, 'oid=206764', 106, -16, 1, 56, 156, 1, false, 0, false);
      cm.sendNormalTalk_Bottom("#face0##b武神之力……变得更强了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else {
      if (status === v++) {
        cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/17', 100);
        cm.sendNormalTalk_Bottom("#face0##b是迫切希望保护什么人的心情……激发出了力量吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/18", 100);
          cm.sendNormalTalk_Bottom("#face4##b（我确信自己选择的路，正是武神之力希望我走的路。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
            cm.sendNormalTalk_Bottom("#face4##b（保护别人的力量，不可能会是邪恶的力量。相信我和武神之力吧。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/20', 100);
              cm.sendNormalTalk_Bottom("#face4##b（不管前生是谁，我就是墨玄。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === v++) {
                cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/21', 100);
                cm.sendNormalTalk_Bottom("#face4##b（不要因为过去的记忆而动摇，继续前进吧。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === v++) {
                  cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100);
                  cm.curNodeEventEnd(true);
                  cm.setInGameDirectionMode(true, false, false);
                  cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/JobChangedMukhyunFront"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/JobChangedMukhyunBack"], [0, 0, 0, 1, -20, 0, 0, 0, 0]);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/jobChange", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else if (status === v++) {
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/skillUp", 100);
                  cm.getTopMsgFont("<玄山气势>技能的等级提升。", 3, 20, 20, 0, 0);
                  cm.updateInfoQuest(65999, "f4=1;training=2;right=1;entrance=1;main=2;left=2;f1=3");
                  cm.updateInfoQuest(65999, "f4=1;f6=1;training=2;right=1;entrance=1;main=2;left=2;f1=3");
                  cm.forceCompleteQuest(65971);
                  cm.openUIWithOption(3, 164121000);
                  cm.dispose();
                  cm.warp(875003043, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}