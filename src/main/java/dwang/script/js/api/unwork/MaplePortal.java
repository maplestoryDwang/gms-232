package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface MaplePortal extends DwangScriptBaseApi {

    default void setId(int id) { }

    default void getTarget() { }

    default void getPosition() { }

    default void getTargetMapId() { }

    default void setScriptName(String scriptName) { }

    default void setTarget(String target) { }

    default void setPosition(Object position) { }

    default void isPortalState() { }

    default void getId() { }

    default void setPortalState(int portalState) { }

    default void getScriptName() { }

    default void setName(String name) { }

    default void setTargetMapId(int targetMapId) { }

    default void getType() { }

    default void enterPortal(Object c) { }

}
