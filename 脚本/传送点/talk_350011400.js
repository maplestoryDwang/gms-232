function start() {
    if (cm.getMapId() == 350011400) {
        if (cm.getInfoQuest(33151) != "date=6") {
            cm.addPopupSay(1540504, 1000, "好像只有开启门, 才能到达上方. ", "");
            cm.updateInfoQuest(33151, "onBoard=1;dagoth=1;monpa=4;halo=1;password=1");
            cm.updateInfoQuest(33151, "date=6")
        }
    }
};