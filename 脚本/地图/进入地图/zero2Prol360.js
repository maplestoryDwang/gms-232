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
      cm.npc_ChangeController(2400012, "oid=24157", 724, -189, 39, 674, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=24158", -120, -78, 133, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=24159", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, 'oid=24160', 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=24161", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, 'oid=24162', 215, -230, 34, 165, 265, 0, false, 0, false);
      cm.npc_ChangeController(2400018, 'oid=24163', 520, -230, 34, 470, 556, 1, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=24164", 594, -93, 81, 544, 644, 0, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=24165", 886, -298, 146, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, 'oid=24166', 361, 5, 4, 311, 411, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
      cm.gainSkillBuff(100001263);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("呵呵，这还真有趣，既然爱哭的龙……龙族本身自尊心强而且也很明智，不会这么哭哭啼啼的。", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("更奇怪的是那个叫#p2411010#的家伙，这么凶恶的脸还说是可爱的宝宝。", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("原来这算是……#r可爱#k呀。", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face0#不是啊！不要学那种奇怪的东西！", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("不管怎样，那凶恶的龙好像是时间圣物的线索，还是得去看一下了。", 33, 2400000, true, true);
                cm.gainSkillBuff(100001263);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("嗯。问题是它哭个不停，我们也做不了什么……等着那个叫#p2411010#的家伙哄好吧。", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("现在该差不多了吧……进去看看？", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("进去看可爱的#p2411011#。", 41, 2400006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face0#跟你说过不是！", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(321190340, 0, false);
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