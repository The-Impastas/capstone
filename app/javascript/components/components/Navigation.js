import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { styled, alpha } from '@mui/material/styles';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const  Navigation = ({
  logged_in,
  current_user,
  sign_in_route,
  sign_out_route,
  new_user_route,
  })  => {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    // search bar stuff //
    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    }));
    // search bar stuff end //

  return (
    //desktop view start//
    //logoIcon//
    <AppBar  position="fixed">
      <Container  maxWidth="xl">
        <Toolbar  disableGutters>
          <DinnerDiningIcon  color='info' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'secondary',
              textDecoration: 'none',
            }}
          >
            Pasta Pairings
          </Typography>
​
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* //nav links to always show// */}
              <Button className="link" href="/index">
                Pastas
              </Button>
              <Button className="link" href="/aboutus">
                About Us
              </Button> 
              {/* //nav links to show logged in// */}
              {logged_in && (
              <div>
                <Button className="link" href="/protectedIndex">
                  My Pastas
                </Button>
                <Button className="link" href={ sign_out_route }>
                  Sign Out
                </Button>
              </div>
              )}
              {/* //nav links to show logged out// */}
              {!logged_in && (
              <div>
                <Button className="link" href={ sign_in_route }>
                  Sign In
                </Button>           
                <Button className="link" href={ new_user_route }>
                  Sign Up
                </Button>
              </div>
              )}
            </Menu>
          </Box>
          {/* //mobile view start//
              //logoIcon// */}
          <DinnerDiningIcon  color='info' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {/* //nav links to always show// */}        
            <Button color ="info" className="link" href="/index">
              Pastas
            </Button>
            <Button color ="info" className="link" href="/aboutus">
              About Us
            </Button>            
              {/* //nav links to show logged in// */}
            {logged_in && (
              <div>
                <Button color ="info" className="link" href="/protectedIndex">
                  My Pastas
                </Button>
                <Button color ="info" className="link" href={ sign_out_route }>
                  Sign Out
                </Button>  
              </div>
              )}
              {/* //nav links to show logged out// */}
            {!logged_in && (
              <div>
                <Button color ="info" className="link" href={ sign_in_route }>
                  Sign In
                </Button>     
                <Button color ="info" className="link" href={ new_user_route }>
                  Sign Up
                </Button>
              </div>
              )}
          </Box>
              <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 0 }}>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation ;