import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type CourseProps = {
  image?: string;
  title: string;
  description: string;
};

const Course: React.FC<CourseProps> = ({ image = "", title, description }) => {
  return (
    <Card>
      <CardMedia>
        <img
          src={image}
          alt="Course"
          style={{ width: "100%", height: "100%" }}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Course;
