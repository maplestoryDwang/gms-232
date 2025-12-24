package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.character.scene.EffectInfo;
import net.swordie.ms.client.character.scene.Scene;
import net.swordie.ms.enums.SceneType;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;

/**
 * Created by Asura on 28-8-2018.
 */
public class EffectData {

    public static void getEffectsFromWzPath(Scene scene) {
        String xmlPath = scene.getPath();
        String sceneName = scene.getSceneName();
        String sceneNumber = scene.getSceneNumber();

        String[] split = xmlPath.split("\\.wz/");
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/" + split[0] + ".wz");
        WzObject<?, ?> obj = file.getChildByPath(split[1]);
        WzObject<?, ?> sceneNode = obj.getChildByPath(String.format("%s/%s", sceneName, sceneNumber));
        for (WzObject<?, ?> list : sceneNode) {
            if (list.getChild("type") == null) continue;
            EffectInfo ei = new EffectInfo();

            ei.setType(SceneType.getByVal(((WzProperty<Integer>) list.getChild("type")).getValue()));

            ei.setVisual(list.getChild("visual") == null ? "" :((WzProperty<String>) list.getChild("visual")).getValue());
            ei.setStart(((WzProperty<Integer>) list.getChild("start")).getValue());
            WzProperty<Integer> fieldProperty = ((WzProperty<Integer>) list.getChild("field"));
            Integer fieldVal = null;
            if(fieldProperty != null) {
                fieldVal = fieldProperty.getValue();
            }
            if (fieldVal == null) {
                fieldVal = -1;
            }
            ei.setField(fieldVal);

            ei.setX( list.getChild("x") == null ? 0 : ((WzProperty<Integer>) list.getChild("x")).getValue());
            ei.setY( list.getChild("y") == null ? 0 : ((WzProperty<Integer>) list.getChild("y")).getValue());
            ei.setZ( list.getChild("z") == null ? 0 : ((WzProperty<Integer>) list.getChild("z")).getValue());

            if (ei.getVisual() != null) {
                String effectPath = ei.getVisual().replace("Effect/", "") + "/0";
                WzObject durObj = obj.getChildByPath(effectPath + "/delay");
                if (durObj != null) {
                    WzProperty<Integer> durProp = (WzProperty<Integer>) durObj;
                    ei.setDuration(durProp.getValue());
                }
            }
            scene.addEffectInfo(ei);
        }
    }
}
