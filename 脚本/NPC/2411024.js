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
      if (cm.getNumberFromQuestCustomData(40063) > 0) {
        cm.sendNormalTalk("你比想象的还要厉害嘛！", 33, 2411023, false, true);
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("正在等着你的，神之子……想要成为我的主人操纵时间之力吗……？", 33, 2400010, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……你就是时间圣物？……和想象的不一样啊……太年轻了吧。", 41, 2400005, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face0#我，我年轻？我不年轻！你知道我有多大么？！", 33, 2400010, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("多大？", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这，这个……这个并不重要！(不能对他说超越者重新诞生的时候，我也会重新变成新的自我……哼哼)", 33, 2400010, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face0#不管怎么样，我就是比你大！你应该要恭敬地对我！", 33, 2400010, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("……哼，两个圣物都会这样吗……？", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("两个……？难道你已经和#p2400009#见面了吗？什，什么呀……你不要我这么可爱可亲的圣物，去找那个像傻瓜一样的#p2400009#？！", 33, 2400010, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("那，那可绝对不行！我们要快点考试了！", 33, 2400010, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face6#等下……！你得告诉我考什么才可以啊！", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk('试试就知道了！', 33, 2400010, true, true);
                        } else if (status === V++) {
                          cm.npc_LeaveField("oid=2021603");
                          cm.spawnMobLimit(9300759, 1, -903, 179, 100);
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