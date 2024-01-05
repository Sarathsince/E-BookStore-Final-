import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ImageCard = ({ imageUrl, title, description }) => {
  return (
    <Card style={{ margin: '10px' }}> {/* Adjust the margin for spacing */}
      <CardMedia
        component="img"
        height="250"  
        image={imageUrl}
        alt="Card Image"
      />

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Example usage:
const Image = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '5px',backgroundColor:'silver' }}>
      <ImageCard
        imageUrl="https://m.media-amazon.com/images/I/61nTspM+BYL._SY466_.jpg"
        title="RENT: $150"
        description="MAN'S SEARCH FOR MEANING."
      />
      <ImageCard
        imageUrl="https://m.media-amazon.com/images/I/71m8rM7sFjL._SY466_.jpg"
        title="RENT: $150"
        description="PRESEPOLIS"
      />
      <ImageCard
        imageUrl="https://m.media-amazon.com/images/I/81PED9zwYxL._SY466_.jpg  "
        title="RENT: ₹650"
        description="MUKUND NARAVANE"
      />
      <ImageCard
        imageUrl="https://m.media-amazon.com/images/I/51ugqge4LIL._SY445_SX342_.jpg  "
        title="RENT: ₹4500"
        description="AMISH@"
      />
      <ImageCard
        imageUrl="https://m.media-amazon.com/images/I/51EIc57chuL._SX342_SY445_.jpg"
        title="RENT: ₹500"
        description="KALKI"
      />
      <ImageCard
        imageUrl="https://freshcomics.s3.amazonaws.com/issue_covers/DEC190702.jpg"
        title="RENT: ₹500"
        description="COMICS-AVANGER"
      />
    </div>
  );
};

export default Image;
