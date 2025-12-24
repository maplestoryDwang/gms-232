/*
	This file is part of JWzLib: MapleStory WZ File Parser
	Copyright (C) 2019  Brenterino <brent@zygon.dev>

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
package net.swordie.ms.jwzlib;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.jwzlib.common.WzHeader;
import net.swordie.ms.jwzlib.io.WzInputStream;
import net.swordie.ms.jwzlib.io.WzMappedInputStream;

import java.nio.file.Paths;
import java.util.Map;
import java.util.Objects;

/**
 *
 * @author Brenterino
 */
public final class WzFile extends WzObject<WzFile, WzObject<?, ?>> {

	private String name;
	private short version;
	private WzDirectory root;

	private WzFile() {
	}

	public WzFile(String wz, short ver) {
		name = wz;
		version = ver;
	}

	public WzFile(String wz) {
		this(wz, ServerConstants.VERSION_FOR_WZ);
		parse(new WzMappedInputStream(Paths.get(wz)));
		addFromDataWz();
	}

	private void addFromDataWz() {
		var dataPath = ServerConstants.RESOURCES_DIR + "/Data.wz";
		var dataWz = new WzImage(dataPath, 0, 0, 0);
		dataWz.parse(new WzMappedInputStream(Paths.get(dataPath)));

		for (var wzPathNode : dataWz) {
			var wzPath = wzPathNode.getName();
			var subPaths = wzPath.split("\\\\");
			var wzFilename = subPaths[0];
			var value = wzPathNode.getPropertyValue();

			var name = getName().split("/");
			if (name[name.length - 1].replace(".wz", "").equalsIgnoreCase(wzFilename)) { // Ensure X won't be called if checking X001
				addDataWzProperty(subPaths, value);
			}
		}
	}

	private void addDataWzProperty(String[] subPaths, WzProperty value) {
		WzObject<?, ?> curNode = this;
		for (int i = 1; i < subPaths.length - 1 && curNode != null; i++) {
			// skip idx 0, as this has the filename
			var nodeName = subPaths[i];

			var child = curNode.getChild(nodeName);
			if (child == null) {
//				((WzImage) curNode).addChild(new WzImage(nodeName, 0, 0,0));
				child = curNode.getChild(nodeName);
			}
			curNode = child;
		}

		var valueNodeName = subPaths[subPaths.length - 1];
		if (curNode != null) {
			var child = curNode.getChild(valueNodeName);
			if (child == null) {
				((WzProperty) curNode).addChild(new WzProperty<>(valueNodeName, value.getValue(), WzProperty.Type.UNSIGNED_SHORT));
			} else {
				((WzProperty) child).setValue(value.getValue());
			}
		}
	}

	@Override
	public void parse(WzInputStream in) {
		WzHeader h = new WzHeader();
		h.IDENT = in.readStringByLen(4);
		h.FILE_SIZE = in.readInteger();
		in.skip(4); // just going to be 0
		h.FILE_START = in.readInteger();
		h.COPYRIGHT = in.readNullTerminatedString();
		in.setHeader(h);
		var ver = in.readShort(); // enc ver
		in.setHash(getVersionHash(version));
		root = new WzDirectory(name, h.FILE_START, h.FILE_SIZE, 0);
		root.parse(in);
	}

	public int getVersionHash(int ver) {
		int ret = 0;
		String v = String.valueOf(ver);
		for (int i = 0; i < v.length(); i++) {
			ret <<= 5;
			ret += (int) v.charAt(i);
			ret += 1;
		}
		return ret & 0xFFFFFFFF;
	}

	public WzDirectory getRoot() {
		return root;
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public Map<String, WzObject<?, ?>> getChildren() {
		return root.getChildren();
	}

	@Override
	public void addChild(WzObject<?, ?> o) {
	}

	@Override
	public int compareTo(WzFile o) {
		throw new UnsupportedOperationException("Not supported yet.");
	}

	@Override
	public boolean equals(Object o) {
		if (o instanceof WzFile) {
			WzFile other = (WzFile) o;
			return other.name.equals(name) && other.version == version;
		}
		return false;
	}

	@Override
	public int hashCode() {
		int hash = 7;
		hash = 53 * hash + Objects.hashCode(this.name);
		hash = 53 * hash + this.version;
		return hash;
	}
}
