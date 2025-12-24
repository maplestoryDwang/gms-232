# Office TV
# 1052202
# Kerning Square Lobby (103041160)
# Warp from Kerning Square Lobby to Blake's Office.

response = sm.sendAskYesNo("Bzz... Bzz... \r\n\r\n"
"Tonight on SuperStarzz: The Rise & Fall of Blake #b\r\n"
"(Do you want to head back to the present?)")
if response:
    sm.warp(103041001)