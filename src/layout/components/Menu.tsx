import Scrollbar from "@/components/scrollbar";
import {useEffect, useState} from "react";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {getMenuRoutes} from "@/router/utils";
import {useRouteToMenu} from "@/router/hooks";
import {useLocation, useMatches} from "react-router-dom";
import {useSettings} from "@/store/settingStore";
import {ThemeLayout} from "#/enum";

const Menu = () => {
  const matches = useMatches();
  const { pathname } = useLocation();

  const settings = useSettings();
  const { themeLayout } = settings;

  const routeToMenu = useRouteToMenu();
  /**
   * state
   */
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['']);
  const [menuList, setMenuList] = useState<ItemType[]>([]);

  // 初始展开的菜单
  useEffect(() => {
    if (themeLayout === ThemeLayout.Vertical) {
      const openKeys = matches
        .filter((match) => match.pathname !== '/')
        .map((match) => match.pathname);
      setOpenKeys(openKeys);
    }
    setSelectedKeys([pathname]);
  }, [pathname, matches, collapsed, themeLayout]);

  // 获取菜单列表
  useEffect(() => {
    const menuRoutes = getMenuRoutes();
    const menus = routeToMenu(menuRoutes);
    setMenuList(menus);
  }, [routeToMenu])
  return (
    <div>
      <Scrollbar>
        {/*Sidebar Menu*/}
        <Menu
          mode='inline'
          items={menuList}
          className="h-full !border-none"
          defaultOpenKeys={openKeys}
          defaultSelectedKeys={selectedKeys}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          onClick={onClick}
          style={menuStyle}
          inlineCollapsed={collapsed}
      </Scrollbar>
    </div>
  )
}

export default Menu
