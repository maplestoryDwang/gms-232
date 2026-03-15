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
      cm.sendNormalTalk_Bottom("#face1#原来发生过这种事啊……", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#然后居然撕碎了画……", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#这一天天的，催得越来越紧。", 36, 3005103, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#我要趁现在尽快画画才行，可雪上加霜的是，我的颜料都用光了。", 36, 3005103, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#那我们会去找到的！肯定很好玩！", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我们？", 36, 3005102, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#是真的吗？谢谢你，没想到你居然会帮忙，\r\n我需要粉色、黄色还有褐色的颜料。", 36, 3005103, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#大部分颜料都可以通过自然界的东西制作，\r\n比方说通过花瓣和石头之类的。", 36, 3005103, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face2#我就去寻找粉色和黄色的花瓣！那剩下的颜色是……", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face7#你凭什么理所当然地看着我这边？", 36, 3005102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#当然如果你愿意，辛苦费方面我也不会亏待你的。", 36, 3005103, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#你说要找几个？", 36, 3005102, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face2#呵呵，谢谢，各找到#b15个#k花瓣应该就够了。", 36, 3005103, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.askYesNo_Bottom("#face0#那就为了海娜去找找花瓣吧？", 37, 3005100, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#花瓣就在#m410004015#。\r\n#b（*前往#m410004015#分别捕获20只#o8645227#和#o8645228#，\r\n找到#i4036782# #t4036782#和 #i4036783##t4036783#吧。）#k", 36, 3005103, false, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#那我会等着你的。", 36, 3005103, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#我先走了，一会儿工坊再见。", 36, 3005102, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#怎么了？等等我嘛！", 36, 3005100, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#你一天到晚光顾着左顾右盼，未免也太慢了吧！", 36, 3005102, true, true, 1);
                                        } else if (status === v++) {
                                          cm.forceStartQuest(36221, '');
                                          cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h0;64=h1;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;87=h1;78=h0;88=h1;set=1");
                                          cm.OnStartNavigation(410004015, 0, '', 36221);
                                          cm.dispose();
                                          cm.warp(410004000, 4, false);
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
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
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
      cm.sendNormalTalk_Bottom("#face0#噔噔！需要的材料全都攒齐了！", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#让我瞧瞧，一、二、三……", 36, 3005103, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#你正好都找到了呢，多亏了你，我又可以加油画接下来的画了。", 36, 3005103, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(36221);
          cm.gainExp(2664);
          cm.gainItem(4036782, -15);
          cm.gainItem(4036783, -15);
          cm.dispose();
        }
      }
    }
  }
}