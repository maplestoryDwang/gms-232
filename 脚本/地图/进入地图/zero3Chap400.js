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
      cm.npc_ChangeController(2440000, "oid=25977", 114, 193, 12, 64, 164, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……谢谢你救了我们。绑架我们的人……就是他们吧？他们很强的，我原以为我自己很强，这样的话你们打败了他们，你们就更强了？", 33, 2440000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("如果你们真的使用武力的话，完全可以直接把我带走……但是你们又去拿药，又是抓着太守威胁我，这一切都是对我的关怀吗？", 33, 2440000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("……好了，我知道了。我已经知道我不该留在这里。这次也是，不仅是我自己，连太守也被绑架受尽了苦头……这个结果我还真没想到过。", 33, 2440000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("在武陵过了数十年的岁月，我以为早就被你们淡忘了，遇见你们的时候我也同样这么认为的。但现在才发现，你们很强大也很快乐。没有我，你们也很快乐。", 33, 2440000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("但现在我理解了，你们要走的是一条多么危险的路，走这么危险的道路，你们还不忘面带微笑……我才发现原来我对你们是如此的重要……", 33, 2440000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我决定追随你们，那就是我诞生的原因……也是我存在的意义。", 33, 2440000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……想得好，我们不会让你后悔的。", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("但，是！那之前我有件事情要做！", 33, 2440000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("什么事？", 41, 2400006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("不能就这么走了，好歹我也把太守当成亲弟弟来对待。之前被绑架，他也肯定受到了惊吓，我得去送给他一份礼物。", 33, 2440000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("已经和#p2440004#说好了，之后就交给#p2440004##k就可以了！", 33, 2440000, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(324000000, 11, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;