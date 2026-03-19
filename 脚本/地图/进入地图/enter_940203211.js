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
      cm.npc_ChangeController(3004010, "oid=257817", 752, -186, 10, 717, 802, 1, false, false);
      cm.npc_ChangeController(3004011, 'oid=257818', -67, 64, 2, -117, -17, 1, false, false);
      cm.npc_ChangeController(3004012, "oid=257819", 1406, 64, 21, 1391, 1456, 1, false, false);
      cm.npc_ChangeController(3004013, 'oid=257820', 228, 64, 4, 202, 278, 1, false, false);
      cm.npc_ChangeController(3004013, 'oid=257821', 295, 64, 4, 245, 332, 1, false, false);
      cm.npc_ChangeController(3004013, "oid=257822", 1721, 64, 18, 1721, 1771, 1, false, false);
      cm.npc_ChangeController(3004007, 'oid=257823', 949, 64, 13, 899, 999, 5, true, false);
      cm.npc_ChangeController(3004007, 'oid=257824', 1047, 64, 14, 1047, 1097, 5, true, false);
      cm.npc_ChangeController(3004012, "oid=257825", 989, -186, 11, 939, 1018, 1, false, false);
      cm.npc_ChangeController(3004012, "oid=257826", 1039, -186, 12, 1039, 1089, 1, false, false);
      cm.npc_ChangeController(3004045, "oid=257827", 530, -186, 9, 530, 580, 0, false, false);
      cm.npc_ChangeController(3004046, "oid=257828", 663, -186, 9, 613, 677, 0, false, false);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 889, -223);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.updateInfoQuest(37118, 'enter=1');
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#华生，你和这位朋友一起让机器停下来。", 37, 3004000, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#我不知道他是谁，但他好像全都知道，看着像是想帮我们。\r\n我会告诉你应该怎么做的。", 37, 3004000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你是？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#我会躲开人群，救出考尔保的。", 37, 3004000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#（嘟嘟囔囔）", 37, 3004008, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#可以……操控机器，让它停下来。但是按钮……", 37, 3004008, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("按钮？啊！！装置上可操作的按钮全都消失不见了！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.askYesNo_Bottom("#face1#古鲁格…… #b危险的古鲁格栖息地1#k……50个按钮……", 37, 3004008);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(402000450, 0);
                          cm.updateInfoQuest(37100, "40=h1;31=h0;41=h1;50=h1;32=h0;42=h1;51=h1;33=h1;43=h1;52=h1;dir=off;44=h1;53=h1;35=h1;45=h1;36=h1;46=h0;37=h1;47=h1;38=h1;39=h1");
                          cm.forceStartQuest(37118, '');
                          cm.setInGameDirectionMode(false, true, false);
                          cm.setStandAloneMode(false);
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