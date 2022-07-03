import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Paper} from '@mui/material';

import './card.scss';

function ImgMediaCard(props) {
  const {demoLink, sourceCode, title, img, description, techStack} = props;

  return (
    <Card className="card">
      <Paper elevation={3}>
        <CardMedia className="card__img" component="img" alt={title} image={img} />
      </Paper>

      <CardContent className="card__content">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>

        <br />

        <Typography variant="body2" color="text.secondary">
          <span>Techstack:</span> {techStack}
        </Typography>
      </CardContent>

      <CardActions className="card__button">
        <Button variant="outlined">
          <a href={demoLink} target="_blank" rel="noreferrer">
            Demo
          </a>
        </Button>

        <Button variant="outlined">
          <a href={sourceCode} target="_blank" rel="noreferrer">
            Source Code
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
