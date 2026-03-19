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
      if (cm.getQuestStatus(100434) == 1) {
        cm.OnStartNavigation(993175400, 1, "9062245", 0);
      } else {
        if (cm.getQuestStatus(100435) == 1) {
          cm.OnStartNavigation(993175400, 1, "pt_go993175500", 0);
        } else {
          if (cm.getQuestStatus(100436) == 1) {
            cm.OnStartNavigation(993175400, 0, "pt_go993175410", 0);
          } else {
            if (cm.getQuestStatus(100437) == 1) {
              cm.OnStartNavigation(993175400, 0, "pt_go993175470", 0);
            } else {
              if (cm.getQuestStatus(100438) == 1) {
                cm.OnStartNavigation(993175400, 0, "pt_go993175460", 0);
              } else {
                if (cm.getQuestStatus(100439) == 1) {
                  cm.OnStartNavigation(993175400, 0, "pt_go993175410", 0);
                } else {
                  if (cm.getInfoQuest(100403) == 'complete=1' && cm.getQuestStatus(100441) == 0) {
                    cm.OnStartNavigation(993175400, 0, "pt_go993175460", 0);
                  } else {
                    if (cm.getQuestStatus(100441) == 1) {
                      cm.OnStartNavigation(993175400, 0, "pt_go993175570", 0);
                    } else {
                      if (cm.getQuestStatus(100442) == 1 && cm.getInfoQuest(100442) != "enter=1") {
                        cm.warp(993175403, 0, false);
                      } else {
                        if (cm.getQuestStatus(100442) == 1 && cm.getInfoQuest(100442) == "enter=1") {
                          cm.OnStartNavigation(993175400, 0, "pt_go993175480", 0);
                        } else {
                          if (cm.getQuestStatus(100444) == 1) {
                            cm.OnStartNavigation(993175400, 0, "pt_go993175420", 0);
                          } else {
                            if (cm.getQuestStatus(100446) == 1) {
                              cm.OnStartNavigation(993175400, 0, "pt_go993175500", 0);
                            } else {
                              if (cm.getQuestStatus(100446) == 2 && cm.getQuestStatus(100447) == 0) {
                                cm.OnStartNavigation(993175400, 0, "pt_go993175430", 0);
                              } else {
                                if (cm.getQuestStatus(100448) == 1) {
                                  cm.OnStartNavigation(993175400, 0, "pt_go993175500", 0);
                                } else {
                                  if (cm.getQuestStatus(100450) == 1) {
                                    cm.OnStartNavigation(993175400, 0, "pt_go993175480", 0);
                                  } else {
                                    if (cm.getQuestStatus(100451) == 2 && cm.getQuestStatus(100452) == 0) {
                                      cm.OnStartNavigation(993175400, 0, "pt_go993175440", 0);
                                    } else if (cm.getQuestStatus(100456) == 2 && cm.getQuestStatus(100457) == 0) {
                                      cm.OnStartNavigation(993175400, 0, "pt_go993175500", 0);
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