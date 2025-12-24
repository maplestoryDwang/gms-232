package net.swordie.ms.connection.packet;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.enums.DimensionalPortalTownType;
import net.swordie.ms.enums.DimensionalPortalType;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.life.npc.NpcScriptInfo;

/**
 * Created on 2/19/2018.
 */
public class ScriptMan {

    public static OutPacket scriptMessage(NpcScriptInfo nsi, NpcMessageType nmt) {
        OutPacket outPacket = new OutPacket(OutHeader.SCRIPT_MESSAGE);

        outPacket.encodeInt(0); // just gets sent back to the server in case of type 0
        outPacket.encodeByte(nsi.getSpeakerType());
        int overrideTemplate = nsi.getOverrideSpeakerTemplateID();
        boolean override = overrideTemplate > 0 || nsi.getInnerOverrideSpeakerTemplateID() > 0;
        outPacket.encodeInt(nsi.getTemplateID());
        outPacket.encodeByte(override);
        if (override) {
            outPacket.encodeInt(overrideTemplate);
        }
        outPacket.encodeByte(nmt.getVal());
        outPacket.encodeShort(nsi.getParam());
        outPacket.encodeByte(nsi.getColor()); // idk why these are flipped

        switch (nmt) {
            case Say: // 0
            case SayOk: // 0
            case SayNext: // 0
            case SayPrev: // 0
                outPacket.encodeInt(0);
                if ((nsi.getParam() & 4) != 0) {
                    outPacket.encodeInt(nsi.getInnerOverrideSpeakerTemplateID());
                }
                outPacket.encodeString(nsi.getText());
                outPacket.encodeByte(nmt.isPrevPossible());
                outPacket.encodeByte(nmt.isNextPossible());
                outPacket.encodeInt(nmt.getDelay());
                break;
            case SayUnk: // 1
                outPacket.encodeString(nsi.getText());
                outPacket.encodeByte(nmt.isPrevPossible());
                outPacket.encodeByte(nmt.isNextPossible());
                outPacket.encodeInt(nmt.getDelay());
                break;
            case SayImage: // 2
                String[] images = nsi.getImages();
                outPacket.encodeByte(images.length);
                for (String image : images) {
                    outPacket.encodeString(image);
                }
                break;
            case AskYesNo: // 3
            case AskMenu: // 6
            case AskAccept2: // 17
                if ((nsi.getParam() & 4) != 0) {
                    outPacket.encodeInt(nsi.getInnerOverrideSpeakerTemplateID());
                }
                outPacket.encodeString(nsi.getText());
                break;
            case AskText: // 4
                if ((nsi.getParam() & 4) != 0) {
                    outPacket.encodeInt(nsi.getInnerOverrideSpeakerTemplateID());
                }
                outPacket.encodeString(nsi.getText());
                outPacket.encodeString(nsi.getDefaultText());
                outPacket.encodeShort(nsi.getMin());
                outPacket.encodeShort(nsi.getMax());
                break;
            case AskNumber: // 5
                if ((nsi.getParam() & 4) != 0) {
                    outPacket.encodeInt(nsi.getInnerOverrideSpeakerTemplateID());
                }
                outPacket.encodeString(nsi.getText());
                outPacket.encodeInt(nsi.getDefaultNumber());
                outPacket.encodeInt(nsi.getMin());
                outPacket.encodeInt(nsi.getMax());
                break;
            case InitialQuiz: // 7
                outPacket.encodeByte(nsi.getType());
                if (nsi.getType() != 1) {
                    outPacket.encodeString(nsi.getTitle());
                    outPacket.encodeString(nsi.getProblemText());
                    outPacket.encodeString(nsi.getHintText());
                    outPacket.encodeInt(nsi.getMin());
                    outPacket.encodeInt(nsi.getMax());
                    outPacket.encodeInt(nsi.getTime()); // in seconds
                }
                break;
            case InitialSpeedQuiz: // 8
                outPacket.encodeByte(nsi.getType());
                if (nsi.getType() != 1) {
                    outPacket.encodeInt(nsi.getQuizType());
                    outPacket.encodeInt(nsi.getAnswer());
                    outPacket.encodeInt(nsi.getCorrectAnswers());
                    outPacket.encodeInt(nsi.getRemaining());
                    outPacket.encodeInt(nsi.getTime()); // in seconds
                }
                break;
            case ICQuiz: // 9
                outPacket.encodeByte(nsi.getType());
                if (nsi.getType() != 1) {
                    outPacket.encodeString(nsi.getText());
                    outPacket.encodeString(nsi.getHintText());
                    outPacket.encodeInt(nsi.getTime()); // in seconds
                }
                break;
            case AskAvatar: // 10
                int[] options = nsi.getOptions();
                outPacket.encodeByte(nsi.isAngelicBuster());
                outPacket.encodeByte(nsi.isZeroBeta());
                outPacket.encodeString(nsi.getText());
                outPacket.encodeInt(0); // consumed itemId
                outPacket.encodeInt(0); // new 209
                outPacket.encodeInt(0); // new 209
                outPacket.encodeByte(options.length);
                for (int option : options) {
                    outPacket.encodeInt(option);
                }
                break;
            case AskAndroid: // 11
                outPacket.encodeString(nsi.getText());
                options = nsi.getOptions();
                outPacket.encodeByte(options.length);
                for (int option : options) {
                    outPacket.encodeInt(option);
                }
                break;
            case AskAndroid2: // 12
                outPacket.encodeString(nsi.getText());
                options = nsi.getOptions();
                outPacket.encodeByte(options.length);
                for (int option : options) {
                    outPacket.encodeInt(option);
                }
                break;
            case AskPet: // 13
            case AskActionPetEvolution: // 15
                outPacket.encodeString(nsi.getText());
                options = nsi.getOptions();
                outPacket.encodeByte(options.length);
                for (int option : options) {
                    outPacket.encodeLong(0);
                    outPacket.encodeByte(option);
                }
                break;
            case AskPetAll: // 14
                outPacket.encodeString(nsi.getText());
                options = nsi.getOptions();
                outPacket.encodeByte(options.length);
                outPacket.encodeByte(0); // bExceptionExist
                for (int option : options) {
                    outPacket.encodeLong(0);
                    outPacket.encodeByte(option);
                }
                break;
            case AskAccept: // 18
                outPacket.encodeInt(nsi.getInnerOverrideSpeakerTemplateID());
                outPacket.encodeString(nsi.getText());
                break;
            case AskBoxtext: // 19
                if ((nsi.getParam() & 4) != 0) {
                    outPacket.encodeInt(nsi.getInnerOverrideSpeakerTemplateID());
                }
                outPacket.encodeString(nsi.getText());
                outPacket.encodeString(nsi.getDefaultText()); // bParam
                outPacket.encodeShort(1); // nColumn
                outPacket.encodeShort(1); // nLine
                break;
            case AskSlideMenu: // 20
                outPacket.encodeInt(nsi.getDlgType());
                // start CSlideMenuDlg::SetSlideMenuDlg
                outPacket.encodeInt(0); // last selected
                if(nsi.getDlgType() == 0) {
                    StringBuilder sb = new StringBuilder();

                    for (DimensionalPortalType dpt : DimensionalPortalType.values()) {
                        if (dpt.getMapID() != 0) {
                            sb.append("#").append(dpt.getVal()).append("#").append(dpt.getDesc());
                        }
                    }
                    outPacket.encodeString(sb.toString());
                    outPacket.encodeInt(0);
                }
                if(nsi.getDlgType() == 5) {
                    StringBuilder sb = new StringBuilder();

                    for (DimensionalPortalTownType dpt : DimensionalPortalTownType.values()) {
                        if (dpt.getMapID() != 0) {
                            sb.append("#").append(dpt.getVal()).append("#").append(dpt.getDesc());
                        }
                    }
                    outPacket.encodeString(sb.toString());
                }
                break;
            case AskSelectMenu:
                outPacket.encodeInt(nsi.getDlgType());
                if (nsi.getDlgType() <= 0 || nsi.getDlgType() == 1) {
                    outPacket.encodeInt(nsi.getDefaultSelect());
                    outPacket.encodeByte(0); // new 227
                    outPacket.encodeInt(2); // new 227
                    outPacket.encodeInt(nsi.getSelectText().length);
                    for (String selectText : nsi.getSelectText()) {
                        outPacket.encodeString(selectText);
                    }
                }
                break;
            case AskAngelicBuster:
                break;
            case SayIllustration:
            case SayDualIllustration:
                if ((nsi.getParam() & 4) != 0) {
                    outPacket.encodeInt(nsi.getInnerOverrideSpeakerTemplateID());
                }
                outPacket.encodeString(nsi.getText());
                outPacket.encodeByte(nmt.isPrevPossible());
                outPacket.encodeByte(nmt.isNextPossible());
                outPacket.encodeInt(nsi.getTemplateID()); // nNpcId
                outPacket.encodeInt(0); // nFaceIndex
                if (nmt.equals(NpcMessageType.SayDualIllustration)) { // bIsDual
                    outPacket.encodeInt(0); // bIsLeft
                    outPacket.encodeInt(0); // nFaceIndex2
                } else {
                    outPacket.encodeByte(0); // bIsLeft
                }
                break;
            case AskYesNoIllustration:
            case AskAcceptIllustration:
            case AskYesNoDualIllustration:
            case AskAcceptDualIllustration:
                if ((nsi.getParam() & 4) != 0) {
                    outPacket.encodeInt(nsi.getInnerOverrideSpeakerTemplateID());
                }
                outPacket.encodeString(nsi.getText());
                outPacket.encodeInt(nsi.getTemplateID()); // nNpcId
                outPacket.encodeInt(0); // nFaceIndex
                if (nmt.equals(NpcMessageType.AskAcceptDualIllustration) || nmt.equals(NpcMessageType.AskYesNoDualIllustration)) { // bIsDual
                    outPacket.encodeInt(0); // bIsLeft
                    outPacket.encodeInt(0); // nFaceIndex2
                } else {
                    outPacket.encodeByte(0); // bIsLeft
                }
                break;
            case AskMenuIllustration:
            case AskMenuDualIllustration:
                outPacket.encodeString(nsi.getText());
                outPacket.encodeInt(nsi.getTemplateID()); // nNpcId
                outPacket.encodeInt(0); // nFaceIndex
                if (nmt.equals(NpcMessageType.AskMenuDualIllustration)) { // bIsDual
                    outPacket.encodeInt(0); // bIsLeft
                    outPacket.encodeInt(0); // nFaceIndex2
                } else {
                    outPacket.encodeByte(0); // bIsLeft
                }
                break;
            case AskAvatarZero:
                options = nsi.getOptions();
                outPacket.encodeByte(nsi.isAngelicBuster());
                outPacket.encodeByte(nsi.isZeroBeta());
                outPacket.encodeString(nsi.getText());
                outPacket.encodeInt(0); // consumed itemId
                outPacket.encodeInt(0); // new 209
                outPacket.encodeInt(0); // new 209
                outPacket.encodeByte(options.length);
                for (int option : options) {
                    outPacket.encodeInt(option);
                }
                // bBeta
                outPacket.encodeInt(0); // new 209
                outPacket.encodeByte(options.length);
                for (int option : options) {
                    outPacket.encodeInt(option);
                }
                break;
            case AskWeaponBox:
                outPacket.encodeString(nsi.getText());
                outPacket.encodeInt(0); // nWeaponBox

                int size = 0;
                outPacket.encodeInt(size); // loop
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0); // weaponList
                }
                break;
            // TODO all other cases
        }

        return outPacket;
    }

}
