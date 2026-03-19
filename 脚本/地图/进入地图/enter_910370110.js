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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk("那么，#b#h0##k！现在开始，我来简单说明一下隐士的技能。", 1, 1052001, false, true);
        } else {
          if (status === V++) {
            cm.askMenu("我先来提一个问题！以下哪个是隐士的基本技能呢？\r\n\r\n#b#L0#刺客标记#l\r\n#L1#斗气集中#l\r\n#L2#能量获得#l", 1, 1052001);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("是的，你答对了！就是#b刺客标记#k！", 1, 1052001, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("你很好奇这是个什么技能吗？那我来为你进行一下技能说明。", 1, 1052001, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/4100011"], [0, -450, -200, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2520);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("如你所见，再次攻击已被标记的敌人时，从敌人身上会射出飞镖，攻击周围的其他敌人。", 1, 1052001, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("啊，这就是标记吗？原来标记就是这个样子的啊。", 1, 1052001, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(1072009, "oid=1181175", -2070, 485, 139, -2120, -2020, 0, false, 0, false);
                        cm.npc_SetSpecialAction("oid=1181175", 'summon', 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(120);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Skill/410.img/skill/4100011/mob", "oid=1181175"], [30000, 0, -50, 1, 0, 1, 0, 0, 0]);
                          cm.sendNormalTalk("怎么样，这样就能一下子理解了吧？以后，攻击带有那种标记的敌人后，就会获得更好的战斗结果。", 1, 1052001, false, true);
                        } else {
                          if (status === V++) {
                            cm.askYesNo("那么，隐士技能的学习就到此为止了。如果还有疑问或想重新学习的话，点击“否”。\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1052001);
                          } else if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.forceCompleteQuest(32228);
                            cm.npc_LeaveField("oid=1181175");
                            cm.dispose();
                            cm.warp(103000003, 1, false);
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