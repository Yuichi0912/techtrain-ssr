import "./App.scss";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const App = () => {
  const name: string = "森 祐一";
  const profile: string = "実務未経験ですが頑張ります!";
  console.log("ビルド確認");
  return (
    <div>
      <main>
        <h1>portfolio</h1>
        <Card sx={{ maxWidth: 400, height: 500 }}>
          <CardContent>
            <Avatar alt="Cindy Baker" src="" sx={{ width: 56, height: 56 }} />
            <Typography variant="h4" component="div">
              {name}
            </Typography>
            <Typography variant="body2">{profile}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined">WORKS</Button>
          </CardActions>
        </Card>
      </main>
    </div>
  );
};
