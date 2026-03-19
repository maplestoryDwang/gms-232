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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(2074127, "oid=1941749", 180, 288, 118, 130, 230, 1, false, 500, false);
      cm.npc_SetSpecialAction("oid=1941749", "summon", 0, 0);
      cm.npc_ChangeController(2074100, "oid=1941750", 4, 288, 115, -46, 54, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=1941750", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("嗯……我连花顺生病了都不知道。\r\n我原以为是她没教育好孩子，\r\n可所幸这家伙总算是清醒过来了，\r\n这都要多亏了你们。", 37, 2074127, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#哪有，嘿嘿，不过倒是挺意外的。\r\n原来你还和樵夫有这层关系啊？", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("眼睛，跟我很像吧？", 37, 2074127, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#什么？眼睛很像吗？那是什么……啊，难不成？", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("……这个嘛，谁都会有不愿意说出口的过去吧。\r\n你就不要再多问了。\r\n话说回来，我到底该怎么谢你们才好。", 37, 2074127, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不用，那什么，这都是应该的事情。\r\n那，我们就先走了。", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#来，#b#h0##k，虽然你演鬼演得很一般，\r\n不过这服装可真是一绝啊。\r\n既然贪婪宝玉也回收回来了，得赶紧去找朴大爷了。", 37, 2074100, true, true);
                } else if (status === V++) {
                  cm.updateInfoQuest(30435, "gExpCheck=1");
                  cm.gainExp(198883);
                  cm.forceStartQuest(30435, '');
                  cm.forceCompleteQuest(30435);
                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                  cm.dispose();
                  cm.warp(224000000, 21, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;