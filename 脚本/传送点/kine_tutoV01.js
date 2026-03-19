function start() {
    if (cm.getNumberFromQuestInfo(22700, "V01") == 0) {
        cm.updateInfoQuest(22700, "V01=1;V02=0");
        cm.topMsg("按下方向键和跳跃键就可以移动了。");
        cm.effect_Voice("Voice3.img/Kinesis/guide_02")
    }
};