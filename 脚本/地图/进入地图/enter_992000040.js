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
      cm.hideNpc(2540000);
      cm.hideNpc(2540017);
      cm.hideNpc(2540019);
      cm.npc_ChangeController(2540005, "oid=19899877", 1128, 48, 14, 1078, 1178, 1, false, false);
      cm.npc_SetSpecialAction("oid=19899877", "summon", 0, 0);
      cm.sendNormalTalk("为什么只将低智商的动物带来？", 17, 2540000, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("那时，我认为破坏生命的所有欲望都起源于智商…………就连黑魔法师对于破坏的渴望也是如此。", 1, 2540000, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("那样的话，很奇怪。那么，为什么在讨伐黑魔法师的时候，你也出面相助了呢？", 17, 2540000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('……', 1, 2540000, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_OnUserEff("Effect/OnUserEff.img/aquarisTower/nospeak");
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/aquarisTower/nospeak", "oid=19899877"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_OnUserEff("Effect/OnUserEff.img/aquarisTower/nospeak");
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/aquarisTower/nospeak", "oid=19899877"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("…………这个嘛？反正，我和我的真身共享记忆就只是到开始建塔时为止，所以真身所做的事情就不要来问我这个思念体了吧？我会很不爽的，不是吗？", 1, 2540000, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("…………啊，原来你们是彼此独立的存在啊。", 17, 2540000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("我认为，如果当时我的真身能够和我有着相同的思考方式…………#r#e如果能够阻止黑魔法师的话，那将是一件不很错的事#n#k…………应该可以这么判断吧？", 1, 2540000, true, true);
                        } else if (status === V++) {
                          cm.warp(992000050, 0);
                          cm.npc_LeaveField("oid=19899877");
                          cm.npc_LeaveField("oid=19899877");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;