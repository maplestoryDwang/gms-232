# Secret Wall
# 2103001
# The Town of Ariant (260000200)
# Clears The Existence of the Secret Organization if it is active.

sandBandits = 3927

if sm.hasQuest(sandBandits):
    response = sm.sendAskYesNo("The wall may look normal, but if you look closely, "
    "there's an intersting symbol on it. Would you like to take a closer look?")
    if response:
        sm.sendNext("There are some weird words written on the back of the wall. #b\r\n\r\n"
        "If I had an iron hammer, a dagger, a bow, and an arrow...")
        sm.setQRValue(sandBandits, "1", False)
