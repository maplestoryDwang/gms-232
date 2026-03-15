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
      cm.onScriptMessage_万神殿传送门列表(5, 0, "#0#六岔路口#1#射手村#2#魔法密林#3#勇士部落#4#废弃都市#5#明珠港#6#林中之城#7#诺特勒斯号#8#圣地#9#里恩#10#天空之城#11# 冰峰雪域#12#玩具城#13#地球防御本部#14#童话村#15#水下世界#16#神木村#17#武陵#18#百草堂#19# 阿里安特#20#马加提亚#21#埃德尔斯坦#22#埃欧雷#23# 克里蒂亚斯#24# 避风港#25# 万神殿#26# 废弃营地#27#荒蛮终点站");
    } else {
      if (U == 0) {
        cm.warp(104020000, 2);
      } else {
        if (U == 1) {
          cm.warp(100000000, 0);
        } else {
          if (U == 2) {
            cm.warp(101000000, 0);
          } else {
            if (U == 3) {
              cm.warp(102000000, 0);
            } else {
              if (U == 4) {
                cm.warp(103000000, 0);
              } else {
                if (U == 5) {
                  cm.warp(104000000, 0);
                } else {
                  if (U == 6) {
                    cm.warp(105000000, 0);
                  } else {
                    if (U == 7) {
                      cm.warp(120000100, 0);
                    } else {
                      if (U == 8) {
                        cm.warp(130000000, 0);
                      } else {
                        if (U == 9) {
                          cm.warp(140000000, 0);
                        } else {
                          if (U == 10) {
                            cm.warp(200000000, 0);
                          } else {
                            if (U == 11) {
                              cm.warp(211000000, 0);
                            } else {
                              if (U == 12) {
                                cm.warp(220000000, 0);
                              } else {
                                if (U == 13) {
                                  cm.warp(221000000, 0);
                                } else {
                                  if (U == 14) {
                                    cm.warp(220000000, 0);
                                  } else {
                                    if (U == 15) {
                                      cm.warp(230000000, 0);
                                    } else {
                                      if (U == 16) {
                                        cm.warp(240000000, 0);
                                      } else {
                                        if (U == 17) {
                                          cm.warp(250000000, 0);
                                        } else {
                                          if (U == 18) {
                                            cm.warp(251000000, 0);
                                          } else {
                                            if (U == 19) {
                                              cm.warp(260000000, 0);
                                            } else {
                                              if (U == 20) {
                                                cm.warp(261000000, 0);
                                              } else {
                                                if (U == 21) {
                                                  cm.warp(310000000, 0);
                                                } else {
                                                  if (U == 22) {
                                                    cm.warp(101050000, 0);
                                                  } else {
                                                    if (U == 23) {
                                                      cm.warp(241000100, 0);
                                                    } else {
                                                      if (U == 24) {
                                                        cm.warp(31007000, 0);
                                                      } else {
                                                        if (U == 25) {
                                                          cm.warp(400000000, 0);
                                                        } else {
                                                          if (U == 26) {
                                                            cm.warp(105300000, 0);
                                                          } else if (U == 27) {
                                                            cm.warp(402000000, 0);
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
                }
              }
            }
          }
        }
      }
      cm.dispose();
    }
  }
}