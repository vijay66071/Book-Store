import React from 'react';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Dashboard from './Dashboard';
import userImg from '../assets/BannerCard/book1.jpg';
const SideBar = () => {
  return (
    <div className="mt-36 bg-green-100">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo as={Link} to="/admin/dashboard" img={userImg} imgAlt="User Profile Picture"> {/* Use 'as' prop to make Sidebar.Logo a Link */}
          Admin
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} to="/admin/dashboard" icon={HiChartPie}> {/* Use 'as' prop to make Sidebar.Item a Link */}
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
              Upload Books
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/manage" icon={HiInbox}>
              Manage Books
            </Sidebar.Item>
            {/* <Sidebar.Item as={Link} to="/admin/dashboard/user" icon={HiUser}>
              Users
            </Sidebar.Item> */}
            <Sidebar.Item as={Link} to="/shop" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item as={Link} to= "/logout"  icon={HiArrowSmRight}>
              Log-Out
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/sign-up" icon={HiTable}>
              Sign-Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} to="/admin/dashboard" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="https://google.com" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/blog" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
