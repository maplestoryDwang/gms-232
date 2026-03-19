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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.effect_Text(["#fn黑体##fs20#测试妖怪驱散秘药"], [100, 2500, 5, 80, 0, 1, 4, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk_Bottom("听说那里已经变成了灵魂乐园……", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("好了，那就试试看吧！像这样洒在怪物身上的话……应该就会像#p9310046#所说的那样，妖怪们全都会消失的吧？", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/MobEff.img/dieExplosion/3"], [0, 0, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_Voice("Field.img/Kite/Crown", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("哦，好像有点效果？！", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.emotion(5, 5000);
                    cm.npc_ChangeController(9310576, "oid=21936377", -139, 240, 6, -189, -89, 0, true, false);
                    cm.npc_SetSpecialAction("oid=21936377", "summon", 0, 0);
                    cm.npc_ChangeController(9310588, "oid=21936378", -39, 240, 4, -89, 11, 1, true, false);
                    cm.npc_SetSpecialAction("oid=21936378", "summon", 0, 0);
                    cm.npc_ChangeController(9310588, "oid=21936379", 161, 240, 1, 111, 211, 1, true, false);
                    cm.npc_SetSpecialAction("oid=21936379", "summon", 0, 0);
                    cm.npc_ChangeController(9310588, "oid=21936380", -239, 240, 8, -289, -189, 1, true, false);
                    cm.npc_SetSpecialAction("oid=21936380", "summon", 0, 0);
                    cm.npc_ChangeController(9310588, "oid=21936381", -439, 240, 9, -489, -389, 1, true, false);
                    cm.npc_SetSpecialAction("oid=21936381", "summon", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade"], [0, 0, 0, 1, 0, 0, 0, 0]);
                      cm.sendNormalTalk_Bottom("#fs25#什么啊！！！妖怪非但没有消失，反而增加了不少……！！！", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("看来这个方法失败了。赶快回到#p9310046#那边吧。", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(1);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else if (status === V++) {
                            cm.updateInfoQuest(62006, "check=1");
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.gainItem(2434568, -1);
                            cm.npc_LeaveField("oid=21936377");
                            cm.npc_LeaveField("oid=21936378");
                            cm.npc_LeaveField("oid=21936379");
                            cm.npc_LeaveField("oid=21936380");
                            cm.npc_LeaveField("oid=21936381");
                            cm.dispose();
                            cm.warp(701210120, 2);
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