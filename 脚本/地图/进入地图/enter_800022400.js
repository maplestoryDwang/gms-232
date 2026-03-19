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
      cm.forceCompleteQuest(58750);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111025, "oid=3661211", 1075, -220, 16, 1025, 1125, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3661211", 'summon', 0, 0);
      cm.npc_ChangeController(9111012, "oid=3661212", 285, -50, 13, 235, 335, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3661212", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("哈哈哈！给我逮到啦！你们这群死耗子！", 37, 9111025, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3661212"], [0, 0, 0, 1, 0, 1, 0, 0]);
        cm.sendNormalTalk_Bottom("……该死，难不成是陷阱……！！", 57, 0, true, true);
        cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#我才不是老鼠！", 37, 9111012, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呃，现在那个不重要吧……", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("果然不出#b#p9111014##k大人所料。这下看你们还能耍什么花招！\r\n竟敢顶撞#b#p9111013##k大人……受死吧……！", 37, 9111025, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("吼吼，正好我想找个试验品来试验一下我的新技术，魂魄奥义-超级大幻影鬼，算你们倒霉！", 37, 9111025, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("出来吧，#e超级大幻影鬼！！！#n给我抓住他们！", 37, 9111025, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=3661211", "overpower", 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(2100);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(9111025, "oid=3661493", 910, -30, 4, 860, 960, 1, true, 0, false);
                      cm.npc_SetSpecialAction("oid=3661493", "summon", 0, 0);
                      cm.sendNormalTalk_Bottom("#face0##h0#！！快跑！", 37, 9111012, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=3661212", -1, 500, 300);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.warp(800022009, 0, true);
                        cm.npc_LeaveField("oid=3661211");
                        cm.npc_LeaveField("oid=3661211");
                        cm.npc_LeaveField("oid=3661493");
                        cm.npc_LeaveField("oid=3661493");
                        cm.npc_LeaveField("oid=3661212");
                        cm.npc_LeaveField("oid=3661212");
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