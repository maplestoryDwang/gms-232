var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getNumberFromQuestInfo(33990, "check9") > 0) {
        cm.sendNormalTalk_Bottom("我还以为你在哪儿呢，原来是在和美女聊天啊。", 37, 1540892, false, true);
      } else {
        cm.sendNormalTalk_Bottom("咳咳，咳咳，发生什么事情了？", 37, 1540865, false, true);
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("啊，馆长！真是抱歉！", 37, 1540865, true, true);
      } else {
        if (status === V++) {
          cm.askMenu_Bottom("(该怎么拿到门禁卡呢？)\r\n#b#L0#偷窃#l\r\n#L1#说谎#l\r\n#L2#堂堂正正地提出要求#l", 37, 1540892);
        } else {
          if (status === V++) {
            if (selectionLog[3] == 0) {
              cm.sendNormalTalk_Bottom("……？怎么突然碰我的肩膀？", 37, 1540865, false, true);
            } else if (selectionLog[3] == 1) {
              cm.sendNormalTalk_Bottom("什么？你说什么出现了异常，要去确认？\r\n那我也不能落下，一起去吧？", 37, 1540865, false, true);
            } else {
              cm.sendNormalTalk_Bottom("啊，你不是说这个门禁卡让我绝对不要离身的吗？\r\n你不是说相信我的嘛……", 37, 1540865, false, true);
            }
          } else {
            if (status === V++) {
              if (selectionLog[3] == 0) {
                cm.sendNormalTalk_Bottom("我这是表示日后请你多多关照，往后你要做的事情还有很多。", 37, 1540892, true, true);
              } else if (selectionLog[3] == 1) {
                cm.sendNormalTalk_Bottom("不用不用，其实没什么事情。\r\n(就算说谎似乎也没什么作用。)", 37, 1540892, true, true);
                cm.dispose();
              } else {
                cm.sendNormalTalk_Bottom(" (看来对于这个原则主义者，这套方法也不简单。)", 37, 1540892, true, true);
                cm.dispose();
              }
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("谢，谢谢。", 37, 1540865, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b(好了，到手了。)", 37, 1540892, true, true);
                } else {
                  if (status === V++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.updateInfoQuest(33996, "check7=1");
                        cm.updateInfoQuest(33995, "disguise=2");
                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 5);
                        cm.forceCompleteQuest(34002);
                        cm.gainExp(Math.pow(cm.getLevel(), 3) * 5);
                        cm.updateInfoQuest(33963, "34001=1;34002=1");
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                      } else if (status === V++) {
                        cm.setInGameDirectionMode(false, true, false);
                        cm.npc_LeaveField("oid=305845784");
                        cm.npc_LeaveField("oid=305845784");
                        cm.npc_LeaveField("oid=305845785");
                        cm.npc_LeaveField("oid=305845785");
                        cm.npc_LeaveField("oid=305845786");
                        cm.npc_LeaveField("oid=305845786");
                        cm.dispose();
                        cm.warp(350130500, 0, true);
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