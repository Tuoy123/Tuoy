import { createBrowserRouter } from "react-router-dom";

// 导入页面组件
import Friend from "@/views/Friend"
import Home from "@/views/Home"
import Mine from "@/views/Mine"
import GlobalPage from "@/views/GlobalPage";
import Login from "@/views/Login"
import Register from "@/views/Register"
import MyPet from "@/views/Mine/MyPet"
import MyOrder from "@/views/Mine/myOrder";
import MyAppraise from "@/views/Mine/myAppraise";
import MyCollection from "@/views/Mine/myCollection";
import FriendConcern from "@/views/Friend/FriendConcern";
import FriendRecommend from "@/views/Friend/FriendRecommend";
import FriendDetail from "@/views/Friend/FriendDetail";
import FriendCreatePost from "@/views/Friend/FriendCreatePost";
import FriendSearch from "@/views/Friend/FriendSearch";
import FosterCare from "@/views/Home/FosterCare";
import Hairdressing from "@/views/Home/Hairdressing";
import Knowledge from "@/views/Home/Knowledge";
import Medical from "@/views/Home/Medical";

// 路由规则
const router = createBrowserRouter([
    {
        path: "/",
        element: <GlobalPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/home/fostercare',
                element: <FosterCare />

            },
            {
                path: '/home/hairdressing',
                element: <Hairdressing />
            },
            {
                path: '/home/knowledge',
                element: <Knowledge />
            },
            {
                path: '/home/medical',
                element: <Medical />
            },
            {
                path: "/friend",
                element: <Friend />,
                children: [
                    {
                        path: "/friend/concern",
                        element: <FriendConcern />,
                    },
                    {
                        path: "/friend/recommend",
                        element: <FriendRecommend />,
                    },

                ]
            },
            {
                path: "/frienddetail/:id",
                element: <FriendDetail />,
            },
            {
                path: "/friend/createpost",
                element: <FriendCreatePost />
            },
            {
                path: "/friend/search",
                element: <FriendSearch />
            },
            {
                path: "/mine",
                element: <Mine />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/mine/mypet",
                element: <MyPet />
            },
            {
                path: "/mine/myorder",
                element: <MyOrder />

            },
            {
                path: "/mine/myappraise",
                element: <MyAppraise />
            },
            {
                path: "/mine/mycollection",
                element: <MyCollection />
            },

        ]
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>
    },
]);

export default router;