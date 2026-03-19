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
      cm.npc_ChangeController(2400012, 'oid=28062', 728, -189, 39, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=28063", -120, -78, 133, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=28064", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=28065", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=28066", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=28067", 95, 5, 6, 45, 145, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=28068", 525, -230, 34, 475, 556, 1, false, 0, false);
      cm.npc_ChangeController(2400021, 'oid=28069', 887, -298, 146, 837, 937, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=28070", 361, 5, 4, 311, 411, 1, false, 0, false);
      cm.fieldEffect_PlayFieldSound("advStory/Buff2", 100);
      cm.npc_ChangeController(2490002, "oid=3612106", 357, -290, 35, 307, 407, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3612106", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=3612106", 'summon', 0, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……这一刻终于到来了。军团长威尔打算利用我的力量，倒回这镜世界的时间。", 33, 2490002, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我一直在等这一刻。在我的力量释放的这时，消灭军团长威尔并摧毁这镜世界的话，我所拥有的全部力量就会转移给你们俩。", 33, 2490002, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("用那个力量去冒险岛世界吧。并且请拯救那个……世……界！", 33, 2490002, true, true);
          } else {
            if (status === V++) {
              cm.forceStartQuest(40802, '1');
              cm.npc_SetSpecialAction("oid=3612106", "summon", 0, 1);
              cm.inGameDirectionEvent_AskAnswerTime(600);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=3612106");
                cm.sendNormalTalk("#face10#女神…… 最后的话语。", 41, 2400005, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face10#我们得…… 战斗吧。", 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(320000000, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;