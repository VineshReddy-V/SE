import react from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Updates from './Updates';
import Post from './post'
import Complaints from './Complaints';
import Messpage from './Messpage';
import LeaveForm from './Outpass';
import Display from "./display";
import Payments from "./payment";
import { Payment } from "@material-ui/icons";
const { Header, Content, Footer, Sider } = Layout;


const StudentLanding = () =>
{
        return(        
          <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                  Updates
                <Link to = '/student'/>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Complaints
                <Link to = '/student/complaints'/>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                Mess Feedback
                <Link to = '/student/Messpage'/>
              </Menu.Item>
              <Menu.Item key="4" icon={<UploadOutlined />}>
                Outpass
                <Link to = '/student/Outpass'/>
              </Menu.Item>
              <Menu.Item key="5" icon={<UserOutlined />}>
                  Post
                <Link to = '/student/post'/>
              </Menu.Item>
              <Menu.Item key="6" icon={<UserOutlined />}>
                  Display Items
                <Link to = '/student/display'/>
              </Menu.Item>
              <Menu.Item key="7" icon={<UserOutlined />}>
                  Fee Payment
                <Link to = '/student/payment'/>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px 0' }}>
              <Route path = "/student" exact  component = {Updates}/>
              <Route path = "/student/complaints" exact component = {Complaints}/>
              <Route path = "/student/Messpage" exact component = {Messpage}/>
              <Route path = "/student/post" exact component = {Post}/>
              <Route path = "/student/display" exact component = {Display}/>
              <Route path = "/student/Outpass" exact component = {LeaveForm}/>
              <Route path = "/student/payment" exact component = {Payment}/>
            </Content>
          </Layout>
        </Layout>
        );
};
export default StudentLanding;



