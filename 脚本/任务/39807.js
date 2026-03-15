var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#哦！有钱赚了！", 36, 3004404, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#刚刚那场爆炸后，好像出现了火焰怪物。", 36, 3004404, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom('……', 56, 0, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#用导游费来消灭那些家伙再合适不过了。", 36, 3004404, true, true);
          } else {
            if (status === v++) {
              cm.askYesNo_Bottom("……需要我帮忙吗？", 56, 3004407);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#听说怪物都逃往城墙上方了，加油！", 36, 3004404, false, true);
              } else if (status === v++) {
                cm.forceStartQuest(39807, '');
                cm.updateInfoQuest(39800, "01=h0;02=h0;11=h1;04=h0;05=h1;06=h1;07=h1;08=h1");
                cm.OnStartNavigation(410000640, 0, '', 39807);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#对不起。都怪我……", 36, 3003675, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("（总之就是顺便来东边的城墙一趟。）", 56, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("守护者大人在哪里？", 56, 0, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#她刚刚往那边城墙去了，你有什么事吗？", 36, 3003675, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom('（说明了情况。）', 56, 0, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#原来如此。#r火焰祭司#k他们也是怨声载道。\r\n那也是没办法的事。教团之间的矛盾都是一代代延续下来的，少说都有几百年了。", 36, 3003675, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("有几百年了吗？", 56, 0, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#塞尔提乌是诸位古代神的圣地。\r\n长久以来为了占领这里，教团间从未停止过战争冲突。", 36, 3003675, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#即使后来#b太阳神密特拉#k的教团领导了这里，但围绕圣地的战火好像依旧在持续。", 36, 3003675, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#据说都是因为卡莱尔王子的父亲，也就是现在的国王允许其他教团进入，才得以平息战争，恢复和平。", 36, 3003675, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("原来如此。", 56, 0, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("（话说回来，要和守护者见面才行……）", 56, 0, true, true);
                          } else if (status === v++) {
                            cm.dispose();
                            cm.warp(993141008, 0, false);
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