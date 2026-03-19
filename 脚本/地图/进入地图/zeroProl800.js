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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face3#……这两个烦人的家伙，净浪费我时间。", 41, 2410008, false, true);
            cm.effect_Voice("Voice.img/Alpha/63", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这个卷轴……虽然很旧但还是能看得到字体……读一下。", 41, 2410008, true, true);
              cm.effect_Voice("Voice.img/Alpha/64", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("有个叫冒险岛世界的地方，有三名超越者。", 41, 2410008, false, true);
                  cm.effect_REPEAT("Effect/Direction13.img/effect/zero/transcendence/0", 1, 1, 1, 0, 0);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("他们分别是光明超越者、生命超越者和时间超越者，他们在各自的领域创造了世界并极力维护着。", 41, 2410008, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("冒险岛世界有个谁都不应该知道的秘密，品德高尚的两位超越者对这个毫无兴趣，但是剩下的光明超越者最终还是揭开了这个秘密。", 41, 2410008, true, true);
                      cm.effect_REPEAT("Effect/Direction13.img/effect/zero/transcendence/0", 1, 0, 0, 0, 0);
                      cm.effect_REPEAT("Effect/Direction13.img/effect/zero/blackmagician/0", 1, 1, 1, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("但代价是惨痛的，知道了世界真相的这个超越者，堕落成魔物并且想要毁灭冒险岛世界……", 41, 2410008, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("幸亏由大家的努力和牺牲，成功地将光明超越者封印了起来，阻止了灭亡，但这仅仅是临时的对策，灭亡仍然在继续。", 41, 2410008, true, true);
                          cm.effect_REPEAT("Effect/Direction13.img/effect/zero/blackmagician/0", 1, 0, 0, 0, 0);
                          cm.effect_REPEAT("Effect/Direction13.img/effect/zero/hero/0", 1, 1, 1, 0, 0);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("使用探测未来的能力知道了事实的时间超越者，决定重新创造一个可以看到不同未来的人。", 41, 2410008, true, true);
                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/hero/0", 1, 0, 0, 0, 0);
                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/lune/0", 1, 1, 1, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("由此神之子得以降生。", 41, 2410008, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/lune/0", 1, 0, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("但是，黑魔法师却盯上了这个孩子，他的部下蜘蛛王……", 41, 2410008, false, true);
                                  cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#b(记录到这里就没有了……)#k", 41, 2410008, true, true);
                                  } else if (status === V++) {
                                    cm.updateInfoQuest(40010, "clear=clear");
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