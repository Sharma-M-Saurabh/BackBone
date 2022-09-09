import React from "react";
import CategorySVG from "../SVG/Category";
import ChartSVG from "../SVG/Chart";
import TicketSVG from "../SVG/Ticket";
import DocumentSVG from "../SVG/Document";
import CalendarSVG from "../SVG/Calender";
import ActivitySVG from "../SVG/Activity";
import NotificationSVG from "../SVG/Notification";
import SettingsSVG from "../SVG/Settings";
import LogoutIcon from '@mui/icons-material/Logout';
import MuiDrawer from '@mui/material/Drawer';
// import {logout} from '../../Components/Utils/Helper';
// import { fetchUsersDetails, userDetails } from '../../Redux/Reducers/UserReducer';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAccessToken } from '../../Components/Utils/Helper';
// import jwt_decode from 'jwt-decode';

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton
} from "@mui/material";
import {useLocation, Outlet, useNavigate} from 'react-router-dom'
import { styled, useTheme } from "@mui/material/styles";
const drawerWidth = 240;

const DRAWER_ITEMS = [
  {
    title: "Dashboard",
    icon: (iconColor) => <CategorySVG color={iconColor} />,
    route: "/",
  },
  {
    title: "Analytics",
    icon: (iconColor) => <ChartSVG color={iconColor} />,
    route: "/analytics",
  },
  {
    title: "Stores",
    icon: (iconColor) => <TicketSVG color={iconColor} />,
    route: "/stores",
  },
  {
    title: "Orders",
    icon: (iconColor) => <DocumentSVG color={iconColor} />,
    route: "/",
  },
  {
    title: "Invoices",
    icon: (iconColor) => <CalendarSVG color={iconColor} />,
    route: "/",
  },
  {
    title: "Product Search",
    icon: (iconColor) => <ActivitySVG color={iconColor} />,
    route: "/product",
  },
  {
    title: "Customers",
    icon: (iconColor) => <NotificationSVG color={iconColor} />,
    route: "/customer",
  },
  {
    title: "Settings",
    icon: (iconColor) => <SettingsSVG color={iconColor} />,
    route: "/Setting",
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerFooter = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,

  ...(open && {
    flexDirection: 'row',
  }),
  ...(!open && {
    flexDirection: 'column',
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));


export default function MiniDrawer() {
  const theme = useTheme();
  // let location = useLocation();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const user = useSelector(userDetails);

  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    // const JWT_TOKEN = getAccessToken();
    // const decodedToken = jwt_decode(JWT_TOKEN);
    // const user_id = decodedToken['sub'];
    // dispatch(fetchUsersDetails(user_id));
  }, []);

  // const handleListItemClick = (index, drawerItem) => {
  //   // setSelectedListItemIndex(index);
  //   navigate(drawerItem.route);
  // };

  return (
    <>
      <Drawer variant='permanent' open={open}>
        <Box>
          <DrawerHeader
            sx={{
              cursor: 'pointer',
              width: '100%',
            }}
            onClick={handleDrawerToggle}
          >
            <Typography
              sx={{
                width: '100%',
                textAlign: 'center',
                fontSize: '22px',
                py: '2.5rem',
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              {open ? 'Backbone' : 'BB'}
              {/* Backbone */}
            </Typography>
          </DrawerHeader>
          <List>
            {DRAWER_ITEMS.map((item, index) => (
              <ListItem
                key={item.title}
                sx={{ display: 'block', py: 0, px: 0 }}
                // onClick={() => handleListItemClick(index, item)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                      '& .MuiSvgIcon-root': {
                        width: '1.5rem',
                        height: '1.5rem',
                      },
                    }}
                  >
                    {/* {item.icon(
                      location.pathname.split('/')[1] ===
                        item.route.split('/')[1]
                        ? theme.palette.primary.main
                        : theme.palette.primary.contrastText
                    )} */}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    // primaryTypographyProps={{
                    //   color:
                    //     location.pathname.split('/')[1] ===
                    //     item.route.split('/')[1]
                    //       ? 'primary.main'
                    //       : 'primary.contrastText',
                    // }}
                    sx={{
                      opacity: open ? 1 : 0,
                    }}
                  />
                </ListItemButton>
                {/* </Link> */}
              </ListItem>
            ))}
          </List>
        </Box>

        <DrawerFooter open={open}>
          <Avatar alt='avatar image' 
          // src={user?.image} 
          />
          {open && <Box component={'span'}>
            {/* {user.username} */}
            </Box>}
          {open && (
            <IconButton
            //   onClick={() => {
            //     logout();
            //     window.location = '/signin';
            //   }
            // }
            >
              <LogoutIcon sx={{ width: '1.5rem', height: '1.5rem' }} />
            </IconButton>
          )}
        </DrawerFooter>
      </Drawer>
      <Box
        component='main'
        sx={{
          marginLeft: open ? `${drawerWidth}px` : `65px`,
          width: `calc(100% - ${open ? `${drawerWidth}px` : `65px`})`,
          height: '100vh',
          backgroundColor: 'secondary.main',
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
