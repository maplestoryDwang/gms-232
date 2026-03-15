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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b好累。歇会儿再走吧。", 3, 0, false, true);
      } else {
        if (status === V++) {
          if (cm.isQuestFinished(63105)) {
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            cm.sendNormalTalk("#b唔……奇怪，感觉现在好像很容易集中精神思考……", 3, 0, true, true);
          }
        } else {
          if (status === V++) {
            if (cm.isQuestFinished(63105)) {
              cm.setInGameDirectionMode(false, true, false);
              cm.setStandAloneMode(false);
              cm.dispose();
            } else {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            }
          } else {
            if (status === V++) {
              cm.npc_ChangeController(9400319, "oid=22463448", 770, 110, 5, 720, 820, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=22463448", "summon", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("哎呀晚了一步。已经有人占了。", 5, 9400319, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b哦，我是不是妨碍到你来休息了？", 3, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("不不，没关系。那把椅子没有主人。我只是暂时想静下心思考一会儿。", 5, 9400319, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("我下次再来也可以，你先尽情#r享受#k吧", 5, 9400319, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#b享受……？你说享受什么？", 3, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("嗯？原来你不了解#b思索之椅#k啊。", 5, 9400319, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#b思索之椅#k……？要说与普通的椅子有什么不同……除了椅子旁边有座铜像之外我想不出别的了。", 5, 9400319, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("这把椅子可以让使用者一坐上去就马上陷入沉思。尤其是能让人沉浸在自己的渴望或平日憧憬的想象中，是使人感到幸福的椅子。", 5, 9400319, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#b啊！难怪我从刚才起就发现自己不知不觉地陷入了思考，原来是这把椅子的缘故。", 3, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("是的。那我先告辞去找其他地方坐了，你好好享受吧。你会感觉到像做了场美梦一样。", 5, 9400319, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=22463448");
                                    cm.npc_LeaveField("oid=22463448");
                                    cm.askAcceptDecline("#b唔……这椅子能让我幻想出我的渴望和平时向往的场景是吧？来体验一下……)", 3, 0);
                                  } else if (status === V++) {
                                    cm.forceStartQuest(63105, '');
                                    cm.setStandAloneMode(false);
                                    cm.dispose();
                                    cm.warp(867113730, 0, false);
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
      }
    }
  }
}