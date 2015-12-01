package com.crmsystem.test;

import com.crmsystem.enity.Menu;
import com.crmsystem.service.impl.MenuServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * @author fan
 * @描述:
 * @date 2015/11/3016:45
 */
@ContextConfiguration(locations = {"classpath*:spring-config.xml"})
@RunWith(SpringJUnit4ClassRunner.class)
public class MyTest {
    @Resource
    private MenuServiceImpl menuService;

    @Test
    public void my() {
        //一级菜单
        List<Menu> menusOne = menuService.getFirstMenus();
        //new一个二级菜单
        List<Menu> menusTwo = new ArrayList<Menu>();
        for (Menu menu : menusOne) {
            String menuid = menu.getMenuid();
            menusTwo = menuService.getSecondMenus(menuid);
            menusTwo.remove(0);
            //将二级菜单加入到一级菜单中
            menu.setMenus(menusTwo);
        }
        String str = "";
        String items = "";
        StringBuffer buffer = new StringBuffer();
        StringBuffer buffer2 = null;
        List<Menu> mTwo = new ArrayList<Menu>();
        //遍历一级菜单
        for (Menu m : menusOne) {
            buffer2 = new StringBuffer();
               //取得二级菜单
            mTwo = m.getMenus();
            //遍历二级菜单
            for(Menu m2:mTwo){
                //拼接二级菜单的字符串
                buffer2.append("{id:'"+m2.getMenuid()+"',text:'"+m2.getText()+"',href:'"+m2.getUrl()+"'},");
            }
            items = buffer2.toString();
            items = items.substring(0, items.lastIndexOf(","));
            str = buffer.append("{text:'"+m.getText()+"',items:["+items+"]},").toString();
            str = str.substring(0,str.lastIndexOf(","));
        }
        ObjectMapper mapper=  new ObjectMapper();
    }
}
