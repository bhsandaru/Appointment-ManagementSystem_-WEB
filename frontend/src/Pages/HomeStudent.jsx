import { AppBar, Box, Button, Card, CardContent, CardMedia, Chip, CssBaseline, Stack, Toolbar, Typography } from "@mui/material";
import MainTopbar from "../Components/MainTopbar";
import SideDrawer from "../Components/SideDrawer";
import { Grid } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomeStudent () {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('User');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setUser(parsedUser.User);
    }
    
  }, []);

  

  useEffect(() => {
      function getAppointments() {
        axios
          .get("http://localhost:8080/api/appointments/")
          .then((res) => {
            setAppointments(res.data);
          })
  
          .catch((err) => {
            alert(err.message);
          });
      }
      getAppointments();
    }, []);
  

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <MainTopbar/>      
        </AppBar>
        <SideDrawer/>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
  <Grid item xs={12} md={6} sx={{ height:1000 }}>
    
    <Box p={2}>
    <Stack spacing={40} direction="row" sx={{ height:'100', width: '450' }} alignItems={"left"}>
    <Chip label="Scheduled Appointments" sx={{ fontSize: "1.2rem" ,backgroundColor: "#C5ECF1"}} />
                <a href ="/StaffDetailsElec" ><Button variant='contained' sx={{ width: 100 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>VIEW
                </Button>  </a>
                
                </Stack>
     
    </Box>
    
    {appointments
  .filter(item => item.maker === user.fullName  && user.role === "Student")
  .map((item) => (
      <Grid item xs={12} sm={4} md={3} key={item.appointmentNo}>
        <Card sx={{border: '2px solid blue', width: '100%'}}>
          <CardContent >
          {/* <Typography textAlign={'center'}>
              {item.maker}
            </Typography> */}

            <Typography textAlign={'left'}>
            with {item.seeker}
            </Typography>

            <Typography textAlign={'left'}>
             Reason : {item.subject}
            </Typography>

            <Typography textAlign={'left'}>
             Date : {item.date}
            </Typography>
            <Typography textAlign={'left'}>
             Time : {item.time}
            </Typography>
            
          </CardContent>
        </Card>
      </Grid>
    ))}

    {appointments
  .filter(item => item.seeker === user.fullName  && user.role === "Lecturer")
  .map((item) => (
      <Grid item xs={12} sm={4} md={3} key={item.appointmentNo}>
        <Card sx={{border: '2px solid blue', width: '100%'}}>
          <CardContent >
          {/* <Typography textAlign={'center'}>
              {item.maker}
            </Typography> */}

            <Typography textAlign={'left'}>
            with {item.maker}
            </Typography>

            <Typography textAlign={'left'}>
             Reason : {item.subject}
            </Typography>

            <Typography textAlign={'left'}>
             Date : {item.date}
            </Typography>
            <Typography textAlign={'left'}>
             Time : {item.time}
            </Typography>
            
          </CardContent>
        </Card>
      </Grid>
    ))}

    
   

  </Grid>

  <Grid item xs={12} md={6} sx={{ bgcolor: "#C5ECF1", height:1000 }}>
    <Box p={2}>

    <Chip label="Notifications" sx={{ fontSize: "1.2rem", backgroundColor: "#FFFFFF" }} />    
    </Box>
    <button>student</button>
    <button>lecturer</button>
    {/* <div>
            <Stack direction = {'row'} flexGrow = {1}sx={{ height:400}}></Stack>
            <Stack spacing={2} direction="row" sx={{ height:'100', width: '450' }} alignItems={"left"}>
                <a href ="/StaffDetailsElec" ><Button variant='contained' sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>VIEW
                </Button>  </a>
                </Stack>
                </div> */}
  </Grid>
</Grid>

           


           

          
            </Box>
        </Box>
        </Box>
      
    );
  }