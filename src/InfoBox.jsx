import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./InfoBox.css"

export default function InfoBOx({ info }){
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D";
   
    return (
        <div className='InfoBox'>
            
            <div className="classContainer">
            <Card sx={{ maxWidth: 345 }}>
             <CardMedia 
             sx={{height :140}}
              image=
              {info.humidity > 80
                ? RAINY_URL : 
                info.temp > 15 ? 
                HOT_URL : 
                COLD_URL 
                } 
                title = "green iguana"
                />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 {info.city}
               </Typography>
               <Typography variant="body2" color="text.secondary" component={"span"}>
                 <p> Temprature = {info.temp}&deg;C </p>
                 <p>Humidity = {info.humidity} </p>
                 <p> Min Temp = {info.tempMin}&deg;C  </p>
                 <p> Min Max = {info.tempMax}&deg;C  </p>
                 <p>
                    The weather can be described as <i>{info.weather}and feels like {info.feelsLike}&deg;C</i>
                 </p>
               </Typography>
             </CardContent>
           </Card>
            </div>
        </div>
    )
}