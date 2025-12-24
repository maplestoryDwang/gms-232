# 914090010
if sm.getFieldID() == 914090010:
    sm.reservedEffect("Effect/Direction1.img/aranTutorial/Scene0")
elif sm.getFieldID() == 914090011:
    sm.reservedEffect("Effect/Direction1.img/aranTutorial/Scene10")
elif sm.getFieldID() == 914090012:
    sm.reservedEffect("Effect/Direction1.img/aranTutorial/Scene20")
elif sm.getFieldID() == 914090013:
    sm.reservedEffect("Effect/Direction1.img/aranTutorial/Scene3")
elif sm.getFieldID() == 914090100:
    sm.invokeAfterDelay(6500, "warp", 140000000)
    sm.reservedEffect("Effect/Direction1.img/aranTutorial/HandedPoleArm0")