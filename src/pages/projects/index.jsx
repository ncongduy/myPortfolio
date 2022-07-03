import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Card from './components/card';
import { recentProjects } from '../../data';
import './projects.scss';

function Projects() {
  return (
    <Box className="projects">
      <Grid className="projects__row" container>
        {recentProjects.map((item) => (
          <Grid key={item.id} className="projects__col" item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card
              demoLink={item.demoLink}
              sourceCode={item.sourceCode}
              title={item.title}
              img={item.img}
              description={item.description}
              techStack={item.techStack}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
